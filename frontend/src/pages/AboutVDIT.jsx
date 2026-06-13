import React from "react";
import InnerLayout from "./InnerLayout";
import { stats } from "../data/mock";

const AboutVDIT = () => (
  <InnerLayout
    title="About VDIT"
    image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "About VDIT" }]}
  >
    <h2 className="text-3xl md:text-4xl text-brand font-semibold mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      Transforming Through Technology
    </h2>
    <div className="vdit-prose">
      <p>
        KLS Vishwanathrao Deshpande Institute of Technology (VDIT) was
        established in 2004 by the Karnatak Law Society (KLS) in Haliyal,
        Uttara Kannada district of Karnataka. The institute came into being
        through the initiation and support of <strong>Shri R. V. Deshpande</strong>,
        former minister, Government of Karnataka, with a clear mission to bring
        quality technical education to the rural and semi-urban youth of North
        Karnataka.
      </p>
      <p>
        Within a short span of years, VDIT has developed excellent
        infrastructural facilities and an academic climate to train students to
        meet the challenges posed by the rapidly changing techno-economic
        scenario. The institute is set on a 26-acre campus, cradled by a
        picturesque landscape at the foothills of the Western Ghats, offering
        an ideal environment for focussed academic work and holistic
        development.
      </p>
      <p>
        The institute is affiliated to <strong>Visvesvaraya Technological
        University (VTU), Belagavi</strong> and approved by the All India
        Council for Technical Education (AICTE), New Delhi. It is recognised
        by the Government of Karnataka and accredited by NAAC. Multiple
        undergraduate programmes are accredited by NBA.
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
