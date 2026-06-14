import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "industrial-electronics",
  name: "Industrial Electronics",
  short: "M.Tech Industrial Electronics",
  programmeType: "pg",
  programmeLabel: "M.Tech",
  duration: "2 Years (4 Semesters)",
  intake: null,
  established: 2004,
  description: "The M.Tech programme in Industrial Electronics provides advanced study in power electronics, control systems, embedded systems, industrial automation, and applied electronic systems. Official programme-specific details can be updated here.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80",
  hodId: "f-rajeshwari-nanannavar",
  facultyDeptId: "eee",
  labs: ["Power Electronics Lab", "Control Systems Lab", "Embedded Systems Lab", "Industrial Automation Lab"],
  research: "Industrial Automation · Power Electronics · Control Systems · Embedded Systems",
  accreditation: ["Affiliated to VTU, Belagavi", "Approved intake to be updated", "Programme details to be updated with official data"],
  achievements: ["Advanced postgraduate learning environment", "Project-based learning in industrial electronics", "Faculty-guided research and dissertation work"],
  projects: [
    { title: "Industrial Automation Systems", funding: "To be updated", amount: "To be updated" },
    { title: "Power Electronics and Drive Systems", funding: "To be updated", amount: "To be updated" },
  ],
};

const IndustrialElectronics = () => <ProgrammeDetail programme={programme} />;

export default IndustrialElectronics;
