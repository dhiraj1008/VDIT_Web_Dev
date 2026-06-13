import React from "react";
import InnerLayout from "./InnerLayout";

{/*const timeline = [
  ["1939", "Seven eminent lawyers and visionaries from North Karnataka founded Karnatak Law Society in Belagavi."],
  ["2004", "KLS established Vishwanathrao Deshpande Institute of Technology at Haliyal as its flagship engineering institute."],
  ["2008", "The first VDIT batch graduated, extending KLS's educational legacy into engineering and technology."],
  ["2024", "VDIT completed 20 years of technical education with an alumni network crossing 7,500."],
  ["2026", "The institute continues to expand its academic, research and innovation ecosystem for students across the region."],
];*/}

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
    title="About Karnatak Law Society"
    image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "About KLS" }]}
  >
    <div className="vdit-prose mb-8">
      <p>
        More than three-quarters of a century ago, several eminent lawyers and visionaries from the North Karnataka region, who were also leading figures in the Indian Freedom Struggle, envisioned making legal education accessible to the people of North Karnataka despite numerous challenges. With this noble vision, seven distinguished lawyers — <strong>N. S. Shrikhande, V. A. Naik, V. D. Belvi, B. N. Datar, S. N. Angadi, R. Kotbagi, and D. S. Paramaj</strong> — came together to establish the <strong>Karnatak Law Society (KLS)</strong> in <strong>1939</strong> at <strong>Belagavi</strong>.
      </p>
      <p>
        <strong>Shrimant Raja Lakhamgouda Sardesai</strong> of <strong>Vantmuri</strong> placed his trust in these founder members and supported their vision by executing a promissory note totaling Rs. 1 lakh to facilitate the establishment of a new law college. Many founder members and legal scholars from the region voluntarily taught at the institution despite having lucrative legal practices and significant personal and social commitments.
      </p>
      <p>
        Belagavi subsequently emerged as a renowned center for legal education. Students from Andhra Pradesh, Kerala, and Maharashtra sought admission and went on to contribute significantly in social, political, and judicial fields. The first batch of <strong>Raja Lakhamgouda Law College</strong> commenced in <strong>1939</strong> and graduated in <strong>1941</strong>. Since then, more than <strong>7,500</strong> students have graduated from this prestigious institution.
      </p>
      <p>
        Among the many distinguished alumni produced by the college are <strong>Shri E. S. Venkataramiah</strong>, Former Chief Justice of India; <strong>Shri S. Rajendra Babu</strong>, Former Chief Justice of India and Former Chairman of the National Human Rights Commission; and <strong>Shri K. K. Venugopal</strong>, Former Attorney General of India.
      </p>
      <p>
        Today, <strong>Karnatak Law Society (KLS)</strong> has earned the distinction of managing schools and colleges in the fields of Law, Commerce, Engineering, and Management Education. Over the years, its institutions have established themselves as some of the leading educational institutions in Karnataka, known for their commitment to academic excellence and holistic development.
      </p>
    </div>

    {/*<div className="relative pl-6 border-l-2 border-brand/30 space-y-6">
      {timeline.map(([year, event]) => (
        <div key={year} className="relative">
          <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-brand ring-4 ring-surface" />
          <div className="text-3xl text-brand font-semibold leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{year}</div>
          <p className="text-[#2a2a2a]/85 text-[15px] mt-1">{event}</p>
        </div>
      ))}
    </div>*/}

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
