import React from "react";
import { Bus, MapPin, ShieldCheck } from "lucide-react";
import { CampusLifeShell, InfoList, PageSection } from "./CampusLifePageParts";

const Transportation = () => (
  <CampusLifeShell
    title="Transportation"
    short="Transport"
    image="https://images.pexels.com/photos/5805182/pexels-photo-5805182.jpeg?w=2400"
    navItems={[
      ["#overview", "Overview"],
      ["#coverage", "Bus Routes and Coverage"],
      ["#commute", "Student Commute Support"],
      ["#safety", "Safety and Convenience"],
    ]}
    quickFacts={[
      ["Category", "Campus Life"],
      ["Facility", "Transportation"],
      ["Routes", "To be updated"],
      ["Contact", "To be updated"],
    ]}
  >
    <PageSection id="overview" title="Transportation" icon={Bus}>
      <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
        Campus Life
      </span>
      <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
        The college transport facility supports day scholars with convenient
        connectivity between the campus, Haliyal, Dandeli and surrounding areas.
      </p>
    </PageSection>

    <PageSection id="coverage" title="Bus Routes and Coverage" icon={MapPin}>
      <InfoList
        items={[
          "College buses connect the campus with Haliyal, Dandeli and nearby areas.",
          "Detailed bus routes and stop-wise schedules will be updated.",
        ]}
      />
    </PageSection>

    <PageSection id="commute" title="Student Commute Support" icon={Bus}>
      <InfoList
        items={[
          "The facility helps students commute comfortably and reliably.",
          "Transport support is planned around regular academic schedules.",
        ]}
      />
    </PageSection>

    <PageSection id="safety" title="Safety and Convenience" icon={ShieldCheck}>
      <InfoList
        items={[
          "Transport operations prioritize student convenience and timely commute.",
          "Transport contact details will be updated with official information.",
        ]}
      />
    </PageSection>
  </CampusLifeShell>
);

export default Transportation;
