import React from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { campusLifeItems, findCampusLifeItem } from "../data/campusLifeData";
import SportsAchievement from "./campus-life/SportsAchievement";
import SportsFaculty from "./campus-life/SportsFaculty";
import SportsOverview from "./campus-life/SportsOverview";
import {
  Award,
  Beaker,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-32">
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <h3
          className="text-2xl md:text-3xl text-brand font-semibold flex items-center gap-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {Icon && <Icon size={22} />} {title}
        </h3>
      </div>
    </div>
    {children}
  </section>
);

const CampusLifeDetail = () => {
  const { slug, section } = useParams();
  const item = findCampusLifeItem(slug);

  if (!item) {
    return <Navigate to="/campus-life/hostels" replace />;
  }

  const isSportsPage = item.slug === "sports-gym";
  const activeSportsSection = section || "overview";

  if (isSportsPage && !section) {
    return <Navigate to="/campus-life/sports-gym/overview" replace />;
  }

  if (
    isSportsPage &&
    !["overview", "sports-faculty", "sports-achievement"].includes(activeSportsSection)
  ) {
    return <Navigate to="/campus-life/sports-gym/overview" replace />;
  }

  const navItems = isSportsPage
    ? [
        ["overview", "Overview"],
        ["sports-faculty", "Sports Faculty"],
        ["sports-achievement", "Sports Achievement"],
      ]
    : [["overview", "Overview"], ...item.sections.map((entry) => [entry.id, entry.title])];

  return (
    <main>
      <InnerHero
        title={item.title}
        image={item.image}
        breadcrumbs={[
          { label: "Life" },
          { label: "Campus Life" },
          { label: item.short },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          {navItems.map(([h, l]) => (
            isSportsPage ? (
              <NavLink
                key={h}
                to={`/campus-life/sports-gym/${h}`}
                className={({ isActive }) =>
                  `uppercase hover:underline ${isActive ? "underline" : ""}`
                }
              >
                {l}
              </NavLink>
            ) : (
              <a key={h} href={`#${h}`} className="uppercase hover:underline">
                {l}
              </a>
            )
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {isSportsPage ? (
              <SportsSectionPage item={item} sectionId={activeSportsSection} />
            ) : (
              <>
                <Section id="overview" title={item.title}>
                  <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
                    {item.subtitle || "Campus Life"}
                  </span>
                  <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
                    {item.overview}
                  </p>
                  {item.intro && (
                    <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3 bg-white border border-brand/15 p-4">
                      {item.intro}
                    </p>
                  )}
                  {item.overviewItems && (
                    <ul className="space-y-2 mt-5">
                      {item.overviewItems.map((text) => (
                        <InfoItem key={text} text={text} />
                      ))}
                    </ul>
                  )}
                </Section>

                {item.sections.map((entry) => (
                  <Section
                    key={entry.id}
                    id={entry.id}
                    title={entry.title}
                    icon={sectionIcon(entry)}
                  >
                    <SectionContent section={entry} />
                  </Section>
                ))}
              </>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-white border border-brand/15 p-5 lg:sticky lg:top-36 self-start">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                Quick Facts
              </h4>
              <div className="mt-3 space-y-3 text-sm">
                {item.quickFacts.map(([label, value]) => (
                  <div key={label} className="flex items-start gap-2">
                    <Calendar size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    <span>
                      {label}: <strong>{value}</strong>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-brand/10">
                <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                  Other Campus Life
                </h4>
                <ul className="space-y-1.5">
                  {campusLifeItems
                    .filter((link) => link.slug !== item.slug)
                    .map((link) => (
                      <li key={link.slug}>
                        <Link
                          to={`/campus-life/${link.slug}`}
                          className="text-sm text-[#2a2a2a] hover:text-brand flex items-center gap-1"
                        >
                          <Beaker size={12} className="text-brand" />
                          {link.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const InfoItem = ({ text }) => (
  <li className="flex items-start gap-3 bg-white p-4 border border-brand/15">
    <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
    <span className="text-[15px] text-[#2a2a2a]">{text}</span>
  </li>
);

const SportsSectionPage = ({ item, sectionId }) => {
  const section = item.sections.find((entry) => entry.id === sectionId);

  if (sectionId === "overview") {
    return (
      <Section id="overview" title="Overview">
        <SportsOverview item={item} />
      </Section>
    );
  }

  if (sectionId === "sports-faculty") {
    return (
      <Section id="sports-faculty" title="Sports Faculty" icon={Users}>
        <SportsFaculty section={section} />
      </Section>
    );
  }

  return (
    <Section id="sports-achievement" title="Sports Achievement" icon={Award}>
      <SportsAchievement section={section} />
    </Section>
  );
};

const sectionIcon = (section) => {
  if (section.type === "achievements") return Award;
  if (section.type === "participantGroups") return Users;
  if (section.id === "location") return MapPin;
  return Sparkles;
};

const SectionContent = ({ section }) => {
  if (section.id === "sports-faculty") {
    return <SportsFaculty section={section} />;
  }

  if (section.id === "sports-achievement") {
    return <SportsAchievement section={section} />;
  }

  if (section.type === "table") {
    return (
      <>
        {section.note && (
          <p className="text-sm text-brand font-semibold mb-3">{section.note}</p>
        )}
        <ResponsiveTable columns={section.columns} rows={section.rows} />
      </>
    );
  }

  if (section.type === "achievements") {
    return (
      <div className="space-y-4">
        {section.years.map((year) => (
          <div key={year.year} className="bg-white border border-brand/15 p-5">
            <h4
              className="text-2xl text-brand font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {year.year}
            </h4>
            <p className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-2">
              {year.summary}
            </p>
            {year.events.length > 0 && (
              <div className="mt-4">
                <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                  Important Events
                </p>
                <ul className="mt-3 space-y-2">
                  {year.events.map((event) => (
                    <InfoItem key={event} text={event} />
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4">
              <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                Highlights
              </p>
              <ul className="mt-3 space-y-2">
                {year.highlights.map((highlight) => (
                  <InfoItem key={highlight} text={highlight} />
                ))}
              </ul>
            </div>
            {section.groups && (
              <div className="mt-5">
                <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest mb-3">
                  Student Participants & Winners
                </p>
                <ParticipantGroups groups={section.groups} />
              </div>
            )}
            {section.galleryNotes && (
              <div className="mt-5">
                <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest mb-3">
                  Gallery
                </p>
                <ul className="space-y-2">
                  {section.galleryNotes.map((note) => (
                    <InfoItem key={note} text={note} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "participantGroups") {
    return <ParticipantGroups groups={section.groups} />;
  }

  return (
    <ul className="space-y-2">
      {section.items.map((text) => (
        <InfoItem key={text} text={text} />
      ))}
    </ul>
  );
};

const ResponsiveTable = ({ columns, rows }) => (
  <div className="overflow-x-auto bg-white border border-brand/15">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-brand text-surface">
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-4 py-3 font-semibold whitespace-nowrap">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`${row.join("-")}-${rowIndex}`} className="border-t border-brand/10">
            {row.map((cell, cellIndex) => (
              <td key={`${cell}-${cellIndex}`} className="px-4 py-3 align-top text-[#2a2a2a]">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ParticipantGroups = ({ groups }) => (
  <div className="space-y-3">
    {groups.map((group, index) => (
      <details
        key={group.title}
        className="bg-white border border-brand/15 p-4"
        open={index === 0}
      >
        <summary className="cursor-pointer text-brand font-semibold">
          {group.title}
        </summary>
        <div className="mt-4">
          <ResponsiveTable columns={group.columns} rows={group.rows} />
        </div>
      </details>
    ))}
  </div>
);

export default CampusLifeDetail;
