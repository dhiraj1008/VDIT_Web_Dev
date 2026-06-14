import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "ece",
  name: "Electronics & Communication Engineering",
  short: "ECE",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  established: 2004,
  description: "The ECE department prepares students in VLSI design, embedded systems, signal processing, and wireless communication with state-of-the-art labs.",
  image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1000&q=80",
  hodId: "f-nagaraj-bhat",
  labs: ["VLSI Lab", "Embedded Systems Lab", "Communication Lab", "DSP Lab"],
  research: "VLSI Design · Wireless Networks · IoT · Image Processing",
  accreditation: ["NBA Accredited (Tier-2) since 2019", "VTU Recognised Research Centre", "AICTE Approved Intake: 60 seats"],
  achievements: ["IEEE Best Student Branch Award (Karnataka Section), 2024", "Patent filed: Low-power VLSI architecture for IoT edge nodes", "Three students published in IEEE Sensors Journal, 2025"],
  projects: [
    { title: "5G Beamforming Test-bed", funding: "DST SERB", amount: "Rs. 18 L" },
    { title: "Wearable Health Monitor - Rural Karnataka", funding: "VGST", amount: "Rs. 9 L" },
  ],
};

const ECE = () => <ProgrammeDetail programme={programme} />;

export default ECE;
