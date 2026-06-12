import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const FloatingApply = () => {
  return (
    <Link
      to="/admissions"
      className="fixed bottom-6 right-6 z-40 bg-brand text-surface hover:bg-brand-dark shadow-lg hover:shadow-xl transition-all rounded-full px-5 py-3 flex items-center gap-2 text-sm font-sans-ui font-semibold tracking-wider group"
    >
      <GraduationCap size={18} className="group-hover:rotate-12 transition" />
      <span className="hidden sm:inline">Apply Now</span>
      <span className="sm:hidden">Apply</span>
    </Link>
  );
};

export default FloatingApply;
