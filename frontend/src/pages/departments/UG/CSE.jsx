import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "cse",
  name: "Computer Science & Engineering",
  short: "CSE",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 120,
  established: 2004,
  description: "Established in 2004, the department offers a B.E. programme with specialisations in software engineering, data structures, computer networks and emerging areas of computing.",
  image: "https://images.pexels.com/photos/6208728/pexels-photo-6208728.jpeg?w=1000",
  hodId: "f-venkatesh-shankar",
  labs: ["Programming Lab", "Database Lab", "Networks Lab", "Cyber Security Lab", "Data Science Lab"],
  research: "Software Engineering · Cloud Computing · Cybersecurity · Data Mining",
  accreditation: ["NBA Accredited (Tier-2) since 2018", "VTU Recognised Research Centre", "AICTE Approved Intake: 120 seats"],
  achievements: ["ACM Inter-Collegiate Programming Champions, Karnataka, 2025", "Smart India Hackathon 2024 - Hardware Track Winners", "Best Paper Award at ICACCS 2025 (Bengaluru)", "VTU Gold Medal - Ms. Pooja Kulkarni, Batch 2024"],
  projects: [
    { title: "IoT Smart Agriculture for Uttara Kannada", funding: "VGST Karnataka", amount: "Rs. 12 L" },
    { title: "Federated Learning for Rural Healthcare", funding: "AICTE RPS", amount: "Rs. 8 L" },
    { title: "Cyber Threat Intelligence Platform", funding: "DST Nidhi", amount: "Rs. 15 L" },
  ],
};

const CSE = () => <ProgrammeDetail programme={programme} />;

export default CSE;
