import React from "react";

const Logo = ({ size = 72 }) => {
  return (
    <img
      src="/Logos/SINCEE (1).png"
      alt="KLS VDIT Logo"
      width={size}
      height={size}
      className="flex-shrink-0 object-contain"
    />
  );
};

export default Logo;
