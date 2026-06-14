import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "cse-aiml",
  name: "Computer Science & Engineering (AI & ML)",
  short: "CSE (AI & ML)",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  established: 2022,
  description: "A future-ready programme focussing on artificial intelligence, machine learning, deep learning, and intelligent systems for industry 4.0.",
  image: "https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=1000",
  hodId: "f-poornima-raikar",
  labs: ["AI Lab", "Deep Learning Studio", "GPU Compute Lab", "Robotics Lab"],
  research: "Computer Vision · NLP · Reinforcement Learning · Edge AI",
  accreditation: ["AICTE Approved Intake: 60 seats", "VTU Affiliated since 2022", "NAAC accreditation under preparation for first NBA cycle"],
  achievements: ["Top 10 Finalist - Microsoft Imagine Cup India, 2025", "Best AI Project Award at TANTRAJNANA 2025", "Selected for NVIDIA AI Educator Programme, 2025"],
  projects: [
    { title: "Multilingual NLP for Kannada-English Code-Mixing", funding: "AICTE RPS", amount: "Rs. 10 L" },
    { title: "Edge-AI for Wildlife Monitoring - Dandeli Forest Range", funding: "Karnataka Forest Dept.", amount: "Rs. 6 L" },
  ],
};

const CSEAIML = () => <ProgrammeDetail programme={programme} />;

export default CSEAIML;
