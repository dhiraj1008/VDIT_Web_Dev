import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const iqacObjectives = [
  "Development of quality culture in the institution",
  "Academic and Administrative Audit and follow-up actions",
  "Promotion of quality enhancement initiatives",
  "Institutionalization of best practices",
  "Monitoring academic and administrative performance",
  "Facilitating accreditation and ranking activities",
];

const iqacDocuments = [
  { title: "IQAC MoM 2024-25", file: "#" },
  { title: "IQAC MoM 2023-24", file: "#" },
  { title: "IQAC MoM 2022-23", file: "#" },
  { title: "IQAC MoM 2021-22", file: "#" },
  { title: "IQAC MoM 2020-21", file: "#" },
];

const iqacCommittee = [
  ["1", "Dr. Vadiraj A. Kulkarni", "Chair Person"],
  ["2", "Shri. Prashant Kulkarni", "Management Nominee"],
  ["3", "Shri. Narayan Tosur", "Member"],
  ["4", "Prof. Laxmi G Hattiholi", "IQAC Co-Ordinator"],
  ["5", "Prof. Majunatha", "Member"],
  ["6", "Dr. Gururaj Hatti", "Member"],
  ["7", "Dr. Shailesh Chanpatna", "Member"],
  ["8", "Prof. S D Kulkarni", "Member"],
  ["9", "Dr. K. S. Pujari", "Member"],
  ["10", "Dr. Mahendra Dixit", "Member"],
  ["11", "Dr Venkatesh Shankar", "Member"],
  ["12", "Dr. Sameer M. Galagali", "Member"],
  ["13", "Dr. Poornima Raikar", "Member"],
  ["14", "Dr. Nagaraj Bhat", "Member"],
  ["15", "Prof. Rajeshwari N.", "Member"],
  ["16", "Prof. Harsha Jadhav", "Member"],
  ["17", "Prof. Naveen Hiremath", "Member"],
  ["18", "Prof. Varaprasad Gaonkar", "Registrar"],
  ["19", "Mrs. Radha Rani Mahadev Kolambe", "Local Society (Child Welfare Committee Member - Karwar)"],
  ["20", "Mr. Madiwalappa Anapati", "Alumni"],
  ["21", "Ms. Rakshita Vaidya", "Student"],
  ["22", "Mr. Abhishek Galatgi", "Student"],
];

const IQAC = () => {
  return (
    <InnerLayout
      title="Internal Quality Assurance Cell (IQAC)"
      image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "IQAC" },
      ]}
      sidebar={disclosureSidebar}
      sidebarTitle="Disclosure"
    >
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About IQAC
        </h2>

        <div className="vdit-prose">
          <p>
            The Internal Quality Assurance Cell (IQAC) has been established
            at KLS Vishwanathrao Deshpande Institute of Technology in
            accordance with the guidelines of the All India Council for
            Technical Education (AICTE).
          </p>

          <p>
            The IQAC serves as a catalyst for quality enhancement and
            institutional excellence by promoting academic quality,
            administrative efficiency, innovation, stakeholder engagement,
            and continuous improvement practices throughout the institution.
          </p>

          <p>
            The cell comprises representatives from management, industry,
            faculty, administration, alumni, and students, ensuring a
            comprehensive approach to quality assurance and institutional
            development.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Objectives of IQAC
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {iqacObjectives.map((objective) => (
            <div
              key={objective}
              className="bg-white border border-brand/10 p-5"
            >
              <p className="text-[#2a2a2a]/85">
                {objective}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          IQAC Composition
        </h2>

        <div className="bg-white border border-brand/10 p-6">
          <p className="text-[#2a2a2a]/85 leading-relaxed">
            The IQAC comprises a Chairperson, Management Nominee,
            Industry Representatives, Faculty Members, Administrative
            Representatives, Alumni Representatives, and Student
            Representatives. This structure ensures broad stakeholder
            participation in institutional quality initiatives.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2
            className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
            IQAC Committee Members
        </h2>

        <div className="overflow-hidden border border-brand/10">
            <table className="w-full">
            <thead>
                <tr className="bg-brand text-white">
                <th className="px-5 py-4 text-left">No.</th>
                <th className="px-5 py-4 text-left">Name</th>
                <th className="px-5 py-4 text-left">Designation</th>
                </tr>
            </thead>

            <tbody>
                {iqacCommittee.map(([no, name, designation], index) => (
                <tr
                    key={no}
                    className={
                    index % 2 === 0
                        ? "bg-white"
                        : "bg-surface-alt/40"
                    }
                >
                    <td className="px-5 py-4">{no}</td>
                    <td className="px-5 py-4">{name}</td>
                    <td className="px-5 py-4">{designation}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </section>  

      <section>
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          IQAC Minutes of Meetings (MoM)
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
              {iqacDocuments.map((doc, index) => (
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
          * IQAC meeting minutes, action taken reports and quality assurance
          documents are updated periodically.
        </p>
      </section>
    </InnerLayout>
  );
};

export default IQAC;