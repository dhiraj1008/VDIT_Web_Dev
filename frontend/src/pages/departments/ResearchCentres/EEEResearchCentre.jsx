import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "eee-research",
  name: "Electrical & Electronics Engineering Research Centre",
  short: "EEE Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Electrical & Electronics Engineering Research Centre supports research in power systems, renewable energy, electrical machines, smart grids, and power electronics.",
  image: "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=1000",
  hodId: "f-rajeshwari-nanannavar",
  facultyDeptId: "eee",
  labs: ["Power Systems Lab", "Electrical Machines Lab", "Control Systems Lab", "Renewable Energy Lab"],
  research: "Smart Grids · Power Electronics · Renewable Energy · EV Systems",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research in renewable energy and power systems", "Funded projects and industry collaboration", "Doctoral research guidance"],
  projects: [
    { title: "Hybrid Solar-Wind Microgrid for Western Ghats", funding: "MNRE", amount: "Rs. 22 L" },
    { title: "EV Charging Infrastructure Study", funding: "KREDL", amount: "Rs. 7 L" },
  ],
};

const EEEResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default EEEResearchCentre;
