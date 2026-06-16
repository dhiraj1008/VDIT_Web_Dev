import React from "react";
import MenuInfoPage from "./MenuInfoPage";

const sections = [
  ["red-ribbon", "Red Ribbon Club", "Outreach", "Awareness programmes and student-led initiatives around health, responsibility, and community wellbeing."],
  ["red-cross", "RedCross Society", "Service", "Volunteer service, first-aid awareness, and social responsibility activities for students."],
  ["eco", "Eco Club", "Sustainability", "Campus green practices, environmental awareness drives, and student participation in conservation work."],
  ["kalpavruksha", "Kalpavruksha Kannada Sangha", "Culture", "Kannada language, literature, and cultural activities that celebrate local identity and expression.", "/clubs/kalpavruksha"],
  ["nss", "NSS", "Service", "National Service Scheme activities including outreach, awareness campaigns, and village engagement programmes."],
  ["standards", "Standards Club", "Technical", "Student exposure to quality standards, engineering practices, and responsible product thinking."],
].map(([id, title, kicker, body, to]) => ({ id, title, kicker, body, to }));

const Clubs = () => (
  <MenuInfoPage
    title="Clubs"
    sub="Student communities for service, culture, sustainability, and technical growth"
    image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=2400&q=80"
    sections={sections}
  />
);

export default Clubs;
