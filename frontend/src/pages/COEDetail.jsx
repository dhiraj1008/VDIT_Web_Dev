import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import {
  Award,
  Beaker,
  Calendar,
  CheckCircle2,
  Mail,
  Microscope,
  Sparkles,
  Users,
} from "lucide-react";

const centres = [
  {
    id: "cyber-security-innovation-lab",
    name: "Cyber Security Innovation Lab",
    short: "Cyber Security Lab",
    established: "2026 (Ongoing Establishment Phase)",
    department: "Department of Computer Science & Engineering / CSE (AI & ML)",
    partner: "Proposed cyber security companies, IT service providers, security consulting organizations and government cyber security agencies",
    coordinator: "To be appointed by the Department",
    email: "info@klsvdit.edu.in",
    capacity: "Approximately 30-40 students per session",
    image: "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?w=2400",
    overview: "The Cyber Security Innovation Lab is being established as a specialized Centre of Excellence to promote research, innovation, skill development, and industry collaboration in cyber security. It aims to provide students and faculty with hands-on exposure to cyber defense technologies, ethical hacking, digital forensics, secure software development and cyber threat intelligence.",
    mission: [
      "Provide advanced cybersecurity training and research opportunities.",
      "Bridge academic learning with industry cybersecurity practices.",
      "Encourage innovation in cyber defense, threat detection and secure computing.",
      "Build awareness of cyber safety and ethical hacking among students and society.",
    ],
    objectives: [
      "Establish modern cybersecurity research and training infrastructure.",
      "Conduct workshops, FDPs, seminars and certification programs.",
      "Support hackathons, CTFs and cybersecurity competitions.",
      "Promote research publications, patents and funded projects.",
    ],
    facilities: [
      "High-performance workstations, dedicated servers and networking equipment.",
      "Firewalls, routers, virtualization systems and security testing devices.",
      "Kali Linux, Wireshark, Metasploit, Burp Suite, Nessus, Nmap and SIEM tools.",
      "Cyber range simulation tools, Python security libraries and IoT security kits.",
    ],
    team: [
      "Faculty members from Computer Science & Engineering and AI & ML.",
      "Technical assistants and lab support staff during implementation.",
      "Industry experts, cybersecurity professionals and research collaborators as mentors.",
    ],
    programs: [
      "Cyber security workshops and ethical hacking training programs.",
      "Certification courses including CEH, CompTIA Security+, network security and cloud security.",
      "Faculty development programs, student bootcamps and internship training programs.",
      "Cyber awareness campaigns, national hackathons and CTF events.",
    ],
    impact: [
      "Hands-on cyber security experience and exposure to industry tools.",
      "Internship opportunities, placement assistance and certification support.",
      "Student projects in threat detection, ransomware detection, secure web applications, AI-based intrusion detection and IoT security.",
    ],
  },
  {
    id: "toyota-centre-of-excellence",
    name: "Toyota Centre of Excellence",
    short: "Toyota CoE",
    established: "2022",
    department: "Department of Mechanical Engineering, KLS VDIT, Haliyal",
    partner: "Toyota Kirloskar Motors",
    coordinator: "Prof. Rajat Acharya",
    email: "rra@klsvdit.edu.in",
    capacity: "10 members batch for each component",
    image: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?w=2400",
    overview: "The Toyota Centre of Excellence has been established at KLS VDIT in collaboration with Toyota to provide industry-oriented practical training in automotive engineering and modern manufacturing systems. It bridges classroom learning and industrial practice through hands-on exposure to automotive components, production methodologies and quality management principles.",
    mission: [
      "Impart practical knowledge of automotive systems and manufacturing technologies.",
      "Familiarize students with globally recognized industrial practices such as the Toyota Production System.",
      "Inspire innovation, technical excellence and continuous improvement among students.",
    ],
    objectives: [
      "Provide hands-on learning experiences in automotive engineering.",
      "Enhance understanding of engine and transmission systems.",
      "Introduce lean manufacturing and quality management principles.",
      "Promote industry-academia collaboration and career awareness in the automotive sector.",
    ],
    facilities: [
      "BS-IV working cut-section engine and transmission model.",
      "Complete BS-IV engine assembly and complete transmission unit.",
      "Working transmission cut-section unit.",
      "Educational displays on Toyota Production System.",
    ],
    team: [
      "Coordinator: Prof. Rajat Acharya.",
      "Industry collaboration with Toyota Kirloskar Motors.",
    ],
    programs: [
      "Hands-on training on engine working principles and transmission systems.",
      "Learning modules on Toyota Production System, JIT manufacturing and Kaizen.",
      "Practical exposure to real automotive components and manufacturing practices.",
    ],
    impact: [
      "More than 1,000 students have benefited since establishment.",
      "The facility also supports nearby schools, ITIs, diploma students, local youth and aspiring engineers.",
      "Improves practical engineering knowledge and strengthens industry-academia collaboration.",
    ],
  },
  {
    id: "nvidia-jetson-innovation-learning-centre",
    name: "NVIDIA Jetson Orin Nano Innovation Learning Centre",
    short: "NVIDIA Jetson Centre",
    established: "2026",
    department: "Department of Electronics and Communication Engineering",
    partner: "Docketrun Tech Pvt. Ltd.",
    coordinator: "Prof. Raghavendra Nagaralli",
    email: "rpn@klsvdit.edu.in",
    capacity: "25 students",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=2400",
    overview: "The NVIDIA Jetson Orin Nano Innovation Learning Centre provides students, faculty and researchers with a platform for learning, innovation and research in AI, machine learning, robotics, computer vision, edge computing, autonomous systems and IoT.",
    mission: [
      "Empower students with industry-relevant AI and embedded computing skills.",
      "Promote innovation and interdisciplinary research.",
      "Develop real-world AI applications for societal and industrial challenges.",
    ],
    objectives: [
      "Provide practical exposure to AI and edge computing.",
      "Encourage student research and product development.",
      "Organize training programs and workshops.",
      "Facilitate industry-academia collaboration.",
    ],
    facilities: [
      "NVIDIA Jetson Orin Nano Super Developer Kits.",
      "Sensors, IoT modules, high-speed internet, display systems and projectors.",
      "NVIDIA JetPack SDK, CUDA Toolkit, TensorRT, DeepStream SDK and NVIDIA Isaac ROS.",
      "OpenCV, PyTorch, TensorFlow, Docker, Ubuntu Linux and ROS/ROS2.",
    ],
    team: [
      "Coordinator: Prof. Raghavendra Nagaralli.",
      "Faculty member: Prof. Vijaylaxmi Kalal.",
      "Technical staff: Mr. Manjunath Movalekar.",
      "External mentors from Docketrun Tech Pvt. Ltd. and industry professionals.",
    ],
    programs: [
      "AI and deep learning fundamentals workshops.",
      "Computer vision using OpenCV.",
      "AI & Robotics Bootcamp and Generative AI Bootcamp.",
      "Add-on courses and project guidance using NVIDIA Jetson technologies.",
    ],
    impact: [
      "100+ students will be trained every year on advanced AI hardware and software.",
      "Industry expert interaction and skill development aligned with current requirements.",
      "Participation in research projects, publications and innovation challenges.",
    ],
  },
  {
    id: "microchip-embedded-systems",
    name: "Microchip Embedded Systems",
    short: "Microchip Centre",
    established: "2025",
    department: "Electrical and Electronics Engineering",
    partner: "Microchip Technology India Pvt. Ltd.",
    coordinator: "Prof. Subrahmanya Hegde",
    email: "smh@klsvdit.edu.in",
    capacity: "25",
    image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?w=2400",
    overview: "The Microchip Embedded Systems Centre of Excellence helps bridge academic learning and industry requirements by enhancing technical skills, innovation and research capabilities in embedded systems and semiconductor technology.",
    mission: [
      "Provide skill-based training and hands-on learning in embedded systems and microcontroller technologies.",
      "Strengthen industry-academia interaction through workshops, internships, expert lectures and industrial visits.",
      "Promote collaborative research, innovation and faculty development programs in emerging technologies.",
    ],
    objectives: [
      "Build practical exposure in embedded systems and semiconductor technologies.",
      "Support innovation, research and industry-oriented skill development.",
      "Promote academic collaboration and integrated problem-solving.",
    ],
    facilities: [
      "DM164136, DM240001-3, MA330035, DM320204, EV80P12A, EV14C17A and DM320209 programming kits.",
      "PIC18F47Q10-I/P integrated circuit and Microchip PIC18F47Q10 MCU.",
      "MPLAB X IDE, XC8 Compiler, MPLAB IPE and MPLAB Code Configurator.",
      "Power System simulation lab support.",
    ],
    team: [
      "Coordinator: Prof. Subrahmanya Hegde.",
      "Technical staff: Rameshwar Naik.",
      "External mentor: Prabupaada Samal.",
    ],
    programs: [
      "Five-day FDP conducted from 5 to 10 May 2025.",
      "Embedded systems design, microcontroller-based system design and embedded C programming.",
      "IoT product development, rapid prototyping, circuit design and industrial embedded solutions.",
    ],
    impact: [
      "MoU signed on 05 December 2024 with Microchip Technology India Pvt. Ltd.",
      "Supports student projects, funded projects, publications, patents and prototypes.",
      "Builds industry-ready skills in embedded hardware, firmware and smart monitoring systems.",
    ],
  },
  {
    id: "royal-enfield-training-centre",
    name: "Royal Enfield Training Centre",
    short: "RETC",
    established: "2026",
    department: "Mechanical Engineering",
    partner: "Royal Enfield",
    coordinator: "Prof. Rajat Acharya",
    email: "rra@klsvdit.edu.in",
    capacity: "30",
    image: "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg?w=2400",
    overview: "The Royal Enfield Training Centre at KLS VDIT, Haliyal establishes a sustainable industry-academia platform through continuous monthly engagement with Royal Enfield and supports hands-on automotive training for students and professionals.",
    mission: [
      "Foster a sustainable partnership with Royal Enfield through regular industry engagement and collaborative training.",
      "Provide industry-relevant experiential learning that enhances employability.",
      "Integrate contemporary automotive technologies, tools and practices into technical education.",
      "Position KLS VDIT as a regional technical training hub for North Karnataka and Goa.",
    ],
    objectives: [
      "Provide structured hands-on technical training aligned with industry practices.",
      "Expose students to live tools, systems and processes used in the automotive industry.",
      "Support recurring monthly engagement with Royal Enfield.",
      "Promote certification, industry interaction and continuous learning.",
    ],
    facilities: [
      "Dedicated training facility equipped according to Royal Enfield service station standards.",
      "10 Royal Enfield motorcycles and 10 engines for hands-on learning.",
      "Practical demonstrations and group-based technical training facilities.",
    ],
    team: [
      "Coordinator: Prof. Rajat Acharya.",
      "Faculty member: Prof. Rajat Acharya.",
      "External mentor: Mr. Kartik.",
    ],
    programs: [
      "Recurring monthly model with 3 weeks for Royal Enfield employees and 1 week for KLS VDIT students.",
      "Workshops ranging from 3 days to 15 days.",
      "Certification-focused automotive service and motorcycle technology training.",
    ],
    impact: [
      "Hands-on learning in motorcycle technology and service engineering.",
      "Industry exposure and internship support.",
      "Regional skill development for students, faculty and industry personnel.",
    ],
  },
  {
    id: "leap",
    name: "LEAP",
    short: "LEAP",
    established: "Content to be updated",
    department: "Content to be updated",
    partner: "Content to be updated",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    capacity: "Content to be updated",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=2400",
    overview: "Content to be updated.",
    mission: ["Content to be updated."],
    objectives: ["Content to be updated."],
    facilities: ["Content to be updated."],
    team: ["Content to be updated."],
    programs: ["Content to be updated."],
    impact: ["Content to be updated."],
  },
];

