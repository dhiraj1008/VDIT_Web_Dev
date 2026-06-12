import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { Calendar, Users, Award, Beaker, CheckCircle2, Sparkles } from "lucide-react";

const associations = [
  {
    id: "ieee",
    name: "Institute of Electrical and Electronics Engineers",
    short: "IEEE",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "2020",
    department: "KLS VDIT IEEE Student Branch",
    coordinator: "Student Branch Chair, Vice Chair, Treasurer and Volunteer Coordinator",
    email: "info@klsvdit.edu.in",
    overview:
      "IEEE is a reflection of countless journeys, shaped by learning, collaboration, and inspiration. Being a part of IEEE has been a transformative experience for KLS VDIT IEEE Student Branch. What began as a simple step toward exploring technical opportunities soon evolved into a journey of growth, leadership, and meaningful connections.",
    sectionTitles: {
      objectives: "Why IEEE",
      activities: "Events",
      team: "Execom",
      achievements: "Achievements",
    },
    objectives: [
      "Exposure to real-world technologies.",
      "Opportunities beyond academics.",
      "A platform to connect with academicians and industry professionals.",
    ],
    activities: [
      "Technical workshops, hackathons and hands-on projects.",
      "Expert talks from industry leaders.",
      "Virtual conferences, webinars, online competitions and collaborative projects.",
    ],
    team: [
      "Student Branch Chair, Vice Chair, Treasurer and Volunteer Coordinator roles help students practice leadership.",
      "Students build team management, event planning, communication and networking skills.",
      "National-level hackathon organization strengthened teamwork, responsibility and volunteerism.",
    ],
    achievements: [
      "Members connect with peers passionate about technology, mentors who guide and inspire, and industry professionals sharing real-world insights.",
      "IEEE Bangalore Section supports student branches across Karnataka, organizes conferences and technical events, and promotes academia-industry collaboration.",
      "The branch envisions stronger work in emerging technologies, industry-academia partnerships, student opportunities and outreach for societal impact.",
    ],
  },

  {
    id: "csi",
    name: "CSI",
    short: "CSI",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "Content to be updated",
    department: "Computer Science & Engineering",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    overview: "Content to be updated.",
    objectives: ["Content to be updated."],
    activities: ["Content to be updated."],
    team: ["Content to be updated."],
    achievements: ["Content to be updated."],
  },

  {
    id: "acm",
    name: "ACM",
    short: "ACM",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "Content to be updated",
    department: "Computer Science & Engineering",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    overview: "Content to be updated.",
    objectives: ["Content to be updated."],
    activities: ["Content to be updated."],
    team: ["Content to be updated."],
    achievements: ["Content to be updated."],
  },

  {
    id: "iste",
    name: "ISTE",
    short: "ISTE",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "Content to be updated",
    department: "Content to be updated",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    overview: "Content to be updated.",
    objectives: ["Content to be updated."],
    activities: ["Content to be updated."],
    team: ["Content to be updated."],
    achievements: ["Content to be updated."],
  },

  {
    id: "iei",
    name: "IEI",
    short: "IEI",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "Content to be updated",
    department: "Content to be updated",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    overview: "Content to be updated.",
    objectives: ["Content to be updated."],
    activities: ["Content to be updated."],
    team: ["Content to be updated."],
    achievements: ["Content to be updated."],
  },

  {
    id: "bites",
    name: "BITES",
    short: "BITES",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "Content to be updated",
    department: "Content to be updated",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    overview: "Content to be updated.",
    objectives: ["Content to be updated."],
    activities: ["Content to be updated."],
    team: ["Content to be updated."],
    achievements: ["Content to be updated."],
  },

  {
    id: "iic",
    name: "IIC",
    short: "IIC",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400",
    established: "Content to be updated",
    department: "Innovation Hub",
    coordinator: "Content to be updated",
    email: "info@klsvdit.edu.in",
    overview: "Content to be updated.",
    objectives: ["Content to be updated."],
    activities: ["Content to be updated."],
    team: ["Content to be updated."],
    achievements: ["Content to be updated."],
  },
];

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-32">
    <h3
      className="text-2xl md:text-3xl text-brand font-semibold flex items-center gap-2 mb-5"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {Icon && <Icon size={22} />} {title}
    </h3>
    {children}
  </section>
);

