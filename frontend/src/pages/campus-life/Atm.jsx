import React from "react";
import { CreditCard, MapPin } from "lucide-react";
import { CampusLifeShell, InfoList, PageSection } from "./CampusLifePageParts";

const Atm = () => (
  <CampusLifeShell
    title="ATM"
    short="ATM"
    image="https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?w=2400"
    navItems={[
      ["#overview", "Overview"],
      ["#banking", "Banking Convenience"],
      ["#location", "Location and Accessibility"],
    ]}
    quickFacts={[
      ["Category", "Campus Life"],
      ["Facility", "ATM"],
      ["Location", "To be updated"],
      ["Availability", "To be updated"],
    ]}
  >
    <PageSection id="overview" title="ATM" icon={CreditCard}>
      <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
        Campus Life
      </span>
      <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
        The on-campus ATM facility provides convenient banking access for
        students, parents, staff and visitors.
      </p>
    </PageSection>

    <PageSection id="banking" title="Banking Convenience" icon={CreditCard}>
      <InfoList
        items={[
          "ATM access supports cash withdrawal and basic banking convenience on campus.",
          "The facility helps reduce the need for students to travel outside campus for routine cash needs.",
        ]}
      />
    </PageSection>

    <PageSection id="location" title="Location and Accessibility" icon={MapPin}>
      <InfoList
        items={[
          "Exact campus location details will be updated.",
          "Accessibility and operating details will be updated with official information.",
        ]}
      />
    </PageSection>
  </CampusLifeShell>
);

export default Atm;
