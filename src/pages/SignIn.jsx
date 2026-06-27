// src/pages/SignIn.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proceed to Home page
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between items-center py-6 px-4"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnf7lqQQPAIZBJVGg3MoIsRY9x_tp53O5PNcryJmP9DTQpaRyzNF74B2cl6uulTvQlFDZxQJZax2vS2TECw6n6Zov0ZxaYxdko5gHb8HKAYRaiADynyrExVsYEl9behxxAUBxREnHi8wWxrEtKLXcql4Tij0v_5G8ZIZjMBhMSASYh8N7TYrCEgkgXZC7DfFDGZ4ayYSuux5Twthx0L9R6tbVliotTutZHaOOUzQ9P50Lteix576c41gHODeJnPPdqhCag2askSTs')",
      }}
    >
      <div className="flex-1 flex items-center justify-center w-full max-w-md">
        {/* Frosted Glass Login Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center">
          {/* Logo container */}
          <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center p-2 mb-6 border border-outline-variant/10">
            <span className="font-extrabold text-primary text-xl flex items-center gap-0.5">
              S<span className="text-secondary text-sm">●</span>
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-white text-center mb-1">
            Welcome Back
          </h2>
          <p className="text-white/80 text-xs text-center mb-8">
            Sign in to discover your next favorite spot.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-white uppercase block">
                Email Address
              </label>
              <div className="relative w-full">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl py-3 pl-11 pr-4 text-xs outline-none focus:border-white focus:bg-white/15 placeholder:text-white/40"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold text-white uppercase block">
                  Password
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Reset link requested!");
                  }}
                  className="text-[10px] text-primary-container font-bold hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative w-full">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl py-3 pl-11 pr-10 text-xs outline-none focus:border-white focus:bg-white/15 placeholder:text-white/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit Sign In */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-container text-white font-bold py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-primary/25 active:scale-[0.98] mt-6 cursor-pointer"
            >
              Sign In →
            </button>
          </form>

          {/* Divider */}
          <div className="w-full flex items-center my-6">
            <div className="flex-1 border-b border-white/10" />
            <span className="text-[10px] text-white/50 px-3 font-semibold uppercase tracking-wider">
              OR
            </span>
            <div className="flex-1 border-b border-white/10" />
          </div>

          {/* Social Sign Ins */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <button
              onClick={() => navigate("/")}
              className="bg-white/15 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl border border-white/10 text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <svg size={12} className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.997 0-.746-.08-1.32-.176-1.886H12.24z" />
              </svg>
              Google
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-white/15 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl border border-white/10 text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <svg size={12} className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Footer Navigation */}
          <p className="text-white/80 text-[11px] mt-8 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary-container font-extrabold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Screen Footer */}
      <footer className="w-full flex justify-center gap-6 text-[10px] font-semibold text-white/50 tracking-wider">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <span>•</span>
        <a href="#" className="hover:text-white transition-colors">Help Center</a>
      </footer>
    </div>
  );
}
