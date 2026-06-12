import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "./About";
import { newsItems } from "../data/mock";

const Research = () => {
  return (
    <main>
      <PageHero
        title="Research"
        sub="Innovating for industry, society and sustainability"
        image="https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=2400"
      />

      <section id="areas" className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-3xl md:text-4xl text-brand mb-8 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Research Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Applied AI & Machine Learning", "Deep learning, NLP, computer vision and edge intelligence for industry-grade applications."],
            ["IoT & Embedded Systems", "Smart agriculture, healthcare wearables, and connected mobility platforms."],
            ["Renewable Energy", "Solar PV systems, hybrid microgrids and energy management solutions."],
            ["VLSI & Communication", "Low-power chip design, signal processing, and 5G/6G wireless research."],
            ["Sustainable Civil Engineering", "Green construction materials, water resource management, and earthquake-resilient design."],
            ["Mechanical & Manufacturing", "Additive manufacturing, mechatronics, and thermal systems optimisation."],
          ].map(([t, d]) => (
            <div key={t} className="p-6 bg-white border border-brand/10 card-hover">
              <h3 className="text-xl text-brand font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t}</h3>
              <p className="text-[#3a3a3a]/85 text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="publications" className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl text-brand mb-8 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Recent Publications &amp; Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((n) => (
              <Link to={`/news/${n.id}`} key={n.id} className="bg-white card-hover overflow-hidden border border-brand/10 block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt={n.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-brand font-sans-ui">{n.date}</span>
                  <h3 className="text-brand text-lg font-semibold mt-1 leading-snug">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="centres" className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-3xl text-brand mb-6 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Research Centres</h2>
        <ul className="divide-y divide-brand/10 bg-white border border-brand/10">
          {[
            "VTU Research Centre · Computer Science & Engineering",
            "VTU Research Centre · Electronics & Communication Engineering",
            "Centre for Renewable Energy & Sustainable Systems",
            "Innovation & Entrepreneurship Development Cell (IEDC)",
            "Centre for Industry-Institute Interaction",
          ].map((c) => (
            <li key={c} className="p-4 text-[15px]">{c}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Research;
