import React from "react";
import InnerLayout from "./InnerLayout";
import { Award, Activity, Target, BookOpen } from "lucide-react";

const IQAC = () => (
  <InnerLayout
    title="Internal Quality Assurance Cell (IQAC)"
    image="https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "IQAC" }]}
  >
    <div className="vdit-prose">
      <p>
        The Internal Quality Assurance Cell (IQAC) at KLS VDIT works
        continuously toward the planned, internalised, sustained and catalytic
        improvement of the institute’s academic and administrative
        performance. Constituted as per NAAC guidelines, the IQAC functions
        as the nodal cell for quality benchmarking and accreditation.
      </p>
      <h3>Objectives</h3>
      <ul>
        <li>Develop a quality system for conscious, consistent and catalytic improvement.</li>
        <li>Promote measures for institutional functioning that lead to enhanced quality.</li>
        <li>Coordinate the dissemination of information on various quality parameters of higher education.</li>
        <li>Document programmes / activities leading to quality improvement.</li>
      </ul>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {[
        [Award, "NAAC Accreditation", "VDIT is accredited by NAAC. Latest cycle SSR submitted for re-accreditation."],
        [Activity, "NBA Status", "Multiple UG programmes accredited by the National Board of Accreditation."],
        [Target, "AQAR", "Annual Quality Assurance Reports submitted regularly to NAAC."],
        [BookOpen, "OBE Framework", "All programmes designed under VTU's Outcome Based Education framework."],
      ].map(([Icon, t, d]) => (
        <div key={t} className="bg-white p-5 border border-brand/15 card-hover">
          <Icon size={22} className="text-brand mb-2" />
          <h3 className="text-brand font-semibold">{t}</h3>
          <p className="text-sm text-[#3a3a3a]/85 mt-1">{d}</p>
        </div>
      ))}
    </div>

    <h3 className="text-2xl text-brand font-semibold mt-10 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>IQAC Composition</h3>
    <div className="bg-white border border-brand/15">
      <table className="w-full text-sm">
        <thead className="bg-brand text-surface">
          <tr><th className="text-left p-3">Member</th><th className="text-left p-3">Designation</th></tr>
        </thead>
        <tbody>
          {[
            ["Dr. V. A. Kulkarni", "Chairperson (Principal)"],
            ["Dr. Suresh M. Patil", "Coordinator (Sr. Faculty)"],
            ["Dr. Mahesh G. Hegde", "Member (Senior Faculty)"],
            ["Shri. Ravindra K. Patil", "Member (Administration)"],
            ["External Academic Expert", "VTU Nominee"],
            ["Industry Expert", "Industry Representative"],
            ["Alumni Representative", "VDIT Alumni Network"],
            ["Student Representative", "VDIT Student Council"],
          ].map(([n, r], i) => (
            <tr key={n + i} className="odd:bg-surface/40">
              <td className="p-3 border-t border-brand/10">{n}</td>
              <td className="p-3 border-t border-brand/10 italic">{r}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </InnerLayout>
);

export default IQAC;
