import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "ece-research",
  name: "Electronics & Communication Engineering Research Centre",
  short: "ECE Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Electronics & Communication Engineering Research Centre supports research in communication systems, VLSI, signal processing, embedded systems, antennas, and IoT-enabled technologies.",
  image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1000&q=80",
  hodId: "f-nagaraj-bhat",
  facultyDeptId: "ece",
  labs: ["VLSI Lab", "Embedded Systems Lab", "Communication Lab", "DSP Lab"],
  research: "VLSI Design · Wireless Networks · IoT · Image Processing",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research publications in electronics and communication", "Student and faculty innovation activity", "Doctoral research guidance"],
  projects: [
    { title: "5G Beamforming Test-bed", funding: "DST SERB", amount: "Rs. 18 L" },
    { title: "Wearable Health Monitor", funding: "VGST", amount: "Rs. 9 L" },
  ],
};

const ECEResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default ECEResearchCentre;
