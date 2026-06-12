import React from "react";
import MenuInfoPage from "./MenuInfoPage";

const sections = [
  ["solar", "Solar Rooftop", "Sustainability", "Campus solar initiatives supporting clean energy adoption and responsible resource use."],
].map(([id, title, kicker, body]) => ({ id, title, kicker, body }));

const Sustainability = () => (
  <MenuInfoPage
    title="Sustainability"
    sub="Responsible campus practices at KLS VDIT"
    image="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?w=2400"
    sections={sections}
  />
);

export default Sustainability;
