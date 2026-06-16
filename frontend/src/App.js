import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingApply from "./components/FloatingApply";
import SearchModal from "./components/SearchModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import Campus from "./pages/Campus";
import NewsEvents from "./pages/NewsEvents";

// Inner About sub-pages
import AboutVDIT from "./pages/AboutVDIT";
import AboutKLS from "./pages/AboutKLS";
import ChairmansMessage from "./pages/ChairmansMessage";
import PrincipalsMessage from "./pages/PrincipalsMessage";
import VisionMission from "./pages/VisionMission";
import OurHistory from "./pages/OurHistory";
import GoverningBodies from "./pages/GoverningBodies";
import People from "./pages/People";
import Committees from "./pages/Committees";
import Rules from "./pages/Rules";
import RTI from "./pages/RTI";
//import IQAC from "./pages/IQAC";
//import NIRF from "./pages/NIRF";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import FinancialStatements from "./pages/FinancialStatements";

// Other inner pages
import ProgrammeDetail from "./pages/ProgrammeDetail";
import CSE from "./pages/departments/UG/CSE";
import CSEAIML from "./pages/departments/UG/CSEAIML";
import ECE from "./pages/departments/UG/ECE";
import EEE from "./pages/departments/UG/EEE";
import Mechanical from "./pages/departments/UG/Mechanical";
import Civil from "./pages/departments/UG/Civil";
import BasicScience from "./pages/departments/UG/BasicScience";
import AIMLResources from "./pages/departments/UG/facultyData/StudentResources/AIMLResources";
import BSHResources from "./pages/departments/UG/facultyData/StudentResources/BSHResouces";
import CivilResources from "./pages/departments/UG/facultyData/StudentResources/CivilResources";
import CSEResources from "./pages/departments/UG/facultyData/StudentResources/CSEResources";
import ECEResources from "./pages/departments/UG/facultyData/StudentResources/ECEResources";
import EEEResources from "./pages/departments/UG/facultyData/StudentResources/EEEresources";
import MechanicalResources from "./pages/departments/UG/facultyData/StudentResources/MechanicalResources";
import IndustrialElectronics from "./pages/departments/PG/IndustrialElectronics";
import ThermalPowerEngineering from "./pages/departments/PG/ThermalPowerEngineering";
import CSEResearchCentre from "./pages/departments/ResearchCentres/CSEResearchCentre";
import ECEResearchCentre from "./pages/departments/ResearchCentres/ECEResearchCentre";
import EEEResearchCentre from "./pages/departments/ResearchCentres/EEEResearchCentre";
import MechanicalResearchCentre from "./pages/departments/ResearchCentres/MechanicalResearchCentre";
import PhysicsResearchCentre from "./pages/departments/ResearchCentres/PhysicsResearchCentre";
import ChemistryResearchCentre from "./pages/departments/ResearchCentres/ChemistryResearchCentre";
import MathematicsResearchCentre from "./pages/departments/ResearchCentres/MathematicsResearchCentre";
import Placements from "./pages/Placements";
import Library from "./pages/Library";
import Alumni from "./pages/Alumni";
import Students from "./pages/Students";
import FacultyProfile from "./pages/FacultyProfile";
import NewsDetail from "./pages/NewsDetail";
import EventDetail from "./pages/EventDetail";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import StudentClubs from "./pages/StudentClubs";
import Associations from "./pages/Associations";
import Clubs from "./pages/Clubs";
import KalpavrukshaKannadaSangha from "./pages/KalpavrukshaKannadaSangha";
import COEDetail from "./pages/COEDetail";
import Sustainability from "./pages/Sustainability";
import AwardsRecognition from "./pages/AwardsRecognition";
import AssociationDetail from "./pages/AssociationDetail";
import IeeeAboutUs from "./pages/IeeeAboutUs";
import IeeeEvents from "./pages/IeeeEvents";
import IeeeExecom from "./pages/IeeeExecom";
import CampusLifeDetail from "./pages/CampusLifeDetail";
import Hostels from "./pages/campus-life/Hostels";
import SportsGym from "./pages/campus-life/SportsGym";
import AICTE from "./pages/disclosure/AICTE";
import VTU from "./pages/disclosure/VTU";
import NAAC from "./pages/disclosure/NAAC";
import NIRF from "./pages/disclosure/NIRF";
import IQAC from "./pages/disclosure/IQAC";
import Governance from "./pages/disclosure/Governance";
import DELNET from "./pages/disclosure/DELNET";

