import React from "react";
import MenuInfoPage from "./MenuInfoPage";

const sections = [
  ["awards", "Awards & Recognition", "Institution", "Achievements and recognitions earned by the institute, faculty, and students across academics, research, innovation, and service."],
].map(([id, title, kicker, body]) => ({ id, title, kicker, body }));

const AwardsRecognition = () => (
  <MenuInfoPage
    title="Awards & Recognition"
    sub="Celebrating institutional, faculty, and student achievements"
    image="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=2400&q=80"
    sections={sections}
  />
);

export default AwardsRecognition;
