import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const InnerHero = ({ title, image, breadcrumbs = [] }) => {
  return (
    <section className="relative">
      <div className="relative h-[28vh] md:h-[34vh] overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/15" />
        <div className="absolute inset-0 flex items-end pb-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <h1
              className="text-surface text-3xl md:text-5xl font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-surface-alt border-b border-brand/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3">
          <Breadcrumbs trail={breadcrumbs} />
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
