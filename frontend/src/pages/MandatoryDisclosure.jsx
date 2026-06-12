import React from "react";
import InnerLayout from "./InnerLayout";
import { Download } from "lucide-react";

const row = (label, value) => ({ label, value });

const MandatoryDisclosure = () => (
  <InnerLayout
    title="Mandatory Disclosure"
    image="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Mandatory Disclosure" }]}
  >
    <div className="vdit-prose mb-4">
      <p>
        As per the requirements of the All India Council for Technical
        Education (AICTE), KLS VDIT publishes the following mandatory
        disclosure information. The complete document is updated annually and
        available for download below.
      </p>
    </div>

    <div className="bg-white border border-brand/15">
      <div className="px-5 py-3 bg-surface border-b border-brand/15 flex items-center justify-between">
        <h3 className="text-brand font-semibold">Institute Information</h3>
        <button className="text-xs flex items-center gap-1 text-brand border border-brand/40 px-3 py-1.5 rounded hover:bg-brand hover:text-surface transition">
          <Download size={14} /> AICTE 2026-27 (PDF)
        </button>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {[
            row("Name of the Institute", "KLS Vishwanathrao Deshpande Institute of Technology"),
            row("Address", "Haliyal, Uttara Kannada District, Karnataka 581 329"),
            row("Type of Institution", "Private-Aided / Self-Financing"),
            row("Year of Establishment", "2004"),
            row("Affiliating University", "Visvesvaraya Technological University, Belagavi"),
            row("Approval", "AICTE, New Delhi"),
            row("Recognition", "Government of Karnataka"),
            row("NAAC Status", "Accredited"),
            row("NBA Programmes", "CSE, ECE, EEE, Mechanical"),
            row("Principal", "Dr. V. A. Kulkarni"),
            row("E-mail", "info@klsvdit.edu.in / principal@klsvdit.edu.in"),
            row("Phone", "08284 - 220 333 / 220 332"),
            row("Website", "https://klsvdit.edu.in"),
          ].map((r) => (
            <tr key={r.label} className="odd:bg-surface/40">
              <td className="p-3 border-t border-brand/10 font-semibold w-1/3">{r.label}</td>
              <td className="p-3 border-t border-brand/10">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl text-brand font-semibold mt-10 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Programmes Offered</h3>
    <div className="overflow-x-auto bg-white border border-brand/15">
      <table className="w-full text-sm">
        <thead className="bg-brand text-surface">
          <tr>
            <th className="text-left p-3">Programme</th>
            <th className="text-left p-3">Duration</th>
            <th className="text-left p-3">Intake</th>
            <th className="text-left p-3">Approval</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["B.E. Computer Science & Engineering", "4 years", "120", "AICTE / VTU"],
            ["B.E. CSE (AI & ML)", "4 years", "60", "AICTE / VTU"],
            ["B.E. Electronics & Communication", "4 years", "60", "AICTE / VTU"],
            ["B.E. Electrical & Electronics", "4 years", "60", "AICTE / VTU"],
            ["B.E. Mechanical Engineering", "4 years", "60", "AICTE / VTU"],
            ["B.E. Civil Engineering", "4 years", "60", "AICTE / VTU"],
            ["M.Tech Computer Science", "2 years", "18", "AICTE / VTU"],
            ["M.Tech Digital Electronics", "2 years", "18", "AICTE / VTU"],
          ].map((r) => (
            <tr key={r[0]} className="odd:bg-surface/40">
              {r.map((c, i) => <td key={i} className="p-3 border-t border-brand/10">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </InnerLayout>
);

export default MandatoryDisclosure;
