import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "physics",
  name: "Physics Research Centre",
  short: "Physics Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Physics Research Centre supports research in materials science, spectroscopy, nanomaterials, condensed matter physics, and allied interdisciplinary areas.",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=80",
  hodId: "f-mallikarjun-k-patil",
  facultyDeptId: "bsh",
  labs: ["Physics Lab", "Materials Characterisation Lab", "Spectroscopy Facilities", "Research Workspaces"],
  research: "Materials Science · Spectroscopy · Nanomaterials · Condensed Matter Physics",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research publications in physics and materials", "Conference and paper presentation activity", "Doctoral research guidance"],
  projects: [{ title: "Nanomaterials and Spectroscopy Studies", funding: "To be updated", amount: "To be updated" }],
};

const PhysicsResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default PhysicsResearchCentre;
