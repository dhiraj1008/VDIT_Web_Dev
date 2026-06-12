import React from "react";
import { departments } from "../data/mock";
import { PageHero } from "./About";
import { GraduationCap, BookOpen, FlaskConical } from "lucide-react";

const Academics = () => {
  return (
    <main>
      <PageHero
        title="Academics"
        sub="Future-ready engineering programmes affiliated to VTU, Belagavi"
        image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"
      />

      <section id="ug" className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card icon={GraduationCap} title="Undergraduate" body="Seven 4-year B.E. programmes across emerging and core engineering disciplines." />
          <Card icon={BookOpen} title="Postgraduate" body="Two M.Tech programmes in Digital Electronics and Computer Science offering deep specialisation." />
          <Card icon={FlaskConical} title="Research" body="VTU-recognised research centres in select departments with active doctoral scholars." />
        </div>
      </section>

      <section id="departments" className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl text-brand mb-10 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Departments
          </h2>
          <div className="space-y-12">
            {departments.map((d, idx) => (
              <div
                key={d.id}
                id={d.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`aspect-[4/3] overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={d.image} alt={d.name} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className={`${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="text-xs tracking-[0.2em] text-brand font-sans-ui">{d.short}</span>
                  <h3 className="text-2xl md:text-3xl text-brand font-semibold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {d.name}
                  </h3>
                  <p className="mt-3 text-[#2a2a2a]/85 leading-relaxed">{d.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-1.5 text-sm text-[#3a3a3a]">
                    <li>• Modern laboratories</li>
                    <li>• Industry-aligned curriculum</li>
                    <li>• Capstone projects</li>
                    <li>• Internships &amp; placements</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-3xl md:text-4xl text-brand mb-6 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Academic Calendar
        </h2>
        <div className="bg-white p-6 border border-brand/10">
          <ul className="divide-y divide-brand/10">
            {[
              ["Commencement of odd semester", "August 4, 2026"],
              ["Mid-term examinations · Sem I", "September 22-26, 2026"],
              ["Last working day · odd semester", "December 12, 2026"],
              ["Commencement of even semester", "January 19, 2027"],
              ["Mid-term examinations · Sem II", "March 9-13, 2027"],
              ["Last working day · even semester", "May 23, 2027"],
            ].map(([k, v]) => (
              <li key={k} className="py-3 flex justify-between text-sm">
                <span>{k}</span>
                <span className="text-brand font-medium">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

const Card = ({ icon: Icon, title, body }) => (
  <div className="bg-white p-8 border border-brand/10 card-hover">
    <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-4">
      <Icon size={22} />
    </div>
    <h3 className="text-2xl text-brand font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h3>
    <p className="text-[#3a3a3a]/85 text-sm leading-relaxed">{body}</p>
  </div>
);

export default Academics;
