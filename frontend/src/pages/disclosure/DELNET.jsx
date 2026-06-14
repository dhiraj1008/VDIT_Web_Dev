import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const services = [
  {
    title: "E-Books",
    description:
      "Access to a large collection of digital books across engineering, science, management and humanities.",
  },
  {
    title: "E-Journals",
    description:
      "Online access to scholarly journals, research publications and technical literature.",
  },
  {
    title: "Union Catalogue",
    description:
      "Search facility for books, journals and resources available in DELNET member libraries.",
  },
  {
    title: "Inter-Library Loan",
    description:
      "Resource sharing facility among DELNET member institutions.",
  },
  {
    title: "Research Support",
    description:
      "Access to bibliographic databases, references and academic resources.",
  },
  {
    title: "Digital Library Services",
    description:
      "Online information retrieval and knowledge-sharing facilities.",
  },
];

const membershipDetails = [
  ["Membership Status", "Active"],
  ["Library Network", "DELNET"],
  ["Access Type", "Institutional"],
  ["Resource Sharing", "Available"],
  ["Inter-Library Loan", "Available"],
  ["Digital Access", "Available"],
];

const DELNET = () => {
  return (
    <InnerLayout
      title="Developing Library Network (DELNET)"
      image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "DELNET" },
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
          About DELNET
        </h2>

        <div className="vdit-prose">
          <p>
            <strong>DELNET (Developing Library Network)</strong> is one of
            India's largest library networks, promoting resource sharing,
            knowledge dissemination and collaboration among academic,
            research and special libraries.
          </p>

          <p>
            Through DELNET membership, KLS Vishwanathrao Deshpande Institute
            of Technology provides students, faculty members and researchers
            with access to a wide range of digital resources, bibliographic
            databases and library services.
          </p>

          <p>
            DELNET enhances academic and research activities by enabling
            efficient information access and inter-library collaboration.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          DELNET Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-brand/10 p-6"
            >
              <h3 className="text-xl text-brand font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-[#2a2a2a]/85">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Membership Information
        </h2>

        <div className="overflow-hidden border border-brand/10">
          <table className="w-full">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-4 text-left">
                  Particular
                </th>

                <th className="px-5 py-4 text-left">
                  Details
                </th>
              </tr>
            </thead>

            <tbody>
              {membershipDetails.map(([particular, detail], index) => (
                <tr
                  key={particular}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-surface-alt/40"
                  }
                >
                  <td className="px-5 py-4">
                    {particular}
                  </td>

                  <td className="px-5 py-4">
                    {detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* RESOURCES */}
      <section>
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Benefits for Students & Faculty
        </h2>

        <div className="bg-white border border-brand/10 p-6">
          <ul className="space-y-3 text-[#2a2a2a]/85">
            <li>• Access to a wider range of academic resources.</li>
            <li>• Enhanced support for research and project work.</li>
            <li>• Inter-library borrowing and document delivery services.</li>
            <li>• Access to national and international scholarly content.</li>
            <li>• Improved learning and knowledge-sharing opportunities.</li>
          </ul>
        </div>

        <p className="text-sm text-[#3a3a3a]/70 mt-6">
          * DELNET membership details and resource access information will
          be updated periodically.
        </p>
      </section>
    </InnerLayout>
  );
};

export default DELNET;