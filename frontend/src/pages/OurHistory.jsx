import React from "react";
import InnerLayout from "./InnerLayout";

const timeline = [
  ["2004", "VDIT founded by KLS at Haliyal with B.E. programmes in CSE, ECE, EEE, Mechanical and Civil."],
  ["2008", "First batch graduates. M.Tech in Digital Electronics introduced."],
  ["2012", "VDIT receives AICTE permanent affiliation. New library and hostel blocks inaugurated."],
  ["2015", "M.Tech in Computer Science introduced. NBA accreditation begins for select programmes."],
  ["2018", "VTU recognises CSE and ECE departments as research centres."],
  ["2020", "Centre for Renewable Energy & Sustainable Systems established."],
  ["2022", "B.E. in CSE (Artificial Intelligence & Machine Learning) launched."],
  ["2024", "VDIT celebrates 20 years of technical education. Alumni count crosses 7,500."],
  ["2026", "New AI Lab and Innovation Centre inaugurated."],
];

const OurHistory = () => (
  <InnerLayout
    title="Our History"
    image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Our History" }]}
  >
    <div className="vdit-prose mb-8">
      <p>
        Karnatak Law Society (KLS), founded in 1939 by seven eminent lawyers
        and visionaries of North Karnataka, has been a torchbearer of education
        across Law, Commerce, Engineering and Management for more than
        eight decades. Vishwanathrao Deshpande Institute of Technology was
        inaugurated in 2004 as KLS's flagship engineering institute, with the
        guidance and support of <strong>Shri R. V. Deshpande</strong>, former
        minister, Government of Karnataka.
      </p>
      <p>
        Over the past two decades, VDIT has grown from a single building
        into a vibrant 26-acre residential campus, serving students from across
        India and producing an alumni network of more than 7,700 engineers.
      </p>
    </div>

    <div className="relative pl-6 border-l-2 border-brand/30 space-y-6">
      {timeline.map(([year, event]) => (
        <div key={year} className="relative">
          <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-brand ring-4 ring-surface" />
          <div className="text-3xl text-brand font-semibold leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{year}</div>
          <p className="text-[#2a2a2a]/85 text-[15px] mt-1">{event}</p>
        </div>
      ))}
    </div>
  </InnerLayout>
);

export default OurHistory;
