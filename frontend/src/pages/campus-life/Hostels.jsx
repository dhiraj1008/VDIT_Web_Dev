import React from "react";
import { Building2, ShieldCheck, Utensils } from "lucide-react";
import { CampusLifeShell, InfoList, PageSection } from "./CampusLifePageParts";

const Hostels = () => (
  <CampusLifeShell
    title="Hostels"
    short="Hostels"
    image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
    navItems={[
      ["#overview", "Overview"],
      ["#facilities", "Facilities and Amenities"],
      ["#safety", "Student Safety and Discipline"],
      ["#dining", "Dining and Accommodation"],
    ]}
    quickFacts={[
      ["Category", "Campus Life"],
      ["Facility", "Hostels"],
      ["Availability", "To be updated"],
      ["Contact", "To be updated"],
    ]}
  >
    <PageSection id="overview" title="Hostels" icon={Building2}>
      <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
        Campus Life
      </span>
      <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
        KLS VDIT provides hostel facilities that support a safe, disciplined and
        comfortable residential environment for students. The facilities are
        intended to help students focus on academics while participating fully
        in campus life.
      </p>
    </PageSection>

    <PageSection id="facilities" title="Facilities and Amenities" icon={Building2}>
      <InfoList
        items={[
          "Separate boys' and girls' hostel facilities.",
          "Well-furnished rooms and essential residential amenities.",
          "Campus environment that supports academic focus and student development.",
        ]}
      />
    </PageSection>

    <PageSection id="safety" title="Student Safety and Discipline" icon={ShieldCheck}>
      <InfoList
        items={[
          "Hostel administration supports discipline, safety and student welfare.",
          "Wardens and support staff help maintain a responsible residential atmosphere.",
        ]}
      />
    </PageSection>

    <PageSection id="dining" title="Dining and Accommodation" icon={Utensils}>
      <InfoList
        items={[
          "Mess and dining information will be updated with official details.",
          "Accommodation capacity and admission details will be updated.",
        ]}
      />
    </PageSection>
  </CampusLifeShell>
);

export default Hostels;
