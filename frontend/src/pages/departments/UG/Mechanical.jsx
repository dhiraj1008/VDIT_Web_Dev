import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";
import facultyData from "./facultyData/mechanicalFacultyData";

export const programme = {
  id: "me",
  name: "Mechanical Engineering",
  short: "ME",
  programmeType: "ug",
  programmeLabel: "B.E.",
  duration: "4 Years (8 Semesters)",
  intake: 60,
  studentsEnrolled: 200,
  facultyStrength: 14,
  phdFaculty: 6,
  established: 2004,
  description: "Department of Mechanical Engineering at KLS VDIT, Haliyal, established in 2004, offers quality engineering education supported by experienced faculty and advanced laboratory facilities. With industry-focused training centers, research funding exceeding ₹60 lakhs, VTU-recognized research programs, and strong industry collaborations, the department equips students with practical skills and knowledge in emerging technologies, preparing them for successful careers in industry, research, entrepreneurship, higher education, and government sectors.",
  image: "https://images.unsplash.com/photo-1702549956329-0888cfa45092?w=1000&q=80",
  hodId: "f-k-s-pujari",
  facultyData,
  labs: [
    "Toyota Centre of Excellence",
    "Royal Enfield Training Centre",
    "Electric Vehicle Laboratory",
    "Welding Research Center",
    "CNC Machining Facility",
    "Hydraulics & Pneumatics Laboratory with PLC",
    "3D Printing Facility",
    "Vibration & Thermography Testing Center",
  ],
  research: "Thermal Engineering · Manufacturing Engineering · Design Engineering · Materials Engineering · Welding Technology · Cyber Physical Systems · Industry 4.0 · Artificial Intelligence",
  accreditation: [
    "AICTE Approved Programme",
    "VTU Affiliated",
    "VTU Recognized Research Centre",
    "NAAC A Grade Institution",
  ],
  achievements: [
    "Research and industry project funding exceeding ₹60 Lakhs",
    "66 research papers published in Scopus-indexed journals",
    "22 patents filed and published",
    "Strong industry collaborations and MoUs supporting research and innovation",
  ],
  projects: [
    {
      title: "Sponsored Research Projects",
      funding: "VGST & KCTU",
      amount: "₹60+ Lakhs",
    },
    {
      title: "Industry Consultancy Projects",
      funding: "Industry Sponsored",
      amount: "Ongoing",
    },
  ],
  dashboard: [
    ["Faculty Members", "14"],
    ["Faculty with Ph.D.", "06"],
    ["Laboratories", "14"],
    ["Students Enrolled", "200+"],
  ],
  academicOverview: [
    {
      title: "Academic Strengths",
      text: "The Department of Mechanical Engineering strengthens KLS VDIT’s academic excellence through experienced faculty, advanced laboratories, industry collaborations, and a VTU-recognized Research Centre. It promotes innovation, research, and industry-ready skills through practical training, internships, and outcome-based education.",
    },
    {
      title: "Practical Learning and Innovation",
      text: "The Department of Mechanical Engineering promotes quality education through practical learning, industry exposure, and innovation. Advanced laboratories, internships, projects, and research activities help students develop technical skills and prepare for successful engineering careers.",
    },
    {
      title: "Interdisciplinary Learning Opportunities",
      text: "The Department of Mechanical Engineering promotes interdisciplinary learning through industry-focused laboratories and emerging technologies. Students gain exposure to automation, electric mobility, smart manufacturing, and Industry 4.0 concepts, preparing them for multidisciplinary engineering careers.",
    },
  ],
  curriculumSupport: [
    "Follows the curriculum prescribed by Visvesvaraya Technological University (VTU).",
    "Provides a strong foundation in mechanical engineering principles and emerging technologies.",
    "Programs are approved by AICTE, New Delhi.",
    "Curriculum is regularly updated by VTU to meet industry and societal needs.",
    "Enriched through add-on courses, workshops, and industry interactions.",
    "Encourages internships and skill-development programs for practical exposure.",
    "Focuses on enhancing student employability and professional competence.",
    // "Faculty mentoring and academic guidance help students plan careers in industry, higher education, research, and entrepreneurship.",
  ],
  programmeOutcomes: [
    "Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    "Problem analysis: Identity, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using the first principles of mathematics, natural sciences, and engineering sciences.",
    "Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety and cultural, societal, and environmental considerations.",
    "Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis, interpretation of data, and synthesis of the information to provide valid conclusions",
    "The engineer and society: Apply to reason informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
    "Environment and sustainability: Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.",
    "Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
    "Individual and team work: Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.",
    "Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.",
    "Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
    // "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    "Recognize the need for lifelong learning and adapt to technological changes in mechanical engineering and allied fields.",
  ],
  pso: [
    "Analyze, design and develop machining systems to solve the engineering problems by integrating thermal, design and manufacturing domains of mechanical engineering",
    "Adopt a multidisciplinary approach to solve real-time industrial problems.",
  ],
  peo: [
    "Graduate will update themselves through lifelong learning such as higher studies, skill enhancement and other professional activities.",
    "Establish a successful career in mechanical engineering and related fields in industry and other organization where an engineering approach to problem solving is highly valued.",
    "Graduates will contribute to society through their devotion in science and technology leading to uplift their standard of living.",
    "Contribute significantly in a multidisciplinary work environment with ethical standards by understanding the role of mechanical engineering."
  ],
  hideSharedClubs: true,
  studentActivities: {
    clubs: [
      {
        name: "Mechanical Engineering Students Association (MESA)",
        category: "Student Club",
        description:
          "The Mechanical Engineering Students Association (MESA) serves as a platform for students to enhance their technical, leadership, and organizational skills through various academic and co-curricular activities. MESA regularly organizes technical talks, workshops, industrial visits, project exhibitions, competitions, and student development programs. These activities promote teamwork, innovation, professional networking, and holistic personality development among students.",
      },
    ],
    professionalChapters: [
      {
        name: "Standards Club (SC-4304)",
        category: "Professional Chapter",
        description:
          "The Standards Club (SC-4304), established in association with the Bureau of Indian Standards (BIS), Hubballi Branch, supports technical talks, workshops, awareness programs, and skill-development activities on emerging technologies, standards, quality practices, and career opportunities.",
      },
      {
        name: "Indian Society for Technical Education (ISTE)",
        category: "Professional Chapter",
        description:
          "The Indian Society for Technical Education supports professional development through technical talks, workshops, awareness programs, and skill-development activities that enhance technical knowledge, professional ethics, leadership qualities, and industry readiness.",
      },
    ],
  },
  facultyTable: [
    ["Dr. K S Pujari", "Ph.D. completed", "26 years"],
    ["B B Patil", "Pursuing Ph.D", "32 years"],
    ["Naveen S Hiremath", "Pursuing Ph.D", "11 years"],
    ["Dr. Shankar Badiger", "Ph.D. completed", "21 years"],
    ["Deepak V Lokare", "Pursuing Ph.D", "15 years"],
    ["Gururaj R Sattigeri", "Pursuing Ph.D", "35 years"],
    ["Dr. Anant G Joshi", "Ph.D. completed", "14 years"],
    ["Dr. Gururaj Hatti", "Ph.D. completed", "13 years"],
    ["Santosh Savanur", "Pursuing Ph.D", "13 years"],
    ["Rajat Acharya", "Pursuing Ph.D", "13 years"],
    ["Gurunath Mewundi", "Pursuing Ph.D", "21 years"],
    ["Ranganath N Patil", "Pursuing Ph.D", "35 years"],
    ["Gururaj H Joshi", "Pursuing Ph.D", "27 years"],
    ["Sudhir D Kulkarni", "Pursuing Ph.D", "38 years"],
  ],
  teachingStaff: [
    ["Dr. K S Pujari", "Professor & Head of Department"],
    ["B B Patil", "Assistant Professor"],
    ["Naveen S Hiremath", "Assistant Professor"],
    ["Dr. Shankar Badiger", "Associate Professor"],
    ["Deepak V Lokare", "Assistant Professor"],
    ["Gururaj R Sattigeri", "Assistant Professor"],
    ["Dr. Anant G Joshi", "Associate Professor"],
    ["Dr. Gururaj Hatti", "Associate Professor & Dean (Academics)"],
    ["Santosh Savanur", "Assistant Professor"],
    ["Rajat Acharya", "Assistant Professor"],
    ["Gurunath Mewundi", "Assistant Professor"],
    ["Ranganath N Patil", "Associate Professor"],
    ["Gururaj H Joshi", "Assistant Professor"],
    ["Sudhir D Kulkarni", "Assistant Professor"],
  ],
};

const Mechanical = () => <ProgrammeDetail programme={programme} />;

export default Mechanical;