const Forum = () => (
  <main className="max-w-5xl mx-auto px-6 lg:px-10 py-24 min-h-[60vh]">
    <h1
      className="text-4xl md:text-5xl text-brand font-semibold mb-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      VDIT Forum
    </h1>
    <p className="text-[#2a2a2a]/85 leading-relaxed">
      The VDIT Forum is a peer-reviewed publication featuring student and
      faculty perspectives on engineering, technology, and society. Issues are
      released bi-annually and are open access.
    </p>
  </main>
);

function App() {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
        <ScrollToTop />
        <AnnouncementBar onSearchOpen={() => setSearchOpen(true)} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About + sub */}
          <Route path="/about" element={<Navigate to="/about/about-kls" replace />} />
          <Route path="/about/about-kls" element={<AboutKLS />} />
          <Route path="/about/about-vdit" element={<AboutVDIT />} />
          <Route path="/about/chairmans-message" element={<ChairmansMessage />} />
          <Route path="/about/principals-message" element={<PrincipalsMessage />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/our-history" element={<OurHistory />} />
          <Route path="/about/governing-bodies" element={<GoverningBodies />} />
          <Route path="/about/people" element={<People />} />
          <Route path="/about/committees" element={<Committees />} />
          <Route path="/about/rules" element={<Rules />} />
          <Route path="/about/rti" element={<RTI />} />
          <Route path="/about/iqac" element={<IQAC />} />
          <Route path="/about/nirf" element={<NIRF />} />
          <Route path="/about/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/about/financial-statements" element={<FinancialStatements />} />
          {/* Legacy About page */}
          <Route path="/about-legacy" element={<About />} />
          {/* Academics + departments */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/programme/cse" element={<CSE />} />
          <Route path="/programme/cse-aiml" element={<CSEAIML />} />
          <Route path="/programme/ece" element={<ECE />} />
          <Route path="/programme/eee" element={<EEE />} />
          <Route path="/programme/me" element={<Mechanical />} />
          <Route path="/programme/civil" element={<Civil />} />
          <Route path="/programme/bsh" element={<BasicScience />} />
          <Route path="/programme/cse/student-resources" element={<CSEResources />} />
          <Route path="/programme/cse-aiml/student-resources" element={<AIMLResources />} />
          <Route path="/programme/ece/student-resources" element={<ECEResources />} />
          <Route path="/programme/eee/student-resources" element={<EEEResources />} />
          <Route path="/programme/me/student-resources" element={<MechanicalResources />} />
          <Route path="/programme/civil/student-resources" element={<CivilResources />} />
          <Route path="/programme/bsh/student-resources" element={<BSHResources />} />
          <Route path="/programme/industrial-electronics" element={<IndustrialElectronics />} />
          <Route path="/programme/thermal-power-engineering" element={<ThermalPowerEngineering />} />
          <Route path="/programme/cse-research" element={<CSEResearchCentre />} />
          <Route path="/programme/ece-research" element={<ECEResearchCentre />} />
          <Route path="/programme/eee-research" element={<EEEResearchCentre />} />
          <Route path="/programme/me-research" element={<MechanicalResearchCentre />} />
          <Route path="/programme/physics" element={<PhysicsResearchCentre />} />
          <Route path="/programme/chemistry" element={<ChemistryResearchCentre />} />
          <Route path="/programme/mathematics" element={<MathematicsResearchCentre />} />
          <Route path="/programme/:id" element={<ProgrammeDetail />} />
          {/* Other top-level */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/campus-life/Hostels" element={<Hostels />} />
          <Route path="/campus-life/:slug/:section" element={<CampusLifeDetail />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/library" element={<Library />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/students" element={<Students />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/associations/ieee/about-us" element={<IeeeAboutUs />} />
          <Route path="/associations/ieee/events" element={<IeeeEvents />} />
          <Route path="/associations/ieee/execom" element={<IeeeExecom />} />
          <Route path="/associations/:id" element={<AssociationDetail />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/kalpavruksha" element={<KalpavrukshaKannadaSangha />} />
          <Route path="/coe/:id" element={<COEDetail />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/awards-recognition" element={<AwardsRecognition />} />
          <Route path="/faculty/:id" element={<FacultyProfile />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/announcements" element={<Announcements />} />

          <Route path="/announcement/:id" element={<AnnouncementDetail />} />
          <Route path="/student-clubs" element={<StudentClubs />} />
          {/* Disclosure */}
          <Route path="/aicte" element={<AICTE />} />
          <Route path="/vtu" element={<VTU />} />
          <Route path="/naac" element={<NAAC />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/delnet" element={<DELNET />} />
          {/* Life */}
          <Route path="/campus-life/sports-gym" element={<SportsGym />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingApply />
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
