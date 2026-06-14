import React from "react";
import InnerLayout, { disclosureSidebar } from "../InnerLayout";

const governanceBodies = [
  {
    title: "Governing Council",
    description:
      "Provides strategic direction and oversees institutional development, policy implementation and long-term planning.",
  },
  {
    title: "Academic Council",
    description:
      "Monitors academic quality, curriculum implementation, teaching-learning processes and student progression.",
  },
  {
    title: "Finance Committee",
    description:
      "Reviews financial planning, budgeting, resource allocation and institutional expenditure.",
  },
  {
    title: "Internal Quality Assurance Cell (IQAC)",
    description:
      "Promotes continuous quality improvement and institutional excellence through quality assurance initiatives.",
  },
];

const policies = [
  "Anti-Ragging Policy",
  "Grievance Redressal Policy",
  "Research & Innovation Policy",
  "Gender Sensitization Policy",
  "Code of Conduct",
  "Environmental Sustainability Policy",
];

const committees = [
  ["Anti-Ragging Committee", "Student Welfare"],
  ["Internal Complaints Committee", "Gender Sensitization"],
  ["SC/ST Cell", "Social Inclusion"],
  ["Grievance Redressal Cell", "Student Support"],
  ["Training & Placement Cell", "Career Development"],
  ["Research & Development Cell", "Research Promotion"],
];

const Governance = () => {
  return (
    <InnerLayout
      title="Institutional Governance"
      image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      breadcrumbs={[
        { label: "Disclosure", to: "/disclosure" },
        { label: "Governance" },
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
          Governance at KLS VDIT
        </h2>

        <div className="vdit-prose">
          <p>
            KLS Vishwanathrao Deshpande Institute of Technology follows a
            transparent, participative and accountable governance system
            that supports academic excellence, innovation and institutional
            growth.
          </p>

          <p>
            The governance framework includes management representatives,
            academic leaders, faculty members, industry experts, alumni and
            stakeholders who collectively contribute to institutional
            decision-making and quality enhancement.
          </p>
        </div>
      </section>

      {/* GOVERNANCE STRUCTURE */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Governance Structure
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {governanceBodies.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-brand/10 p-6"
            >
              <h3 className="text-xl text-brand font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-[#2a2a2a]/85">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITTEES */}
      <section className="mb-14">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Institutional Committees
        </h2>

        <div className="overflow-hidden border border-brand/10">
          <table className="w-full">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-5 py-4 text-left">
                  Committee
                </th>

                <th className="px-5 py-4 text-left">
                  Purpose
                </th>
              </tr>
            </thead>

            <tbody>
              {committees.map(([committee, purpose], index) => (
                <tr
                  key={committee}
                  className={
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-surface-alt/40"
                  }
                >
                  <td className="px-5 py-4">
                    {committee}
                  </td>

                  <td className="px-5 py-4">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* POLICIES */}
      <section>
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Institutional Policies
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {policies.map((policy) => (
            <div
              key={policy}
              className="bg-white border border-brand/10 p-5"
            >
              <p className="text-[#2a2a2a]/85">
                {policy}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#3a3a3a]/70 mt-6">
          * Detailed governance policies and committee documents will be
          updated periodically.
        </p>
      </section>
    </InnerLayout>
  );
};

export default Governance;