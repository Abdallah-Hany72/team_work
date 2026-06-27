// src/pages/SignUp.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    // Proceed to Home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left Column (50%): Visual Brand Patio Scene */}
      <div
        className="w-full md:w-1/2 min-h-[300px] md:min-h-screen bg-cover bg-center relative p-8 flex flex-col justify-between"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000')",
        }}
      >
        {/* Top Badge */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-1.5 w-fit text-white">
          <span className="material-symbols-outlined text-[14px] text-primary-container">auto_awesome</span>
          <span className="text-[10px] font-bold tracking-wider uppercase">New spots added daily</span>
        </div>

        {/* Bottom Heading */}
        <div className="space-y-4 max-w-md relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display-lg">
            Discover the vibe.
          </h1>
          <p className="text-white/90 text-sm leading-relaxed">
            Join the exclusive community of socialites finding the city's best kept secrets.
          </p>
        </div>
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />
      </div>

      {/* Right Column (50%): Form panel */}
      <div className="w-full md:w-1/2 min-h-screen bg-surface-container-lowest p-8 md:p-16 flex flex-col justify-between items-center">
        <div className="w-full max-w-md space-y-8 my-auto">
          {/* Logo */}
          <Link to="/" className="font-display-lg text-headline-lg font-bold text-primary block text-center md:text-left">
            Spotly
          </Link>

          <div>
            <h2 className="text-2xl font-extrabold text-on-surface">Create Account</h2>
            <p className="text-on-surface-variant/80 text-xs mt-1">
              Your journey to the city's best vibes starts here.
            </p>
          </div>

          {/* Social Sign Ups */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={() => navigate("/")}
              className="bg-transparent hover:bg-surface-container border border-outline-variant/35 text-on-surface font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.997 0-.746-.08-1.32-.176-1.886H12.24z" />
              </svg>
              Google
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-transparent hover:bg-surface-container border border-outline-variant/35 text-on-surface font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.13.01.27.02.4.02.83 0 1.95-.54 2.41-1.35z" />
              </svg>
              Apple
            </button>
          </div>

          <div className="w-full flex items-center">
            <div className="flex-1 border-b border-outline-variant/20" />
            <span className="text-[10px] text-on-surface-variant/40 px-3 font-semibold uppercase tracking-wider">
              or continue with email
            </span>
            <div className="flex-1 border-b border-outline-variant/20" />
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase block">
                Full Name
              </label>
              <div className="relative w-full">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/25 text-on-surface rounded-xl py-3 pl-11 pr-4 text-xs outline-none focus:border-primary placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase block">
                Email Address
              </label>
              <div className="relative w-full">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/25 text-on-surface rounded-xl py-3 pl-11 pr-4 text-xs outline-none focus:border-primary placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-on-surface-variant uppercase block">
                Password
              </label>
              <div className="relative w-full">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/25 text-on-surface rounded-xl py-3 pl-11 pr-10 text-xs outline-none focus:border-primary placeholder:text-on-surface-variant/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-on-surface transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                required
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 cursor-pointer accent-primary"
              />
              <label htmlFor="terms" className="text-xs text-on-surface-variant/80 select-none cursor-pointer">
                I agree to the <span className="text-primary hover:underline font-bold">Terms of Service</span> and <span className="text-primary hover:underline font-bold">Privacy Policy</span>.
              </label>
            </div>

            {/* Submit Sign Up */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-container text-white font-bold py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-primary/20 active:scale-[0.98] mt-6 cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Navigation link */}
          <p className="text-on-surface-variant text-[11px] text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-extrabold hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center w-full text-[10px] text-on-surface-variant/50 font-semibold tracking-wider pt-6 border-t border-outline-variant/10">
          <span>© 2024 Spotly Discovery</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Help</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
