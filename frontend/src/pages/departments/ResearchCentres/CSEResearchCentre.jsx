import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "../UG/facultyData/cseFacultyData";

export const programme = {
  id: "cse-research",
  name: "Computer Science & Engineering Research Centre",
  short: "CSE Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Computer Science & Engineering Research Centre supports doctoral and faculty research in computing, software systems, data science, cybersecurity, and emerging digital technologies. Official research centre details can be updated here.",
  image: "https://images.pexels.com/photos/6208728/pexels-photo-6208728.jpeg?w=1000",
  hodId: "f-venkatesh-shankar",
  facultyData,
  facultyDeptId: "cse",
  labs: ["Programming Lab", "Database Lab", "Networks Lab", "Cyber Security Lab", "Data Science Lab"],
  research: "Software Engineering · Cloud Computing · Cybersecurity · Data Mining",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research publications and funded project activity", "Doctoral research guidance", "Industry and academic research collaboration"],
  projects: [
    { title: "Federated Learning for Rural Healthcare", funding: "AICTE RPS", amount: "Rs. 8 L" },
    { title: "Cyber Threat Intelligence Platform", funding: "DST Nidhi", amount: "Rs. 15 L" },
  ],
};

const CSEResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default CSEResearchCentre;