const InfoItem = ({ icon: Icon, text }) => (
  <li className="flex items-start gap-3 bg-white p-4 border border-brand/15">
    <Icon size={18} className="text-brand flex-shrink-0 mt-0.5" />
    <span className="text-[15px] text-[#2a2a2a]">{text}</span>
  </li>
);

const AssociationDetail = () => {
  const { id } = useParams();
  const association = associations.find((item) => item.id === id);
  const isIeee = association?.id === "ieee";

  if (!association) {
    return <Navigate to="/associations" replace />;
  }

  const ieeeNavItems = [
    { label: "Home", type: "hash", href: "#overview" },
    { label: "About Us", type: "route", to: "/associations/ieee/about-us" },
    { label: "Events", type: "hash", href: "/associations/ieee/events" },
    { label: "Achievements", type: "hash", href: "#achievements" },
    { label: "Execom", type: "hash", href: "#team" },
    { label: "Contact Us", type: "hash", href: "#overview" },
  ];

  const defaultNavItems = [
    { label: "Overview", type: "hash", href: "#overview" },
    { label: "Objectives", type: "hash", href: "#objectives" },
    { label: "Activities", type: "hash", href: "#activities" },
    { label: "Team", type: "hash", href: "#team" },
    { label: "Achievements", type: "hash", href: "#achievements" },
  ];

  return (
    <main>
      <InnerHero
        title={association.name}
        image={association.image}
        breadcrumbs={[
          { label: "Associations & Innovation Hub", to: "/associations" },
          { label: association.short },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          {(isIeee ? ieeeNavItems : defaultNavItems).map((item) =>
            item.type === "route" ? (
              <Link key={item.label} to={item.to} className="uppercase hover:underline">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="uppercase hover:underline">
                {item.label}
              </a>
            )
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Section id="overview" title={association.name}>
              <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px]">
                {association.overview}
              </p>
            </Section>

            <Section
              id="objectives"
              title={association.sectionTitles?.objectives || "Objectives"}
              icon={CheckCircle2}
            >
              <ul className="space-y-2">
                {association.objectives.map((item) => (
                  <InfoItem key={item} icon={CheckCircle2} text={item} />
                ))}
              </ul>
            </Section>

            <Section
              id="activities"
              title={association.sectionTitles?.activities || "Activities"}
              icon={Calendar}
            >
              <ul className="space-y-2">
                {association.activities.map((item) => (
                  <InfoItem key={item} icon={Calendar} text={item} />
                ))}
              </ul>
            </Section>

            <Section
              id="team"
              title={association.sectionTitles?.team || "Faculty & Team"}
              icon={Users}
            >
              <ul className="space-y-2">
                {association.team.map((item) => (
                  <InfoItem key={item} icon={Users} text={item} />
                ))}
              </ul>
            </Section>

            <Section
              id="achievements"
              title={association.sectionTitles?.achievements || "Achievements"}
              icon={Sparkles}
            >
              <ul className="space-y-2">
                {association.achievements.map((item) => (
                  <InfoItem key={item} icon={Award} text={item} />
                ))}
              </ul>
            </Section>
          </div>

          <aside className="space-y-5">
            <div className="bg-white border border-brand/15 p-5 lg:sticky lg:top-36 self-start">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                Quick Facts
              </h4>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  Established: <strong>{association.established}</strong>
                </div>
                <div>
                  Department: <strong>{association.department}</strong>
                </div>
                <div>
                  Coordinator: <strong>{association.coordinator}</strong>
                </div>
                <div>
                  Email: <strong>{association.email}</strong>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-brand/10">
                <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                  Other Associations
                </h4>

                <ul className="space-y-1.5">
                  {associations
                    .filter((item) => item.id !== association.id)
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/associations/${item.id}`}
                          className="text-sm text-[#2a2a2a] hover:text-brand flex items-start gap-1 leading-snug"
                        >
                          <Beaker size={12} className="text-brand flex-shrink-0 mt-0.5" />
                          <span>{item.name}</span>
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

export default AssociationDetail;