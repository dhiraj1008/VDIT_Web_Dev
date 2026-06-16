import React from "react";
import InnerLayout from "./InnerLayout";
import { stats } from "../data/mock";

const programmeTables = [
  {
    title: "UG Programs",
    columns: ["UG Programs", "Year Started", "Intake"],
    rows: [
      ["Civil Engineering", "2010", "30"],
      ["Computer Science & Engineering", "2004", "120"],
      ["Computer Science & Engineering (AI & ML)", "2022", "60"],
      ["Computer Science & Engineering (Data Science)", "2026", "60"],
      ["Electronics & Communication Engineering", "2004", "120"],
      ["Electrical & Electronics Engineering", "2004", "60"],
      ["Mechanical Engineering", "2004", "60"],
    ],
  },
  {
    title: "PG Programs",
    columns: ["PG Programs", "Year Started", "Intake"],
    rows: [
      ["M.Tech in Industrial Electronics", "2010", "12"],
      ["M.Tech in Thermal Power Engineering", "2010", "12"],
    ],
  },
  {
    title: "Research Centre",
    columns: ["Department", "Year Started", "Research Guide", "Research Scholars"],
    rows: [
      ["Computer Science & Engineering", "2023", "02", "06"],
      ["Mechanical Engineering", "2014", "05", "06"],
      ["Electronics and Communication", "2011", "03", "09"],
      ["Electrical & Electronics Engineering", "2023", "01", "01"],
      ["Physics", "2015", "03", "02"],
      ["Chemistry", "2010", "02", "03"],
      ["Mathematics", "2004", "02", "05"],
    ],
  },
];

