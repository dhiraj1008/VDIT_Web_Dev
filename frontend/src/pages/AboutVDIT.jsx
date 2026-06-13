import React from "react";
import InnerLayout from "./InnerLayout";
import { stats } from "../data/mock";

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
        <strong>KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT), Haliyal</strong>, stands as a distinguished institution under the prestigious <strong>Karnatak Law Society (KLS)</strong>, an organization established in 1939 by visionary lawyers, freedom fighters, and social reformers of North Karnataka. Founded with the mission of making quality education accessible to all, KLS has evolved into one of Karnataka’s most respected educational organizations, making significant contributions to the fields of Law, Engineering, Commerce, and Management.
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
      <ChromaKeyVideo
        src="/Dhiraj_vod2.mp4"
        className="about-vdit-video"
        ariaLabel="About VDIT video"
      />

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
          ["Placement", stats.placement],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="text-3xl text-brand font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v}</div>
            <div className="text-xs text-[#3a3a3a]/85 uppercase font-sans-ui tracking-wider mt-1">{k}</div>
          </div>
        ))}
      </div>

      <h3>Affiliations & Approvals</h3>
      <ul>
        <li>Affiliated to Visvesvaraya Technological University (VTU), Belagavi</li>
        <li>Approved by All India Council for Technical Education (AICTE), New Delhi</li>
        <li>Recognised by Government of Karnataka</li>
        <li>NAAC accredited</li>
        <li>NBA accredited (CSE, ECE, EEE, Mechanical)</li>
      </ul>
    </div>
  </InnerLayout>
);

export default AboutVDIT;
