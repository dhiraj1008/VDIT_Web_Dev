import React from "react";
import InnerHero from "../components/InnerHero";
import SectionSidebar from "../components/SectionSidebar";

export const aboutSidebar = [
  { label: "About KLS", to: "/about/about-kls", end: true },
  { label: "About VDIT", to: "/about/about-vdit", end: true },
  { label: "Chairman's Message", to: "/about/chairmans-message" },
  { label: "Principal's Message", to: "/about/principals-message" },
  // { label: "Vision & Mission", to: "/about/vision-mission" },
  // { label: "Our History", to: "/about/our-history" },
  // { label: "Governing Bodies", to: "/about/governing-bodies" },
  // {
  //   label: "People @ VDIT",
  //   to: "/about/people",
  //   children: [
  //     { label: "Faculty", to: "/about/people?tab=faculty" },
  //     { label: "Administrative Staff", to: "/about/people?tab=admin" },
  //     { label: "Researchers", to: "/about/people?tab=research" },
  //   ],
  // },
  // { label: "Committees & Chairs", to: "/about/committees" },
  // { label: "Rules & Regulations", to: "/about/rules" },
  // { label: "Right to Information", to: "/about/rti" },
  // { label: "IQAC", to: "/about/iqac" },
  // { label: "NIRF", to: "/about/nirf" },
  // { label: "Mandatory Disclosure", to: "/about/mandatory-disclosure" },
  // { label: "Financial Statements", to: "/about/financial-statements" },
];

export const disclosureSidebar = [
  { label: "AICTE", to: "/aicte" },
  { label: "VTU", to: "/vtu" },
  { label: "NAAC", to: "/naac" },
  { label: "NIRF", to: "/nirf" },
  { label: "IQAC", to: "/iqac" },
  { label: "Governance", to: "/governance" },
  { label: "DELNET", to: "/delnet" },
];

const InnerLayout = ({ title, image, breadcrumbs, children, sidebar = aboutSidebar, sidebarTitle = "About" }) => {
  return (
    <main>
      <InnerHero title={title} image={image} breadcrumbs={breadcrumbs} />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <SectionSidebar title={sidebarTitle} items={sidebar} />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default InnerLayout;
