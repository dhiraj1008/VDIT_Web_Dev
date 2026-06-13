import React from "react";
import InnerLayout from "./InnerLayout";

const timeline = [
  ["1939", "Seven eminent lawyers and visionaries from North Karnataka founded Karnatak Law Society in Belagavi."],
  ["2004", "KLS established Vishwanathrao Deshpande Institute of Technology at Haliyal as its flagship engineering institute."],
  ["2008", "The first VDIT batch graduated, extending KLS's educational legacy into engineering and technology."],
  ["2024", "VDIT completed 20 years of technical education with an alumni network crossing 7,500."],
  ["2026", "The institute continues to expand its academic, research and innovation ecosystem for students across the region."],
];

const klsOfficeBearers = [
  ["1", "Shri. Pradeep Sawkar", "President"],
  ["2", "Shri. Ram Bhandare", "Vice-President"],
  ["3", "Shri. Deepak V. Kulkarni", "Vice-President"],
  ["4", "Shri. Anant K Tagare", "Chairman"],
  ["5", "Shri. V. M. Deshpande", "Secretary"],
  ["6", "Shri. S. V. Ganachari", "Secretary"],
  ["7", "Shri. Prakash G. Badkundri", "Member"],
  ["8", "Shri. U. N. Kalkundrikar", "Member"],
  ["9", "Shri. Rajendra Belgaumkar", "Member"],
  ["10", "Shri. R. S. Mutalik", "Member"],
  ["11", "Shri. S. P. Joshi", "Member"],
  ["12", "Shri. Atul Alur", "Member"],
  ["13", "Shri. Ashok A. Kulkarni", "Member"],
  ["14", "Shri. Vivek Kulkarni", "Member"],
  ["15", "Shri. Prashant Kulkarni", "Member"],
];

const governingCouncil = [
  ["1", "Shri Prashant Kulkarni", "Chairman"],
  ["2", "Shri V. M. Deshpande", "Member Secretary"],
  ["3", "Shri Ram Bhandare", "Member"],
  ["4", "Shri R. S. Mutalik", "Member"],
  ["5", "Shri U. N. Kalkundrikar", "Member"],
  ["6", "Shri P. G. Badkundri", "Member"],
  ["7", "Dr. V. A. Kulkarni", "Ex-Officio Member and Principal"],
];

const KlsTable = ({ title, roleHeader, rows }) => (
  <section className="mt-10">
    <h3
      className="text-2xl md:text-3xl text-brand font-semibold mb-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {title}
    </h3>
    <div className="overflow-x-auto bg-white border border-brand/15">
      <table className="w-full min-w-[560px] text-sm">
        <thead className="bg-brand text-surface font-sans-ui">
          <tr>
            <th className="w-20 px-4 py-3 text-left font-semibold tracking-wider">Sl. No</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">Name</th>
            <th className="px-4 py-3 text-left font-semibold tracking-wider">{roleHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([slNo, name, role]) => (
            <tr key={`${slNo}-${name}`} className="odd:bg-surface/40">
              <td className="px-4 py-3 border-t border-brand/10 text-brand font-semibold">{slNo}</td>
              <td className="px-4 py-3 border-t border-brand/10">{name}</td>
              <td className="px-4 py-3 border-t border-brand/10 text-[#3a3a3a]">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const AboutKLS = () => (
  <InnerLayout
    title="About KLS"
    image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "About KLS" }]}
  >
    <div className="vdit-prose mb-8">
      <p>
        Karnatak Law Society (KLS), founded in 1939 by seven eminent lawyers
        and visionaries of North Karnataka, has been a torchbearer of education
        across Law, Commerce, Engineering and Management for more than eight
        decades.
      </p>
      <p>
        Vishwanathrao Deshpande Institute of Technology was inaugurated in
        2004 as KLS's flagship engineering institute, with the guidance and
        support of <strong>Shri R. V. Deshpande</strong>, former minister,
        Government of Karnataka.
      </p>
      <p>
        Over the past two decades, VDIT has grown from a single building into
        a vibrant 26-acre residential campus, serving students from across
        India and producing an alumni network of more than 7,700 engineers.
      </p>
    </div>

    <div className="relative pl-6 border-l-2 border-brand/30 space-y-6">
      {timeline.map(([year, event]) => (
        <div key={year} className="relative">
          <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-brand ring-4 ring-surface" />
          <div className="text-3xl text-brand font-semibold leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{year}</div>
          <p className="text-[#2a2a2a]/85 text-[15px] mt-1">{event}</p>
        </div>
      ))}
    </div>

    <KlsTable
      title="Members of KLS (Office Bearers)"
      roleHeader="Role"
      rows={klsOfficeBearers}
    />

    <KlsTable
      title="Governing Council (2025-2027)"
      roleHeader="Designation / Role"
      rows={governingCouncil}
    />
  </InnerLayout>
);

export default AboutKLS;
