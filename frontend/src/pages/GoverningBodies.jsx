import React from "react";
import InnerLayout from "./InnerLayout";
import { leaders } from "../data/mock";

const GoverningBodies = () => (
  <InnerLayout
    title="Governing Bodies"
    image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Governing Bodies" }]}
  >
    <div className="vdit-prose">
      <p>
        KLS VDIT is governed by the Karnatak Law Society (KLS), Belagavi, and
        operates under the oversight of a Local Governing Council (LGC)
        constituted as per the bye-laws of the Karnataka State Council for
        Higher Education and AICTE norms. The LGC includes representatives
        from KLS, the principal of the institute, faculty representatives,
        industry experts and a nominee of the affiliating university.
      </p>
      <h3>Local Governing Council (LGC)</h3>
    </div>

    <div className="overflow-x-auto bg-white border border-brand/15 mt-3">
      <table className="w-full text-sm">
        <thead className="bg-brand text-surface">
          <tr>
            <th className="text-left p-3 w-16">#</th>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Shri. Prashant Kulkarni", "Chairman"],
            ["Shri. V. M. Deshpande", "Member Secretary"],
            ["Shri. Ram Bhandare", "Member"],
            ["Shri. Prakash G. Badkundri", "Member"],
            ["Shri. U. N. Kalkundrikar", "Member"],
            ["Shri. R. S. Mutalik", "Member"],
            ["Industry Nominee", "Member"],
            ["VTU Nominee", "Member"],
            ["Faculty Representative (Senior)", "Member"],
            ["Dr. V. A. Kulkarni", "Ex-Officio Member & Principal"],
          ].map(([name, role], i) => (
            <tr key={name + i} className="odd:bg-surface/40">
              <td className="p-3 border-t border-brand/10 text-brand font-semibold">{i + 1}</td>
              <td className="p-3 border-t border-brand/10">{name}</td>
              <td className="p-3 border-t border-brand/10 italic">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl text-brand font-semibold mt-10 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Members of Karnatak Law Society</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {leaders.map((l) => (
        <div key={l.id} className="bg-white p-4 border border-brand/15 flex items-center gap-3">
          <img src={l.image} alt={l.name} className="w-14 h-14 rounded-full object-cover" />
          <div>
            <p className="text-brand font-semibold text-sm">{l.name}</p>
            <p className="text-xs text-[#3a3a3a] italic">{l.role}</p>
          </div>
        </div>
      ))}
    </div>
  </InnerLayout>
);

export default GoverningBodies;
