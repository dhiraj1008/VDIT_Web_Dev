import React from "react";
import { NavLink } from "react-router-dom";
import InnerHero from "../../components/InnerHero";
import SportsAchievement from "./SportsAchievement";
import SportsFaculty from "./SportsFaculty";
import SportsOverview from "./SportsOverview";
import { findCampusLifeItem } from "../../data/campusLifeData";
import { Award, Calendar, Dumbbell, Users } from "lucide-react";

const SportsGym = ({ section }) => {
  const item = findCampusLifeItem("sports-gym");
  const facultySection = item.sections.find((entry) => entry.id === "sports-faculty");
  const achievementSection = item.sections.find((entry) => entry.id === "sports-achievement");

  return (
    <main>
      <InnerHero
        title="Sports & Gym"
        image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
        breadcrumbs={[
          { label: "Life" },
          { label: "Campus Life" },
          { label: "Sports" },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          {[
            ["overview", "Overview"],
            ["sports-faculty", "Sports Faculty"],
            ["sports-achievement", "Sports Achievement"],
          ].map(([slug, label]) => (
            <NavLink
              key={slug}
              to={`/campus-life/sports-gym/${slug}`}
              className={({ isActive }) =>
                `uppercase hover:underline ${isActive ? "underline" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {section === "overview" && (
              <PageSection id="overview" title="Overview" icon={Dumbbell}>
                <SportsOverview item={item} />
              </PageSection>
            )}

            {section === "sports-faculty" && (
              <PageSection id="sports-faculty" title="Sports Faculty" icon={Users}>
                <SportsFaculty section={facultySection} />
              </PageSection>
            )}

            {section === "sports-achievement" && (
              <PageSection id="sports-achievement" title="Sports Achievement" icon={Award}>
                <SportsAchievement section={achievementSection} />
              </PageSection>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-white border border-brand/15 p-5 lg:sticky lg:top-36 self-start">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                Quick Facts
              </h4>
              <div className="mt-3 space-y-3 text-sm">
                {[
                  ["Category", "Campus Life"],
                  ["Facility", "Sports & Gym"],
                  ["Department", "Physical Education & Sports"],
                  ["Physical Education Director", "Shri. G. S. Yallur"],
                  ["Indoor Facilities", "5"],
                  ["Outdoor Facilities", "8"],
                  ["Total Ground Area", "14,000 Sq meters"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start gap-2">
                    <Calendar size={14} className="text-brand flex-shrink-0 mt-0.5" />
                    <span>
                      {label}: <strong>{value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const PageSection = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-32">
    <div className="flex items-end justify-between gap-4 mb-5">
      <h3
        className="text-2xl md:text-3xl text-brand font-semibold flex items-center gap-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {Icon && <Icon size={22} />} {title}
      </h3>
    </div>
    {children}
  </section>
);

export default SportsGym;
