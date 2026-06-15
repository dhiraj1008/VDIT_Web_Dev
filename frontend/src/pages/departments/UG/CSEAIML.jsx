import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "./facultyData/cseAimlFacultyData";

export const programme = {
  id: "cse-aiml",
  name: "Computer Science & Engineering (AI & ML)",
  short: "CSE (AI & ML)",
  programmeType: "ug",
  // programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  studentsEnrolled: 240,
  facultyStrength: 8,
  phdFaculty: 1,
  established: 2022,
  description: "The Department of Computer Science and Engineering (Artificial Intelligence & Machine Learning) was established in 2022 to provide quality education in the rapidly growing fields of AI and ML. The department offers a B.E. program that equips students with strong foundations in programming, data science, machine learning, artificial intelligence, and intelligent systems.",
  image: "https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=1000",
  hodId: "f-poornima-raikar",
  facultyData,
  labs: ["AI Lab", "Machine Learning Lab", "Data Science Lab", "Programming Lab", "Project Lab", "Computing Lab"],
  research: "Artificial Intelligence · Machine Learning · Data Science · Intelligent Systems",
  accreditation: ["AICTE Approved Intake: 60 seats", "VTU Affiliated since 2022", "NAAC accreditation under preparation for first NBA cycle"],
  achievements: ["Innovation and research activities through hackathons, project exhibitions, paper presentations, technical competitions, and innovation challenges.", "Industry-oriented learning through workshops, internships, certification programs, and value-added courses.", "Student association and professional chapter engagement through AISA, C-DAC, CISCO, BITES, Infosys Springboard, CSI, and ACM."],
  projects: [
    { title: "AI and ML Student Projects", funding: "Department activity", amount: "To be updated" },
    { title: "Innovation Challenges and Technical Competitions", funding: "Department activity", amount: "To be updated" },
  ],
  dashboard: [
    ["Faculty Members", "08"],
    ["Faculty with Ph.D.", "01"],
    ["Laboratories", "06"],
    ["Students Enrolled", "240"],
  ],
  academicOverview: [
    {
      title: "Academic Strengths",
      text: "The institution is committed to academic excellence through qualified faculty, modern infrastructure, and outcome-based education. Strong industry collaborations and well-equipped laboratories support effective learning and skill development.",
    },
    {
      title: "Practical Learning and Innovation",
      text: "The department combines theoretical knowledge with practical learning through laboratories, projects, internships, and industry interactions. Innovation is encouraged through research activities, hackathons, and technical competitions.",
    },
    {
      title: "Interdisciplinary Learning Opportunities",
      text: "Students are encouraged to participate in multidisciplinary projects, workshops, and elective courses across various domains. This approach enhances creativity, adaptability, and problem-solving skills.",
    },
  ],
  curriculumSupport: [
    "Laboratory sessions provide hands-on experience in core and emerging technologies.",
    "Project-based learning enables students to apply theoretical knowledge to real-world problems.",
    "Internship opportunities help students gain industry exposure and practical experience.",
    "Regular workshops and seminars keep students updated with the latest technological advancements.",
    "Value-added courses and certification programs enhance technical skills beyond the university curriculum.",
    "Industry interactions bridge the gap between academic learning and industry requirements.",
    "Soft skills and employability training develop communication, leadership, and career readiness.",
    "Continuous mentoring and academic guidance support students' overall growth and success.",
  ],
  programmeOutcomes: [
    "Apply knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to solve complex engineering problems.",
    "Identify, formulate, review research literature, and analyze complex engineering problems using first principles of mathematics, natural sciences, and engineering sciences.",
    "Design solutions for complex engineering problems with consideration for public health, safety, culture, society, and environment.",
    "Use research-based knowledge and research methods including design of experiments, analysis, interpretation of data, and synthesis of information.",
    "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools.",
    "Assess societal, health, safety, legal, and cultural issues relevant to professional engineering practice.",
    "Understand the impact of engineering solutions in societal and environmental contexts and demonstrate the need for sustainable development.",
    "Apply ethical principles and commit to professional ethics, responsibilities, and norms of engineering practice.",
    "Function effectively as an individual and as a member or leader in diverse and multidisciplinary teams.",
    "Communicate effectively with the engineering community and society through reports, documentation, presentations, and instructions.",
    "Apply engineering and management principles to manage projects in multidisciplinary environments.",
    "Recognize the need for independent and lifelong learning in the broad context of technological change.",
  ],
  pso: [
    "Develop abilities to model real-world problems using appropriate algorithms, computational theories, and programming languages in the area of AI and ML.",
    "Develop software applications and products in specialized areas of Artificial Intelligence and Machine Learning.",
  ],
  peo: [
    "Develop an ability to identify and analyze the requirements of Computer Science and Engineering in design and providing novel engineering solutions.",
    "Develop abilities to work in teams on multidisciplinary projects with effective communication skills, ethical qualities, and leadership roles.",
    "Develop abilities for successful Computer Science Engineering careers and achieve higher career goals.",
  ],
  // infrastructure: [
  //   ["Classrooms", "3"],
  //   ["Laboratories", "6"],
  //   ["Computing Facilities", "240"],
  //   ["Project Rooms", "1"],
  //   ["Department Library", "01"],
  //   ["Software Tools", "Code::Blocks, Anaconda, LaTeX, Oracle, Power BI"],
  //   ["Equipment Highlights", "Modern computing facilities with PCs configured to support academic, laboratory, and research activities."],
  // ],
  studentActivities: {
    clubs: ["AISA Association"],
    professionalChapters: ["C-DAC", "CISCO", "BITES", "Infosys Springboard", "CSI", "ACM"],
  },
  
  facultyTable: [
    ["Dr. Poornima Raikar", "BE, M.Tech, Ph.D", "21 years"],
    ["Mr. Ravindra Patil", "BE, M.Tech", "14 years"],
    ["Mrs. Ekata Shanbhag", "BE, M.Tech", "3 years"],
    ["Mr. Bheerappa Sasanoor", "BE, M.Tech", "6 years"],
    ["Mr. Narasimha Dixit", "BE, M.Tech", "3 years"],
    ["Mr. Amarnath Swami", "BE, M.Tech", "1 year"],
    ["Mrs. Kanchan Khokale", "BE, M.Tech", "0.5 years"],
    ["Mrs. Jyoti Chitti", "BE, M.Tech", "6 years"],
  ],
  teachingStaff: [
    ["Dr. Poornima Raikar", "Assistant Professor"],
    ["Mr. Ravindra Patil", "Assistant Professor"],
    ["Mrs. Ekata Shanbhag", "Assistant Professor"],
    ["Mr. Bheerappa Sasanoor", "Assistant Professor"],
    ["Mr. Narasimha Dixit", "Assistant Professor"],
    ["Mr. Amarnath Swami", "Assistant Professor"],
    ["Mrs. Kanchan Khokale", "Assistant Professor"],
    ["Mrs. Jyoti Chitti", "Assistant Professor"],
    ["Miss. Laxmi Hattiholi", "Assistant Professor"],
  ],
  nonTeachingStaff: [
    ["Mr. Shankar Kuri", "Instructor"],
    ["Mrs. Radha Mavalange", "Assistant Instructor"],
    ["Mr. Nagesh Melinmani", "Peon"],
    ["Miss. Ujwala Honnoji", "Peon"],
    ["Mr. Hasan Kattimani", "Peon"],
  ],
};

const CSEAIML = () => <ProgrammeDetail programme={programme} />;

export default CSEAIML;
