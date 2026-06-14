import React from "react";

const Logo = ({ size = 10}) => {
  return (
    <span
      className="inline-flex flex-col items-center justify-center flex-shrink-0 leading-none"
      style={{ width: size }}
    >
      <img
        src="/Logos/Main_logo.png"
        alt="Vishwanathrao Deshpande Institute of Technology (VDRIT) - Since 2004"
        width={size}
        height={size}
        className="w-full h-auto object-contain"
      />
      <span
        className="mt-1 font-sans-ui font-semibold text-brand tracking-[0.18em] text-center"
        style={{ fontSize: Math.max(8, Math.round(size * 0.12)) }}
        aria-hidden="true"
      >
        SINCE 2004
      </span>
    </span>
  );
};

export default Logo;
