import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "./About";
import { ArrowRight } from "lucide-react";

const centres = [
  {
    title: "Cyber Security Innovation Lab",
    to: "/coe/cyber-security-innovation-lab",
    department: "CSE / CSE (AI & ML)",
    body: "Research, innovation, skill development and industry collaboration in cyber security.",
  },
  {
    title: "Toyota Centre of Excellence",
    to: "/coe/toyota-centre-of-excellence",
    department: "Mechanical Engineering",
    body: "Hands-on automotive engineering and manufacturing systems training in collaboration with Toyota.",
  },
  {
    title: "NVIDIA Jetson Orin Nano Innovation Learning Centre",
    to: "/coe/nvidia-jetson-innovation-learning-centre",
    department: "Electronics and Communication Engineering",
    body: "AI, robotics, computer vision, edge computing and IoT learning using NVIDIA Jetson technologies.",
  },
  {
    title: "Microchip Embedded Systems",
    to: "/coe/microchip-embedded-systems",
    department: "Electrical and Electronics Engineering",
    body: "Embedded systems, microcontroller technologies and semiconductor-focused skill development.",
  },
  {
    title: "Royal Enfield Training Centre",
    to: "/coe/royal-enfield-training-centre",
    department: "Mechanical Engineering",
    body: "Automotive service, motorcycle technology and industry-oriented training with Royal Enfield.",
  },
  {
    title: "LEAP",
    to: "/coe/leap",
    department: "Content to be updated",
    body: "Content to be updated.",
  },
];

const CentreOfExcellence = () => (
  <main>
    <PageHero
      title="Centre of Excellence"
      sub="Industry-linked learning spaces and training platforms"
      image="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=2400"
    />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="grid md:grid-cols-2 gap-6">
        {centres.map((centre) => (
          <Link
            key={centre.to}
            to={centre.to}
            className="bg-white border border-brand/15 p-6 card-hover block"
          >
            <span className="text-xs tracking-[0.18em] text-brand font-sans-ui font-semibold uppercase">
              {centre.department}
            </span>
            <h2
              className="text-2xl text-brand font-semibold mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {centre.title}
            </h2>
            <p className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-3">
              {centre.body}
            </p>
            <span className="inline-flex items-center gap-1 text-brand hover:underline mt-5 text-sm font-sans-ui">
              View Centre <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default CentreOfExcellence;
