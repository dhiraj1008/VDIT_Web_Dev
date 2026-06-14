import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const nirfReports = [
  {
    year: "2026",
    category: "Engineering",
    file: "#",
  },
  {
    year: "2025",
    category: "Engineering",
    file: "#",
  },
  {
    year: "2024",
    category: "Engineering",
    file: "#",
  },
  {
    year: "2023",
    category: "Engineering",
    file: "#",
  },
];

const nirfParameters = [
  {
    code: "TLR",
    title: "Teaching, Learning & Resources",
  },
  {
    code: "RP",
    title: "Research & Professional Practice",
  },
  {
    code: "GO",
    title: "Graduation Outcomes",
  },
  {
    code: "OI",
    title: "Outreach & Inclusivity",
  },
  {
    code: "PR",
    title: "Perception",
  },
];

const NIRF = () => {
  return (
    <InnerLayout
    title="National Institutional Ranking Framework (NIRF)"
    image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
    breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "NIRF" },
    ]}
    sidebar={disclosureSidebar}
    sidebarTitle="Disclosure"
    >
      {/* ABOUT NIRF */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About NIRF
        </h2>

        <div className="vdit-prose">
          <p>
            The <strong>National Institutional Ranking Framework (NIRF)</strong>
            {" "}was approved by the Ministry of Education, Government of India,
            and launched in 2015 to rank higher educational institutions across
            the country.
          </p>

          <p>
            The framework adopts a methodology based on objective parameters
            that evaluate institutions on teaching quality, research output,
            graduation outcomes, inclusivity, and perception among stakeholders.
          </p>

          <p>
            KLS Vishwanathrao Deshpande Institute of Technology actively
            participates in the NIRF process and submits institutional data
            annually as part of its commitment to transparency, quality
            assurance, and continuous improvement.
          </p>
        </div>
      </section>

      {/* PARAMETERS */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NIRF Ranking Parameters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nirfParameters.map((item) => (
            <div
              key={item.code}
              className="bg-white border border-brand/10 p-6"
            >
              <div
                className="text-4xl text-brand font-semibold"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.code}
              </div>

              <p className="mt-3 text-[#2a2a2a]/85">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REPORTS */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NIRF Reports & Documents
        </h2>

        <div className="overflow-hidden border border-brand/10">
          <table className="w-full">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-4 text-left font-semibold">
                  Year
                </th>

                <th className="px-5 py-4 text-left font-semibold">
                  Category
                </th>

                <th className="px-5 py-4 text-left font-semibold">
                  Report
                </th>
              </tr>
            </thead>

            <tbody>
              {nirfReports.map((report, index) => (
                <tr
                  key={report.year}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-surface-alt/40"
                  }
                >
                  <td className="px-5 py-4">
                    {report.year}
                  </td>

                  <td className="px-5 py-4">
                    {report.category}
                  </td>

                  <td className="px-5 py-4">
                    <a
                      href={report.file}
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
          * NIRF reports and supporting documents will be updated annually.
        </p>
      </section>

      {/* COORDINATOR */}
      <section>
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NIRF Coordinator
        </h2>

        <div className="bg-white border border-brand/10 p-6">
          <h3
            className="text-2xl text-brand font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            NIRF Cell
          </h3>

          <p className="mt-2 text-[#2a2a2a]/85">
            KLS Vishwanathrao Deshpande Institute of Technology,
            Haliyal
          </p>

          <p className="mt-3 text-[#2a2a2a]/85">
            The NIRF Cell coordinates institutional data collection,
            validation, submission, and ranking-related activities in
            accordance with the National Institutional Ranking Framework
            guidelines.
          </p>
        </div>
      </section>
    </InnerLayout>
  );
};

export default NIRF;