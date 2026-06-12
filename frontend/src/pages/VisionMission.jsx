import React from "react";
import InnerLayout from "./InnerLayout";
import { Target, Compass } from "lucide-react";

const missions = [
  "Augment innovative pedagogy, kindle quest for interdisciplinary learning, and enhance conceptual understanding.",
  "Build competence, professional ethics and develop entrepreneurial thinking.",
  "Strengthen Industry-Institute Partnership and explore global collaborations.",
  "Inculcate a culture of socially responsible citizenship.",
  "Focus on holistic and sustainable development.",
];

const values = [
  ["Integrity", "We hold ourselves to the highest standards of honesty, transparency and academic integrity."],
  ["Excellence", "Pursuing excellence in teaching, research and community engagement is a shared commitment."],
  ["Inclusion", "We celebrate diversity and provide equitable opportunities for every student."],
  ["Innovation", "We encourage curiosity, experimentation and entrepreneurial thinking."],
  ["Sustainability", "Our practices are designed to be socially, economically and environmentally sustainable."],
];

const VisionMission = () => (
  <InnerLayout
    title="Vision & Mission"
    image="https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Vision & Mission" }]}
  >
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white border border-brand/15 p-7">
        <Compass size={28} className="text-brand mb-3" />
        <h2 className="text-3xl text-brand font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Vision</h2>
        <p className="text-[15.5px] italic text-[#2a2a2a]/85 leading-relaxed">
          To nurture talent and enrich society through excellence in technical
          education, research and innovation.
        </p>
      </div>
      <div className="bg-white border border-brand/15 p-7">
        <Target size={28} className="text-brand mb-3" />
        <h2 className="text-3xl text-brand font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mission</h2>
        <ol className="list-decimal list-inside space-y-2 text-[#2a2a2a]/85 text-[15px] leading-relaxed">
          {missions.map((m) => <li key={m}>{m}</li>)}
        </ol>
      </div>
    </div>

    <h2 className="text-3xl text-brand font-semibold mt-12 mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Core Values</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {values.map(([title, desc]) => (
        <div key={title} className="border-l-4 border-brand bg-white p-5">
          <h3 className="text-xl text-brand font-semibold mb-1">{title}</h3>
          <p className="text-sm text-[#3a3a3a]/85">{desc}</p>
        </div>
      ))}
    </div>
  </InnerLayout>
);

export default VisionMission;
