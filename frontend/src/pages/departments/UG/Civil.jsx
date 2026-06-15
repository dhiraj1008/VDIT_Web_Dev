import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "./facultyData/civilFacultyData";

export const programme = {
  id: "civil",
  name: "Civil Engineering",
  short: "Civil",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  established: 2004,
  description: "Trains engineers in structural analysis, environmental engineering, geotechnics, and construction management for sustainable infrastructure.",
  image: "https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=1000",
  hodId: "f-harsha-a-jadhav",
  facultyData,
  labs: ["Structural Lab", "Geotechnical Lab", "Surveying Lab", "Environmental Lab"],
  research: "Sustainable Materials · Water Resources · Earthquake Engineering",
  accreditation: ["AICTE Approved Intake: 60 seats", "NBA accreditation visit - March 2026", "MoU with PWD Karnataka"],
  achievements: ["Best Student Project - ICI Karnataka Chapter, 2025", "National Conference on Sustainable Engineering hosted, 2026", "Funded study on flood resilience for Ghataprabha basin"],
  projects: [
    { title: "Sustainable Concrete with Industrial Byproducts", funding: "DST SERB", amount: "Rs. 12 L" },
    { title: "Earthquake Vulnerability Mapping - N. Karnataka", funding: "Karnataka SDMA", amount: "Rs. 9 L" },
  ],
};

const Civil = () => <ProgrammeDetail programme={programme} />;

export default Civil;
