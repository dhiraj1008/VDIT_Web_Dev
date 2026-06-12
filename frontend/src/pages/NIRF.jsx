import React from "react";
import InnerLayout from "./InnerLayout";
import { Award } from "lucide-react";

const NIRF = () => (
  <InnerLayout
    title="NIRF Disclosure"
    image="https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "NIRF" }]}
  >
    <div className="vdit-prose mb-4">
      <p>
        KLS VDIT participates in the National Institutional Ranking Framework
        (NIRF) launched by the Ministry of Education, Government of India. Data
        and methodology submitted to NIRF are summarised below.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {[
        ["Teaching, Learning & Resources", "32 / 100"],
        ["Research & Professional Practice", "22 / 100"],
        ["Graduation Outcomes", "24 / 100"],
        ["Outreach & Inclusivity", "12 / 100"],
        ["Perception", "10 / 100"],
        ["Total Score (Engineering 2025)", "100"],
      ].map(([k, v]) => (
        <div key={k} className="bg-white p-5 border border-brand/15 card-hover">
          <Award size={20} className="text-brand mb-2" />
          <p className="text-xs text-[#3a3a3a]/70 uppercase tracking-widest">{k}</p>
          <p className="text-2xl text-brand font-semibold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v}</p>
        </div>
      ))}
    </div>
    <p className="text-xs text-[#3a3a3a]/70">* Values are sample dimensions — the official NIRF report can be downloaded from the NIRF portal.</p>
  </InnerLayout>
);

export default NIRF;
