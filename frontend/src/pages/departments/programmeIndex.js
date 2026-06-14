import { programme as cse } from "./UG/CSE";
import { programme as cseAiml } from "./UG/CSEAIML";
import { programme as ece } from "./UG/ECE";
import { programme as eee } from "./UG/EEE";
import { programme as mechanical } from "./UG/Mechanical";
import { programme as civil } from "./UG/Civil";
import { programme as basicScience } from "./UG/BasicScience";
import { programme as industrialElectronics } from "./PG/IndustrialElectronics";
import { programme as thermalPowerEngineering } from "./PG/ThermalPowerEngineering";
import { programme as cseResearch } from "./ResearchCentres/CSEResearchCentre";
import { programme as eceResearch } from "./ResearchCentres/ECEResearchCentre";
import { programme as eeeResearch } from "./ResearchCentres/EEEResearchCentre";
import { programme as mechanicalResearch } from "./ResearchCentres/MechanicalResearchCentre";
import { programme as physicsResearch } from "./ResearchCentres/PhysicsResearchCentre";
import { programme as chemistryResearch } from "./ResearchCentres/ChemistryResearchCentre";
import { programme as mathematicsResearch } from "./ResearchCentres/MathematicsResearchCentre";

export const undergraduateProgrammes = [
  cse,
  cseAiml,
  ece,
  eee,
  mechanical,
  civil,
  basicScience,
];

export const postgraduateProgrammes = [
  industrialElectronics,
  thermalPowerEngineering,
];

export const researchCentres = [
  cseResearch,
  eceResearch,
  eeeResearch,
  mechanicalResearch,
  physicsResearch,
  chemistryResearch,
  mathematicsResearch,
];

export const allProgrammes = [
  ...undergraduateProgrammes,
  ...postgraduateProgrammes,
  ...researchCentres,
];

export const findProgramme = (id) => allProgrammes.find((programme) => programme.id === id);
