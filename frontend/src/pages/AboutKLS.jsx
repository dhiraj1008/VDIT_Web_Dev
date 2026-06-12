import React from "react";
import InnerLayout from "./InnerLayout";

const timeline = [
  ["1939", "Seven eminent lawyers and visionaries from North Karnataka founded Karnatak Law Society in Belagavi."],
  ["2004", "KLS established Vishwanathrao Deshpande Institute of Technology at Haliyal as its flagship engineering institute."],
  ["2008", "The first VDIT batch graduated, extending KLS's educational legacy into engineering and technology."],
  ["2024", "VDIT completed 20 years of technical education with an alumni network crossing 7,500."],
  ["2026", "The institute continues to expand its academic, research and innovation ecosystem for students across the region."],
];

const AboutKLS = () => (
  <InnerLayout
    title="About KLS"
    image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "About KLS" }]}
  >
    <div className="vdit-prose mb-8">
      <p>
        Karnatak Law Society (KLS), founded in 1939 by seven eminent lawyers
        and visionaries of North Karnataka, has been a torchbearer of education
        across Law, Commerce, Engineering and Management for more than eight
        decades.
      </p>
      <p>
        Vishwanathrao Deshpande Institute of Technology was inaugurated in
        2004 as KLS's flagship engineering institute, with the guidance and
        support of <strong>Shri R. V. Deshpande</strong>, former minister,
        Government of Karnataka.
      </p>
      <p>
        Over the past two decades, VDIT has grown from a single building into
        a vibrant 26-acre residential campus, serving students from across
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

export default AboutKLS;
