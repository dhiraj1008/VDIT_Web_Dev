import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "./facultyData/eeeFacultyData";

export const programme = {
  id: "eee",
  name: "Electrical & Electronics Engineering",
  short: "EEE",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  established: 2004,
  description: "Focuses on power systems, control engineering, renewable energy, and electrical machines, training engineers for India's evolving energy sector.",
  image: "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=1000",
  hodId: "f-rajeshwari-nanannavar",
  facultyData,
  labs: ["Power Systems Lab", "Electrical Machines Lab", "Control Systems Lab", "Renewable Energy Lab"],
  research: "Smart Grids · Power Electronics · Renewable Energy · EV Systems",
  accreditation: ["NBA Accredited (Tier-2) since 2020", "AICTE Approved Intake: 60 seats", "MoU with KREDL for joint research"],
  achievements: ["MNRE Sponsored Solar Energy Centre established, 2024", "First Prize - IEEE Power Engineering Quiz, Karnataka, 2025", "Faculty publication in IEEE Transactions on Sustainable Energy"],
  projects: [
    { title: "Hybrid Solar-Wind Microgrid for Western Ghats", funding: "MNRE", amount: "Rs. 22 L" },
    { title: "EV Charging Infrastructure Study", funding: "KREDL", amount: "Rs. 7 L" },
  ],
};

const EEE = () => <ProgrammeDetail programme={programme} />;

export default EEE;