const ProgrammeTable = ({ title, columns, rows }) => (
  <section className="mt-8">
    <h3>{title}</h3>
    <div className="overflow-x-auto border border-brand/10 mt-4 mb-6">
      <table className="w-full min-w-[620px]">
        <thead>
          <tr className="bg-brand text-white">
            {columns.map((column) => (
              <th key={column} className="px-5 py-4 text-left font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.join("-")} className={index % 2 === 0 ? "bg-white" : "bg-surface-alt/40"}>
              {row.map((cell) => (
                <td key={cell} className="px-5 py-4 text-[#2a2a2a]/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const AboutVDIT = () => (
  <InnerLayout
    title="About Vishwanathrao Deshpande Institute of Technology"
    image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "About VDIT" }]}
  >
    <h2 className="text-3xl md:text-4xl text-brand font-semibold mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      Transforming Through Technology
    </h2>
    <div className="vdit-prose">
      <p>
        <strong>KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT), Haliyal</strong>, stands as a distinguished institution under the prestigious <strong>Karnatak Law Society (KLS)</strong>, an organization established in 1939 by visionary lawyers, freedom fighters, and social reformers of North Karnataka. Founded with the mission of making quality education accessible to all, KLS has evolved into one of Karnataka’s most respected educational organizations, making significant contributions to the fields of <strong>Law</strong>, <strong>Engineering</strong>, <strong>Commerce</strong>, and <strong>Management</strong>.
      </p>
      <p>
        Guided by the enduring vision of its founders, <strong>KLS VDIT</strong> has emerged as a center of academic excellence, innovation, sustainability, and industry-oriented education. The institute currently offers six undergraduate programs, two postgraduate programs, and hosts seven VTU-recognized research centers, serving a vibrant academic community of more than 1,650 students.
      </p>
      <p>
        A key strength of <strong>KLS VDIT</strong> lies in its commitment to skill development and employability. The institution has successfully created a robust ecosystem that prepares students for the demands of a rapidly evolving technological landscape. Students and faculty have collectively completed over <strong>2,200</strong> certificate and value-added courses through renowned platforms such as <strong>Cisco Networking Academy, Infosys Springboard, MongoDB, IIT Bombay Spoken Tutorials, ICT Academy, and TCS iON</strong>, enhancing their technical competencies and industry readiness.
      </p>
      <p>
        Research and innovation form another cornerstone of the institution’s growth. <strong>KLS VDIT</strong> has secured research funding exceeding ₹100 lakhs from prestigious agencies, including <strong>AICTE, VGST, and KSCST</strong>. The institute’s faculty and researchers have made notable scholarly contributions through more than 100 research publications, over 30 published patents, including two granted patents, and several book chapters and technical publications. These achievements reflect the institution’s dedication to advancing knowledge and fostering a culture of innovation.
      </p>
      <p>
        Beyond academics and research, <strong>KLS VDIT</strong> remains deeply committed to sustainability and social responsibility. Through initiatives such as <strong>Unnat Bharat Abhiyan</strong>, eco-club activities, rural outreach programs, and digital literacy campaigns, the institution actively contributes to community development and environmental awareness. Its green campus infrastructure includes a 200 kW solar rooftop power system, a sewage treatment plant, rainwater harvesting facilities, and various environmental conservation initiatives, demonstrating its commitment to sustainable development.
      </p>
      <p>
        The institute has also established strong collaborations with leading industries and organizations, including <strong>Tata Technologies, Toyota Kirloskar Motor, C-DAC, Cisco, IBM SkillBuild, and Royal Enfield</strong>. These partnerships provide students with valuable opportunities for hands-on learning, internships, skill enhancement, and exposure to real-world industrial practices.
      </p>
      <p>
        The collective efforts of students, faculty, staff, alumni, and industry partners have brought national recognition to the institution. <strong>KLS VDIT</strong> has been honoured with prestigious accolades such as the <strong>Institution of Engineers (India) Excellence Awards</strong> in <strong>2024</strong> and <strong>2025</strong>, along with the <strong>Bureau of Indian Standards (BIS) Award 2025</strong>, underscoring its commitment to quality, innovation, and excellence.
      </p>
      <p>
        As <strong>KLS</strong> continues its remarkable journey of educational service, <strong>KLS VDIT</strong> remains steadfast in its mission of empowering future generations through knowledge, innovation, ethical values, and sustainable development, thereby contributing meaningfully to the progress of society and the nation.
      </p>
      <h3>Quick Facts</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 mt-4 mb-6">
        {[
          ["Established", stats.established],
          ["Students", stats.students],
          ["Faculty", stats.faculty],
          ["Alumni", stats.alumni],
          ["Campus", stats.campus],
          ["UG Courses", stats.ugCourses],
          ["PG Courses", stats.pgCourses],
          ["Research Centres", stats.researchCentres],
          //["Placement", stats.placement],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="text-3xl text-brand font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v}</div>
            <div className="text-xs text-[#3a3a3a]/85 uppercase font-sans-ui tracking-wider mt-1">{k}</div>
          </div>
        ))}
      </div>
      {programmeTables.map((table) => (
        <ProgrammeTable key={table.title} {...table} />
      ))}

      <h3
        className="text-3xl text-brand font-semibold mt-12 mb-6"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Affiliations & Approvals
      </h3>

    <div className="overflow-hidden border border-brand/10">
    <table className="w-full">
      <thead>
        <tr className="bg-brand text-white">
          <th className="px-5 py-4 text-left font-semibold w-[30%]">
            Category
          </th>
          <th className="px-5 py-4 text-left font-semibold">
            Details
          </th>
        </tr>
      </thead>

      <tbody>
        {[
          [
            "University Affiliation",
            "Visvesvaraya Technological University (VTU), Belagavi",
          ],
          [
            "Regulatory Approval",
            "All India Council for Technical Education (AICTE), New Delhi",
          ],
          [
            "UGC Recognition",
            "Recognized under Section 2(f) of the UGC Act",
          ],
          [
            "State Recognition",
            "Government of Karnataka",
          ],
          [
            "Accreditation",
            "NAAC Accredited with Grade 'A' ",
          ],
          [
            "NBA Accreditation",
            "Computer Science & Engineering (CSE), Electronics & Communication Engineering (ECE), Electrical & Electronics Engineering (EEE), Mechanical Engineering (ME)",
          ],
          [
            "Research Recognition",
            "Seven VTU-Recognized Research Centres",
          ],
          [
            "Institutional Focus",
            "Research, Innovation, Entrepreneurship and Sustainable Development",
          ],
        ].map(([category, details], index) => (
          <tr
            key={category}
            className={
              index % 2 === 0
                ? "bg-white"
                : "bg-surface-alt/40"
            }
          >
            <td className="px-5 py-4 font-medium text-brand">
              {category}
            </td>

            <td className="px-5 py-4 text-[#2a2a2a]/90">
              {details}
            </td>
          </tr>
        ))}
      </tbody>
  </table>
    </div>
    </div>
  </InnerLayout>
);

export default AboutVDIT;
