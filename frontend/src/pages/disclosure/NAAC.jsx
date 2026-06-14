import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const naacDocuments = [
  {
    title: "NAAC Accreditation Certificate",
    file: "#",
  },
  {
    title: "Institutional Grade Sheet",
    file: "#",
  },
  {
    title: "Quality Profile of NAAC",
    file: "#",
  },
  {
    title: "AQAR 2022-23",
    file: "#",
  },
  {
    title: "AQAR 2023-24",
    file: "#",
  },
  {
    title: "IIQA Undertaking",
    file: "#",
  },
  {
    title: "SSR After DVV",
    file: "#",
  },
  {
    title: "CO-PO Attainment",
    file: "#",
  },
  {
    title: "Institute Strategic Planning & Development",
    file: "#",
  },
  {
    title: "Best Practices",
    file: "#",
  },
  {
    title: "Institutional Distinctiveness",
    file: "#",
  },
];

const naacCriteria = [
  "Curricular Aspects",
  "Teaching-Learning and Evaluation",
  "Research, Innovations and Extension",
  "Infrastructure and Learning Resources",
  "Student Support and Progression",
  "Governance, Leadership and Management",
  "Institutional Values and Best Practices",
];

const NAAC = () => {
  return (
    <InnerLayout
      title="National Assessment and Accreditation Council (NAAC)"
      image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "NAAC" },
      ]}
      sidebar={disclosureSidebar}
      sidebarTitle="Disclosure"
    >
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About NAAC
        </h2>

        <div className="vdit-prose">
          <p>
            The National Assessment and Accreditation Council (NAAC) is an
            autonomous institution established by the University Grants
            Commission (UGC) to assess and accredit Higher Education
            Institutions in India.
          </p>

          <p>
            NAAC promotes quality assurance and continuous improvement in
            teaching, learning, research, governance, infrastructure and
            student support systems through a comprehensive accreditation
            process.
          </p>

          <p>
            KLS Vishwanathrao Deshpande Institute of Technology actively
            participates in NAAC quality initiatives and continuously works
            towards academic excellence, innovation, institutional
            effectiveness and stakeholder satisfaction.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NAAC Assessment Criteria
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {naacCriteria.map((item, index) => (
            <div
              key={item}
              className="bg-white border border-brand/10 p-5"
            >
              <span className="text-brand font-semibold">
                Criterion {index + 1}
              </span>

              <p className="mt-2 text-[#2a2a2a]/85">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NAAC Documents & Reports
        </h2>

        <div className="overflow-hidden border border-brand/10">
          <table className="w-full">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-4 text-left">
                  Sl. No.
                </th>

                <th className="px-5 py-4 text-left">
                  Document
                </th>

                <th className="px-5 py-4 text-left">
                  Download
                </th>
              </tr>
            </thead>

            <tbody>
              {naacDocuments.map((doc, index) => (
                <tr
                  key={doc.title}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-surface-alt/40"
                  }
                >
                  <td className="px-5 py-4">
                    {index + 1}
                  </td>

                  <td className="px-5 py-4">
                    {doc.title}
                  </td>

                  <td className="px-5 py-4">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand font-semibold hover:underline"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[#3a3a3a]/70 mt-4">
          * NAAC reports, certificates and quality assurance documents are
          updated periodically by the institute.
        </p>
      </section>
    </InnerLayout>
  );
};

export default NAAC;