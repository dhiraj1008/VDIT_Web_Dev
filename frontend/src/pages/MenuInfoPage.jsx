import React from "react";
import { PageHero } from "./About";

const MenuInfoPage = ({ title, sub, image, sections }) => (
  <main>
    <PageHero title={title} sub={sub} image={image} />
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-32 bg-white border border-brand/15 p-6 card-hover"
          >
            <span className="text-xs tracking-[0.18em] text-brand font-sans-ui font-semibold uppercase">
              {section.kicker}
            </span>
            <h2
              className="text-2xl text-brand font-semibold mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {section.title}
            </h2>
            <p className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-3">
              {section.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default MenuInfoPage;
