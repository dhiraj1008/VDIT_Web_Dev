import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const approvalDocuments = [
  {
    year: "2025-26",
    document: "AICTE Approval Letter",
    file: "#",
  },
  {
    year: "2024-25",
    document: "AICTE Approval Letter",
    file: "#",
  },
  {
    year: "2023-24",
    document: "AICTE Approval Letter",
    file: "#",
  },
];

const complianceItems = [
  "Approved by All India Council for Technical Education (AICTE), New Delhi",
  "Affiliated to Visvesvaraya Technological University (VTU), Belagavi",
  "Recognized by Government of Karnataka",
  "Committed to quality technical education and continuous improvement",
  "Maintains academic, infrastructural and administrative standards as prescribed by AICTE",
];

const AICTE = () => {
  return (
    <InnerLayout
      title="All India Council for Technical Education (AICTE)"
      image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "AICTE" },
      ]}
      sidebar={disclosureSidebar}
      sidebarTitle="Disclosure"
    >
      {/* ABOUT */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About AICTE
        </h2>

        <div className="vdit-prose">
          <p>
            The <strong>All India Council for Technical Education (AICTE)</strong>
            is the statutory body and national-level council responsible for
            planning, formulation, and maintenance of norms and standards for
            technical education in India.
          </p>

          <p>
            AICTE promotes quality technical education, innovation,
            entrepreneurship, industry interaction, and research across
            engineering, management, pharmacy, architecture and other
            professional disciplines.
          </p>

          <p>
            KLS Vishwanathrao Deshpande Institute of Technology operates in
            accordance with AICTE regulations and strives to maintain the
            highest standards of technical education and institutional
            excellence.
          </p>
        </div>
      </section>

      {/* APPROVAL STATUS */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          AICTE Approval Status
        </h2>

        <div className="bg-white border border-brand/10 p-6">
          <p className="text-[#2a2a2a]/85 leading-relaxed">
            KLS Vishwanathrao Deshpande Institute of Technology is approved by
            the All India Council for Technical Education (AICTE), New Delhi,
            and complies with the guidelines and standards prescribed by the
            regulatory authority for technical education.
          </p>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Institutional Compliance
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {complianceItems.map((item) => (
            <div
              key={item}
              className="bg-white border border-brand/10 p-5"
            >
              <p className="text-[#2a2a2a]/85">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section>
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          AICTE Approval Documents
        </h2>

        <div className="overflow-hidden border border-brand/10">
          <table className="w-full">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-4 text-left">
                  Academic Year
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
              {approvalDocuments.map((doc, index) => (
                <tr
                  key={doc.year}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-surface-alt/40"
                  }
                >
                  <td className="px-5 py-4">
                    {doc.year}
                  </td>

                  <td className="px-5 py-4">
                    {doc.document}
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
          * AICTE approval letters and related compliance documents will be
          updated periodically.
        </p>
      </section>
    </InnerLayout>
  );
};

export default AICTE;