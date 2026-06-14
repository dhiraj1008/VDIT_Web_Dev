import React from "react";
import ProgrammeDetail from "../../ProgrammeDetail";

export const programme = {
  id: "chemistry",
  name: "Chemistry Research Centre",
  short: "Chemistry Research",
  programmeType: "research",
  programmeLabel: "Research Centre",
  duration: "Doctoral research as per VTU norms",
  intake: null,
  established: 2004,
  description: "The Chemistry Research Centre supports research in organic chemistry, coordination chemistry, catalysis, nanomaterials, and sustainable chemical sciences.",
  image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=1000&q=80",
  hodId: "f-g-s-kurdekar",
  facultyDeptId: "bsh",
  labs: ["Chemistry Lab", "Organic Synthesis Facilities", "Catalysis Workspaces", "Research Workspaces"],
  research: "Organic Chemistry · Coordination Chemistry · Catalysis · Nanomaterials",
  accreditation: ["VTU Recognised Research Centre", "Research scholar details to be updated", "Supervisor details to be updated"],
  achievements: ["Research publications in chemistry", "Interdisciplinary research activity", "Doctoral research guidance"],
  projects: [{ title: "Coordination Chemistry and Catalysis Studies", funding: "To be updated", amount: "To be updated" }],
};

const ChemistryResearchCentre = () => <ProgrammeDetail programme={programme} />;

export default ChemistryResearchCentre;
