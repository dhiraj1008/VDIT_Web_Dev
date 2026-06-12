import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = ({ trail = [] }) => {
  const location = useLocation();
  // trail: [{ label, to }] -- last item is current page
  return (
    <nav className="text-xs font-sans-ui text-[#3a3a3a]/85 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 hover:text-brand">
        <Home size={12} /> Home
      </Link>
      {trail.map((item, idx) => {
        const isLast = idx === trail.length - 1;
        return (
          <span key={idx} className="flex items-center gap-1.5">
            <ChevronRight size={12} className="opacity-50" />
            {isLast || !item.to ? (
              <span className="text-brand font-medium">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:text-brand">
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
      <span className="sr-only">{location.pathname}</span>
    </nav>
  );
};

export default Breadcrumbs;
