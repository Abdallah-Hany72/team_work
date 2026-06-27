// src/pages/SignUpPage.jsx
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/auth/AuthContext";
import InputField from "../Components/Ui/Form/InputField";
import PrimaryButton from "../Components/Ui/PrimaryButton/PrimaryButton";
import PasswordField from "../Components/auth/PasswordField";
import AuthFooterLink from "../Components/auth/AuthFooterLink";
import AgreementCheckbox from "../Components/auth/AgreementCheckbox";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!agreed) {
      setError("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }

    const res = signup(fullName, email, password);
    if (res.success) {
      navigate("/signin");
    } else {
      setError(res.error);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — image */}
      <div
        className="relative hidden lg:flex flex-col justify-between p-10 text-white"
        style={{
          backgroundImage:
            "url('https://images.stockcake.com/public/0/3/3/033bc20b-acc0-4742-a7c4-6b1492d46e58_large/colorful-outdoor-cafe-stockcake.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <span className="self-start flex items-center gap-2 bg-white/90 text-on-surface text-sm font-semibold px-4 py-2 rounded-full">
          <Sparkles size={14} className="text-primary" />
          New spots added daily
        </span>

        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Discover the vibe.</h2>
          <p className="text-white/85 max-w-sm">
            Join the exclusive community of socialites finding the city's best
            kept secrets.
          </p>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 py-12 max-w-lg mx-auto w-full space-y-6">
        <span className="text-2xl font-bold text-primary">Spotly</span>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-on-surface">Create Account</h1>
          <p className="text-sm text-on-surface-variant">
            Your journey to the city's best vibes starts here.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="text-xs text-red-500 bg-red-50 border border-red-200 rounded-xl p-3 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} noValidate className="space-y-4">
          <InputField
            label="Full Name"
            placeholder="Alex Rivera"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputField
            label="Email Address"
            type="email"
            placeholder="alex@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <AgreementCheckbox checked={agreed} onChange={setAgreed} />

          <PrimaryButton type="submit" disabled={!agreed} className="w-full">
            Create Account
          </PrimaryButton>
        </form>

        <AuthFooterLink
          text="Already have an account?"
          linkText="Sign In"
          to="/signin"
        />
      </div>
    </div>
  );
}

