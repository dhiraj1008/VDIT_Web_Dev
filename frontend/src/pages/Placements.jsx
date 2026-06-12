import React from "react";
import { PageHero } from "./About";
import { placements, stats } from "../data/mock";
import { Briefcase, TrendingUp, Award, Users } from "lucide-react";

const Placements = () => {
  return (
    <main>
      <PageHero
        title="Placements"
        sub="Industry connect, training and career outcomes at VDIT"
        image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            [TrendingUp, "Placement %", stats.placement, "Across eligible UG batches in 2025-26"],
            [Award, "Highest Package", "₹ 18 LPA", "Tech sector · batch 2025"],
            [Briefcase, "Average Package", "₹ 4.8 LPA", "All eligible students"],
            [Users, "Recruiters", "60+", "Across IT, core engineering and PSUs"],
          ].map(([Icon, k, v, sub]) => (
            <div key={k} className="bg-white p-6 border border-brand/15 card-hover">
              <Icon size={22} className="text-brand" />
              <p className="text-xs uppercase tracking-widest text-[#3a3a3a]/85 mt-2">{k}</p>
              <p className="text-3xl text-brand font-semibold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v}</p>
              <p className="text-xs text-[#3a3a3a]/70 mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="recruiters" className="bg-surface-alt/60 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl text-brand mb-8 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Top Recruiters</h2>
          <div className="bg-white border border-brand/15">
            <table className="w-full text-sm">
              <thead className="bg-brand text-surface">
                <tr>
                  <th className="text-left p-3">Company</th>
                  <th className="text-left p-3">Offers (2025-26)</th>
                  <th className="text-left p-3">Role</th>
                </tr>
              </thead>
              <tbody>
                {placements.map((p) => (
                  <tr key={p.company} className="odd:bg-surface/40">
                    <td className="p-3 border-t border-brand/10 font-semibold text-brand">{p.company}</td>
                    <td className="p-3 border-t border-brand/10">{p.offers}</td>
                    <td className="p-3 border-t border-brand/10 italic">{p.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="training" className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <h2 className="text-3xl md:text-4xl text-brand mb-6 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Training & Skill Development</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["Aptitude & Reasoning", "Quantitative aptitude, logical reasoning and verbal ability training across all 8 semesters."],
            ["Technical Bootcamps", "Hands-on bootcamps in cloud, full-stack, data science, and embedded systems."],
            ["Communication & Soft Skills", "Group discussions, mock interviews, and presentation training in association with industry trainers."],
            ["Internship Cell", "Mandatory 6–8 week internships during summer of 6th semester through industry MoUs."],
            ["Mock Drives", "Weekly mock placement drives in collaboration with sister KLS institutions."],
            ["Higher Education Cell", "GRE / TOEFL / GATE / CAT mentorship for students aspiring to higher studies."],
          ].map(([t, d]) => (
            <div key={t} className="bg-white p-5 border-l-4 border-brand">
              <h3 className="text-brand font-semibold">{t}</h3>
              <p className="text-sm text-[#3a3a3a]/85 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Placements;
