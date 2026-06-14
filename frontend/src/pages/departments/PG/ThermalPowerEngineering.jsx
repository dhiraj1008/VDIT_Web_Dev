import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "thermal-power-engineering",
  name: "Thermal Power Engineering",
  short: "M.Tech Thermal Power",
  programmeType: "pg",
  programmeLabel: "M.Tech",
  duration: "2 Years (4 Semesters)",
  intake: null,
  established: 2004,
  description: "The M.Tech programme in Thermal Power Engineering focuses on thermal systems, power plant engineering, heat transfer, energy systems, and sustainable power technologies. Official programme-specific details can be updated here.",
  image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80",
  hodId: "f-k-s-pujari",
  facultyDeptId: "me",
  labs: ["Thermal Engineering Lab", "Heat Transfer Lab", "Energy Systems Lab", "Fluid Mechanics Lab"],
  research: "Thermal Systems · Heat Transfer · Power Engineering · Energy Efficiency",
  accreditation: ["Affiliated to VTU, Belagavi", "Approved intake to be updated", "Programme details to be updated with official data"],
  achievements: ["Postgraduate research and dissertation work", "Thermal systems and energy-focused curriculum", "Industry-oriented project opportunities"],
  projects: [
    { title: "Thermal Systems Performance Study", funding: "To be updated", amount: "To be updated" },
    { title: "Energy Efficiency in Power Systems", funding: "To be updated", amount: "To be updated" },
  ],
};

const ThermalPowerEngineering = () => <ProgrammeDetail programme={programme} />;

export default ThermalPowerEngineering;
