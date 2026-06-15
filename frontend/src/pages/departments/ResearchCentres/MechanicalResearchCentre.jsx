import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "../UG/facultyData/mechanicalFacultyData";

export const programme = {
  id: "me-research",
  name: "Mechanical Engineering Research Centre",
  short: "ME Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Mechanical Engineering Research Centre supports research in thermal engineering, manufacturing, materials, welding, design, and sustainable mechanical systems.",
  image: "https://images.unsplash.com/photo-1702549956329-0888cfa45092?w=1000&q=80",
  hodId: "f-k-s-pujari",
  facultyData,
  facultyDeptId: "me",
  labs: ["CAD/CAM Lab", "Thermodynamics Lab", "Fluid Mechanics Lab", "Manufacturing Workshop"],
  research: "Additive Manufacturing · Tribology · Thermal Engineering · Mechatronics",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research in manufacturing and thermal systems", "Funded projects and patent activity", "Doctoral research guidance"],
  projects: [
    { title: "FDM 3D Printing of Bio-composites", funding: "DST SERB", amount: "Rs. 14 L" },
    { title: "Tribological Study of Hybrid Bearings", funding: "AICTE RPS", amount: "Rs. 8 L" },
  ],
};

const MechanicalResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default MechanicalResearchCentre;
