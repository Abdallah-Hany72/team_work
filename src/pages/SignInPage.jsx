// src/pages/SignInPage.jsx
import { useState } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/auth/AuthContext";
import InputField from "../Components/Ui/Form/InputField";
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";
import PasswordField from "../Components/auth/PasswordField";
import AuthFooterLink from "../Components/auth/AuthFooterLink";

export default function SignInPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const res = login(email, password);
    if (res.success) {
      navigate("/");
    } else {
      setError(res.error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative px-4"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20250325/pngtree-cozy-restaurant-interior-with-red-lanterns-warm-lighting-and-elegantly-set-image_17141028.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full max-w-md bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white rounded-2xl shadow-md p-3 flex items-center gap-1.5">
            <MapPin size={18} className="text-primary" />
            <span className="font-bold text-on-surface">Spotly</span>
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-on-surface">Welcome Back</h1>
            <p className="text-sm text-on-surface-variant">
              Sign in to discover your next favorite spot.
            </p>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-xl p-3 text-center font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} noValidate className="space-y-4">
          <InputField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            icon="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-semibold text-on-surface">
                Password
              </span>
              <button
                type="button"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <PasswordField
              label=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <PrimaryButton
            type="submit"
            icon="arrow_forward"
            iconPosition="right"
            className="w-full"
          >
            Sign In
          </PrimaryButton>
        </form>

        <AuthFooterLink
          text="Don't have an account?"
          linkText="Sign Up"
          to="/signup"
        />
      </div>
    </div>
  );
}