const Section = ({ id, title, icon: Icon, children, sub }) => (
  <section id={id} className="scroll-mt-32">
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <h3
          className="text-2xl md:text-3xl text-brand font-semibold flex items-center gap-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {Icon && <Icon size={22} />} {title}
        </h3>
        {sub && <p className="text-sm text-[#3a3a3a]/80 italic mt-1">{sub}</p>}
      </div>
    </div>
    {children}
  </section>
);

const COEDetail = () => {
  const { id } = useParams();
  const centre = centres.find((item) => item.id === id);

  if (!centre) {
    return <Navigate to="/centre-of-excellence" replace />;
  }

  const quickFacts = [
    ["Established", centre.established],
    ["Department", centre.department],
    ["Partner", centre.partner],
    ["Coordinator", centre.coordinator],
    ["Email", centre.email],
    ["Seating Capacity", centre.capacity],
  ];

  return (
    <main>
      <InnerHero
        title={centre.name}
        image={centre.image}
        breadcrumbs={[
          { label: "Academics", to: "/academics" },
          { label: "COE", to: "/centre-of-excellence" },
          { label: centre.short },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          {[
            ["overview", "Overview"],
            ["objectives", "Vision & Objectives"],
            ["facilities", "Facilities"],
            ["team", "Team"],
            ["programs", "Programs"],
            ["impact", "Impact"],
          ].map(([h, l]) => (
            <a key={h} href={`#${h}`} className="uppercase hover:underline">
              {l}
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Section id="overview" title={centre.name}>
              <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
                {centre.department}
              </span>
              <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
                {centre.overview}
              </p>
            </Section>

            <Section id="objectives" title="Vision, Mission & Objectives" icon={CheckCircle2}>
              <div className="grid md:grid-cols-2 gap-4">
                <ListCard title="Mission" items={centre.mission} />
                <ListCard title="Key Objectives" items={centre.objectives} />
              </div>
            </Section>

            <Section id="facilities" title="Infrastructure & Facilities" icon={Microscope}>
              <ul className="space-y-2">
                {centre.facilities.map((item) => (
                  <InfoItem key={item} icon={Beaker} text={item} />
                ))}
              </ul>
            </Section>

            <Section id="team" title="Faculty & Team" icon={Users}>
              <ul className="space-y-2">
                {centre.team.map((item) => (
                  <InfoItem key={item} icon={Users} text={item} />
                ))}
              </ul>
            </Section>

            <Section id="programs" title="Training & Programs" icon={Calendar}>
              <ul className="space-y-2">
                {centre.programs.map((item) => (
                  <InfoItem key={item} icon={Calendar} text={item} />
                ))}
              </ul>
            </Section>

            <Section id="impact" title="Outcomes & Impact" icon={Sparkles}>
              <ul className="space-y-2">
                {centre.impact.map((item) => (
                  <InfoItem key={item} icon={Award} text={item} />
                ))}
              </ul>
            </Section>
          </div>

          <aside className="space-y-5">
            <div className="bg-white border border-brand/15 p-5 lg:sticky lg:top-36 self-start">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                Quick Facts
              </h4>
              <div className="mt-3 space-y-3 text-sm">
                {quickFacts.map(([label, value]) => (
                  <div key={label} className="flex items-start gap-2">
                    {label === "Email" ? (
                      <Mail size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    ) : (
                      <Calendar size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    )}
                    <span>
                      {label}: <strong>{value}</strong>
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/centre-of-excellence"
                className="block mt-5 text-center bg-brand text-surface py-2.5 text-sm font-semibold font-sans-ui hover:bg-brand-dark transition"
              >
                View All Centres
              </Link>

              <div className="mt-6 pt-5 border-t border-brand/10">
                <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                  Other Centres
                </h4>
                <ul className="space-y-1.5">
                  {centres
                    .filter((item) => item.id !== centre.id)
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/coe/${item.id}`}
                          className="text-sm text-[#2a2a2a] hover:text-brand flex items-start gap-1 leading-snug"
                        >
                          <Beaker size={12} className="text-brand flex-shrink-0 mt-0.5" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const ListCard = ({ title, items }) => (
  <div className="bg-white p-5 border border-brand/15">
    <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
      {title}
    </p>
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm text-[#2a2a2a]/85 leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const InfoItem = ({ icon: Icon, text }) => (
  <li className="flex items-start gap-3 bg-white p-4 border border-brand/15">
    <Icon size={18} className="text-brand flex-shrink-0 mt-0.5" />
    <span className="text-[15px] text-[#2a2a2a]">{text}</span>
  </li>
);

export default COEDetail;
