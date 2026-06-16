import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "./facultyData/cseFacultyData";

export const programme = {
  id: "cse",
  name: "Computer Science & Engineering",
  short: "CSE",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 120,
  studentsEnrolled: 0,
  facultyStrength: 12,
  phdFaculty: 1,
  established: 2004,
  description:
    "The Department of Computer Science and Engineering (CSE) at KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT), Haliyal, was established in 2004 with the vision of imparting quality technical education and producing competent computer science professionals capable of addressing the challenges of the rapidly evolving digital world. Since its inception, the department has been dedicated to academic excellence, innovation, research, and holistic student development.",
  image: "https://images.pexels.com/photos/6208728/pexels-photo-6208728.jpeg?w=1000",
  hodId: "f-venkatesh-shankar",
  facultyData,
  labs: [
    "Programming Lab",
    "Database Lab",
    "Networks Lab",
    "Cyber Security Lab",
    "Data Science Lab",
    "Project Lab",
    "Computing Lab",
  ],
  research:
    "Artificial Intelligence, Data Science, Internet of Things, Cybersecurity, Software Development, Cloud Computing, Business Analytics",
  accreditation: [
    "AICTE Approved Intake: 120 seats",
    "VTU Affiliated since 2004",
    "VTU Recognized Research Centre",
  ],
  achievements: [
    "Industry interaction through internships, in-plant training, industrial visits, expert lectures, and live project opportunities.",
    "Student development through national and international technical events, conferences, hackathons, project exhibitions, and workshops.",
    "Professional engagement through C-Force, ACM, CSI, and CISCO activities.",
  ],
  projects: [
    {
      title: "Student Innovation Projects",
      funding: "Department activity",
      amount: "To be updated",
    },
    {
      title: "Industry Connect and MoU Activities",
      funding: "Department activity",
      amount: "To be updated",
    },
  ],
  dashboard: [
    ["Faculty Members", "12"],
    ["Faculty with Ph.D.", "01"],
    ["Laboratories", "07"],
    ["Student Intake", "120"],
  ],
  academicOverview: [
    {
      title: "Academic Strengths",
      text:
        "The department offers a Bachelor of Engineering program in Computer Science and Engineering with an approved intake of 120 students. The curriculum follows VTU guidelines and is enriched through industry interaction, emerging technologies, and outcome-based education practices.",
    },
    {
      title: "Practical Learning and Innovation",
      text:
        "More than 500 computers with high-speed internet, licensed software, and modern laboratories support hands-on learning in programming, software development, artificial intelligence, machine learning, data analytics, cloud computing, and cybersecurity.",
    },
    {
      title: "Interdisciplinary Learning Opportunities",
      text:
        "Students are encouraged to apply computing concepts across domains such as AI, Data Science, IoT, Cybersecurity, Electronics, Mechanical Engineering, Civil Engineering, Healthcare, and Business Analytics through projects, workshops, seminars, and research activities.",
    },
  ],
  curriculumSupport: [
    "Industry interaction through collaborations with industries, technology experts, and alumni.",
    "Internships, in-plant training, industrial visits, expert lectures, and live project opportunities bridge academic learning with real-world applications.",
    "A departmental library supports academic learning, project work, competitive examinations, and research activities.",
    "Students are encouraged to undertake innovative projects, participate in competitions, pursue certifications, and engage in research-oriented activities.",
    "The department promotes innovation, ethical values, entrepreneurship, and lifelong learning.",
    "Graduates are prepared for careers in multinational companies, government organizations, startups, higher education, and research.",
  ],
  programmeOutcomes: [
    "Apply knowledge of mathematics, science, engineering fundamentals, and computer science engineering principles to solve complex engineering problems.",
    "Identify, formulate, and analyze computing problems using appropriate algorithms, computational theories, and programming languages.",
    "Design and develop software and computing solutions with consideration for professional, societal, and environmental needs.",
    "Use modern engineering tools, programming environments, and computing platforms for software development and research.",
    "Function effectively as an individual and as a member or leader in multidisciplinary teams.",
    "Communicate effectively through reports, documentation, presentations, and professional interactions.",
    "Recognize the need for lifelong learning and adapt to emerging technologies in the computing field.",
  ],
  pso: [
    "Develop abilities to model real-world problems using appropriate algorithms, computational theories, and programming languages in the area of Computer Science and Engineering.",
    "Develop an ability to inculcate innovation, entrepreneurial, and leadership skills.",
  ],
  peo: [
    "Develop an ability to identify and analyze the requirements of Computer Science and Engineering in design and provide novel engineering solutions.",
    "Develop abilities to work in a team on multidisciplinary projects with effective communication skills, ethical qualities, and leadership roles.",
    "Develop abilities for a successful Computer Science Engineer and achieve higher career goals.",
  ],
  infrastructure: [
    ["Classrooms", "06"],
    ["Laboratories", "07"],
    ["Project Rooms", "06"],
    ["Computing Facilities", "500+ computers"],
    [
      "Software Tools",
      "Code::Blocks, Jupyter, LaTeX, TeXworks, MiKTeX, Arduino IDE, Keil, Oracle, Power BI, Notepad++, MongoDB",
    ],
    [
      "Equipment Highlights",
      "IoT kits and modern computing facilities for academic, laboratory, and project work.",
    ],
  ],
  hideSharedClubs: true,
  studentActivities: {
    clubs: [
      {
        name: "C-Force",
        category: "Student Club",
        description:
          "C-Force, the student association of the Computer Science and Engineering department, is a dynamic platform fostering academic excellence and technical empowerment through alumni interaction, expert-led talks, hands-on workshops, mentorship sessions, hackathons, project exhibitions, conferences, and technical events.",
      },
      {
        name: "ACM",
        category: "Professional Chapter",
        description:
          "ACM, the Association for Computing Machinery, is a global educational and scientific computing society that promotes computing research, innovation, technical dialogue, publications, conferences, and professional networking.",
      },
      {
        name: "CSI",
        category: "Professional Chapter",
        description:
          "The Computer Society of India supports the advancement of computer science and information technology through knowledge sharing, professional activities, technical events, and student engagement across India.",
      },
      {
        name: "CISCO",
        category: "Professional Chapter",
        description:
          "CISCO activities expose students to networking, wireless technologies, security, cloud, collaboration, data center, virtualization, artificial intelligence, observability, software, and connected digital technologies.",
      },
    ],
  },
  departmentContact: {
    name: "Dr. Venkatesh Shankar",
    role: "Head of Department",
    email: "hodcse@klsvdit.edu.in",
    phone: "9964145566",
  },
};

const CSE = () => <ProgrammeDetail programme={programme} />;

export default CSE;
