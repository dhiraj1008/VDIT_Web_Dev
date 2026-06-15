import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "../UG/facultyData/basicScienceFacultyData";

export const programme = {
  id: "mathematics",
  name: "Mathematics Research Centre",
  short: "Mathematics Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Mathematics Research Centre supports research in graph theory, applied mathematics, discrete mathematics, optimisation, and mathematical modelling.",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&q=80",
  hodId: "f-meenal-m-kaliwal",
  facultyData,
  facultyDeptId: "bsh",
  labs: ["Mathematics Learning Centre", "Research Workspaces", "Computational Tools", "Seminar Facilities"],
  research: "Graph Theory · Applied Mathematics · Discrete Mathematics · Optimisation",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research publications in mathematics", "Doctoral research guidance", "Academic seminars and research mentoring"],
  projects: [{ title: "Graph Theory and Applied Mathematics Studies", funding: "To be updated", amount: "To be updated" }],
};

const MathematicsResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default MathematicsResearchCentre;
