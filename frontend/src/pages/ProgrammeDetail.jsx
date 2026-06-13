import React from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import {
  departments,
  facultyByDept,
  newsByDept,
  eventsByDept,
  clubsByDept,
  findFaculty,
} from "../data/mock";
import {
  ArrowLeft,
  Beaker,
  Users,
  Calendar,
  Microscope,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

const Section = ({ id, title, icon: Icon, children, sub }) => (
  <section id={id} className="scroll-mt-32">
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <h3
          className="text-2xl md:text-3xl text-brand font-semibold flex items-center gap-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {Icon && <Icon size={22} />} {title}
        </h3>
        {sub && <p className="text-sm text-[#3a3a3a]/80 italic mt-1">{sub}</p>}
      </div>
    </div>
    {children}
  </section>
);

const ProgrammeDetail = () => {
  const { id } = useParams();
  const dept = departments.find((d) => d.id === id);

  if (!dept) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-brand text-xl">Programme not found.</p>
        <Link
          to="/academics"
          className="inline-flex items-center gap-2 text-brand underline mt-3"
        >
          <ArrowLeft size={14} /> Back to Academics
        </Link>
      </main>
    );
  }

  const facList = facultyByDept(dept.id);
  const hod = findFaculty(dept.hodId);
  const facWithoutHod = facList.filter((f) => f.id !== dept.hodId);
  const news = newsByDept(dept.id);
  const evs = eventsByDept(dept.id);
  const clubs = clubsByDept(dept.id);

  return (
    <main>
      <InnerHero
        title={dept.name}
        image={dept.image}
        breadcrumbs={[
          { label: "Academics", to: "/academics" },
          { label: "Departments", to: "/academics#departments" },
          { label: dept.short },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          {[
            ["overview", "Overview"],
            ["faculty", "Faculty"],
            ["accreditation", "Accreditation"],
            ["research", "Research"],
            ["achievements", "Achievements"],
            ["news", "News & Events"],
            ["clubs", "Clubs"],
          ].map(([h, l]) => (
            <a key={h} href={`#${h}`} className="uppercase hover:underline">
              {l}
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Section id="overview" title={`B.E. ${dept.name}`}>
              <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
                {dept.short}
              </span>
              <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
                {dept.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                <div className="bg-white p-4 border border-brand/15">
                  <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                    Laboratories
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {dept.labs.map((l) => (
                      <span
                        key={l}
                        className="px-2.5 py-1 bg-brand/10 text-brand text-xs rounded-full"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-4 border border-brand/15">
                  <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                    Research Areas
                  </p>
                  <p className="text-sm text-[#2a2a2a] mt-2">{dept.research}</p>
                </div>
              </div>
            </Section>

            {/* Faculty section */}
            <Section
              id="faculty"
              title="Faculty"
              icon={Users}
              sub={`Meet the ${facList.length} faculty members of the ${dept.short} department`}
            >
              {hod && (
                <article
                  className="flex flex-col sm:flex-row gap-5 bg-white border-l-4 border-brand p-5 mb-5 card-hover"
                >
                  <Link to={`/faculty/${hod.id}`} className="flex-shrink-0">
                    <img
                      src={hod.image}
                      alt={hod.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 object-cover"
                    />
                  </Link>
                  <div className="flex-1">
                    <span className="text-xs uppercase tracking-widest text-brand font-sans-ui font-semibold">
                      Head of Department
                    </span>
                    <Link to={`/faculty/${hod.id}`} className="hover:underline">
                      <h4
                        className="text-2xl text-brand font-semibold mt-0.5"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {hod.name}
                      </h4>
                    </Link>
                    <p className="text-sm italic text-[#3a3a3a]">
                      {hod.role} · {hod.qualifications}
                    </p>
                    <p className="text-sm text-[#2a2a2a]/85 mt-2 leading-relaxed line-clamp-3">
                      {hod.bio}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#3a3a3a] mt-3">
                      <span className="flex items-center gap-1">
                        <Mail size={12} className="text-brand" /> {hod.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone size={12} className="text-brand" /> {hod.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-brand" /> {hod.experience}
                      </span>
                    </div>
                  </div>
                </article>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {facWithoutHod.map((f) => (
                  <article
                    key={f.id}
                    className="bg-white border border-brand/15 p-4 flex items-start gap-4 card-hover"
                  >
                    <Link to={`/faculty/${f.id}`} className="flex-shrink-0">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-20 h-20 object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/faculty/${f.id}`} className="hover:underline">
                        <h4 className="text-brand font-semibold leading-tight">{f.name}</h4>
                      </Link>
                      <p className="text-xs italic text-[#3a3a3a] mt-0.5">{f.role}</p>
                      <p className="text-xs text-[#3a3a3a]/85 mt-1.5 line-clamp-2">{f.qualifications}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {f.areas.slice(0, 2).map((a) => (
                          <span key={a} className="text-[10.5px] bg-brand/10 text-brand px-2 py-0.5 rounded-full">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <Link
                to={`/about/people?tab=faculty&dept=${dept.short}`}
                className="inline-flex items-center gap-1 text-brand hover:underline mt-5 text-sm font-sans-ui"
              >
                View all faculty <ArrowRight size={14} />
              </Link>
            </Section>

            {/* Accreditation */}
            <Section id="accreditation" title="Accreditation & Approvals" icon={CheckCircle2}>
              <ul className="space-y-2">
                {dept.accreditation.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 bg-white p-4 border-l-4 border-brand"
                  >
                    <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[#2a2a2a]">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Research */}
            <Section id="research" title="Research & Funded Projects" icon={Microscope}>
              <div className="space-y-3">
                {dept.projects.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white p-5 border border-brand/15"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-brand font-semibold">{p.title}</h4>
                      <span className="text-xs font-sans-ui bg-brand/10 text-brand px-2 py-1 rounded-full">
                        {p.amount}
                      </span>
                    </div>
                    <p className="text-sm text-[#3a3a3a]/85 mt-1">
                      Funding agency: <span className="italic">{p.funding}</span>
                    </p>
                  </div>
                ))}
              </div>
              <Link
                to="/research"
                className="inline-flex items-center gap-1 text-brand hover:underline mt-5 text-sm font-sans-ui"
              >
                Explore all research at VDIT <ArrowRight size={14} />
              </Link>
            </Section>

            {/* Achievements */}
            <Section id="achievements" title="Achievements" icon={Sparkles}>
              <ul className="space-y-2">
                {dept.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-3 bg-white p-4 border border-brand/15"
                  >
                    <Award size={18} className="text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[#2a2a2a]">{a}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* News & Events */}
            <Section id="news" title="News & Events" icon={Calendar}>
              {news.length === 0 && evs.length === 0 ? (
                <p className="text-sm text-[#3a3a3a]/70 italic">
                  No recent news or events for this department.
                </p>
              ) : (
                <div className="space-y-6">
                  {news.length > 0 && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-3 font-sans-ui">
                        Latest News
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {news.map((n) => (
                          <Link
                            to={`/news/${n.id}`}
                            key={n.id}
                            className="bg-white border border-brand/15 overflow-hidden card-hover block"
                          >
                            <div className="aspect-[16/10] overflow-hidden">
                              <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                              <span className="text-[11px] text-brand tracking-wider font-sans-ui">{n.date}</span>
                              <h4 className="text-brand font-semibold mt-1 leading-snug">{n.title}</h4>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {evs.length > 0 && (
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand font-semibold mb-3 font-sans-ui">
                        Upcoming Events
                      </p>
                      <div className="space-y-3">
                        {evs.map((e) => (
                          <Link
                            to={`/event/${e.id}`}
                            key={e.id}
                            className="block bg-white p-4 border-l-4 border-brand"
                          >
                            <p className="text-xs text-brand font-sans-ui flex items-center gap-1.5 mb-1">
                              <Calendar size={12} /> {e.date} · {e.time}
                            </p>
                            <p className="text-[#2a2a2a] font-semibold text-sm">{e.title}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Section>

            {/* Clubs */}
            {clubs.length > 0 && (
              <Section id="clubs" title="Student Clubs" icon={Users}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {clubs.map((c) => (
                    <Link
                      to="/student-clubs"
                      key={c.id}
                      className="bg-white border border-brand/15 overflow-hidden card-hover block"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <span className="text-xs uppercase tracking-widest text-brand font-sans-ui">
                          {c.category}
                        </span>
                        <h4 className="text-brand font-semibold mt-0.5 leading-snug">{c.name}</h4>
                        <p className="text-xs text-[#3a3a3a]/85 mt-1.5 line-clamp-2">{c.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-white border border-brand/15 p-5 lg:sticky lg:top-36 self-start">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                Quick Facts
              </h4>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-brand" />
                  <span>Established: <strong>{dept.established}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-brand" />
                  <span>Annual Intake: <strong>{dept.intake} seats</strong></span>
                </div>
                {hod && (
                  <div>
                    Head of Department:{" "}
                    <Link to={`/faculty/${hod.id}`} className="text-brand underline">
                      {hod.name}
                    </Link>
                  </div>
                )}
                <div>Faculty Strength: <strong>{facList.length}</strong></div>
                <div>Duration: <strong>4 Years (8 Semesters)</strong></div>
                <div>Affiliation: <strong>VTU, Belagavi</strong></div>
              </div>
              <Link
                to="/admissions"
                className="block mt-5 text-center bg-brand text-surface py-2.5 text-sm font-semibold font-sans-ui hover:bg-brand-dark transition"
              >
                Apply for {dept.short}
              </Link>

              <div className="mt-6 pt-5 border-t border-brand/10">
                <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                  Other Departments
                </h4>
                <ul className="space-y-1.5">
                  {departments
                    .filter((d) => d.id !== dept.id)
                    .map((d) => (
                      <li key={d.id}>
                        <Link
                          to={`/programme/${d.id}`}
                          className="text-sm text-[#2a2a2a] hover:text-brand flex items-center gap-1"
                        >
                          <Beaker size={12} className="text-brand" /> {d.short} — {d.name.replace(/\s*\([^)]*\)/g, "")}
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

export default ProgrammeDetail;
