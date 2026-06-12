import React from "react";
import MenuInfoPage from "./MenuInfoPage";

const sections = [
  ["ieee", "IEEE", "Professional Body", "Student and faculty engagement with engineering communities, technical talks, workshops, and project showcases."],
  ["csi", "CSI", "Professional Body", "Computer Society of India activities supporting coding culture, industry interaction, and technology awareness."],
  ["acm", "ACM", "Professional Body", "Association for Computing Machinery initiatives for programming, research exposure, and peer learning."],
  ["iste", "ISTE", "Professional Body", "Indian Society for Technical Education programmes focused on teaching, learning, and professional development."],
  ["iei", "IEI", "Professional Body", "Institution of Engineers activities connecting students with professional engineering practice."],
  ["bites", "BITES", "Professional Body", "Board for IT Education Standards programmes linking academic learning with industry expectations."],
  ["iic", "IIC", "Innovation Hub", "Institution Innovation Council initiatives for entrepreneurship, innovation, prototyping, and startup awareness."],
].map(([id, title, kicker, body]) => ({ id, title, kicker, body }));

const Associations = () => (
  <MenuInfoPage
    title="Association / Innovation Hub"
    sub="Professional bodies and innovation platforms at KLS VDIT"
    image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400"
    sections={sections}
  />
);

export default Associations;
