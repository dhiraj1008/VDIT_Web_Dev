import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "./facultyData/basicScienceFacultyData";

export const programme = {
  id: "bsh",
  name: "Basic Science",
  short: "Basic Science",
  programmeType: "ug",
  programmeLabel: "Basic Science",
  duration: "First-year engineering foundation",
  intake: null,
  established: 2004,
  description: "Basic Science supports first-year engineering education through mathematics, physics, chemistry, communication skills, and humanities foundations.",
  image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=80",
  hodId: "f-sneha-s-kulkarni",
  facultyData,
  labs: ["Physics Lab", "Chemistry Lab", "Language Lab", "Mathematics Learning Centre"],
  research: "Mathematics · Physics · Chemistry · Humanities",
  accreditation: ["Supports all AICTE-approved undergraduate engineering programmes", "VTU-affiliated first-year curriculum"],
  achievements: ["Faculty research contributions across mathematics, physics, and chemistry", "Foundation courses delivered for all engineering branches"],
  projects: [],
};

const BasicScience = () => <ProgrammeDetail programme={programme} />;

export default BasicScience;
