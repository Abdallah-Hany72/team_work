// src/Components/auth/AuthFooterLink.jsx
import { Link } from "react-router-dom";

export default function AuthFooterLink({ text, linkText, to }) {
  return (
    <p className="text-center text-sm text-on-surface-variant">
      {text}{" "}
      <Link to={to} className="text-primary font-semibold hover:underline">
        {linkText}
      </Link>
    </p>
  );
}