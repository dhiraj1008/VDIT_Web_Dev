import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const affiliationDocuments = [
  {
    year: "2025-26",
    document: "VTU Affiliation Letter",
    file: "#",
  },
  {
    year: "2024-25",
    document: "VTU Affiliation Letter",
    file: "#",
  },
  {
    year: "2023-24",
    document: "VTU Affiliation Letter",
    file: "#",
  },
];

const vtuHighlights = [
  "Affiliated to Visvesvaraya Technological University (VTU), Belagavi",
  "Follows VTU curriculum and academic regulations",
  "Offers undergraduate and postgraduate programmes under VTU",
  "Participates in VTU examinations and evaluation processes",
  "Promotes research and innovation through VTU-recognized research centres",
];

const VTU = () => {
  return (
    <InnerLayout
      title="Visvesvaraya Technological University (VTU)"
      image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "VTU" },
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
          About VTU
        </h2>

        <div className="vdit-prose">
          <p>
            <strong>Visvesvaraya Technological University (VTU)</strong>,
            Belagavi, is one of India's largest technological universities,
            established by the Government of Karnataka in 1998.
          </p>

          <p>
            VTU oversees engineering, technology, management, and applied
            science programmes offered by affiliated colleges throughout
            Karnataka.
          </p>

          <p>
            KLS Vishwanathrao Deshpande Institute of Technology is affiliated
            with VTU and follows its academic framework, regulations,
            examination processes, and quality standards.
          </p>
        </div>
      </section>

      {/* AFFILIATION */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          VTU Affiliation
        </h2>

        <div className="bg-white border border-brand/10 p-6">
          <p className="text-[#2a2a2a]/85 leading-relaxed">
            The institute is affiliated to Visvesvaraya Technological
            University, Belagavi, and offers programmes approved under
            the university's academic regulations and curriculum framework.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Academic Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {vtuHighlights.map((item) => (
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
          Affiliation Documents
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
              {affiliationDocuments.map((doc, index) => (
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
          * VTU affiliation documents and related approvals will be updated
          periodically.
        </p>
      </section>
    </InnerLayout>
  );
};

export default VTU;