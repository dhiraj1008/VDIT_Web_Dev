import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "me",
  name: "Mechanical Engineering",
  short: "ME",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  established: 2004,
  description: "Offers a comprehensive curriculum in thermodynamics, manufacturing, design and mechatronics, supported by modern workshops and CAD/CAM facilities.",
  image: "https://images.unsplash.com/photo-1702549956329-0888cfa45092?w=1000&q=80",
  hodId: "f-k-s-pujari",
  labs: ["CAD/CAM Lab", "Thermodynamics Lab", "Fluid Mechanics Lab", "Manufacturing Workshop"],
  research: "Additive Manufacturing · Tribology · Thermal Engineering · Mechatronics",
  accreditation: ["NBA Accredited (Tier-2) since 2019", "AICTE Approved Intake: 60 seats", "Industry MoU with Bosch & Mahindra"],
  achievements: ["SAE BAJA 2025 - All India Rank 38", "Go-Kart Championship Karnataka - Runners-up, 2024", "Two patents granted in additive manufacturing, 2025"],
  projects: [
    { title: "FDM 3D Printing of Bio-composites", funding: "DST SERB", amount: "Rs. 14 L" },
    { title: "Tribological Study of Hybrid Bearings", funding: "AICTE RPS", amount: "Rs. 8 L" },
  ],
};

const Mechanical = () => <ProgrammeDetail programme={programme} />;

export default Mechanical;
