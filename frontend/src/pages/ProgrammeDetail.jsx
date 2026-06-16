import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import {
  departments,
  newsByDept,
  eventsByDept,
  clubsByDept,
} from "../data/mock";
import FacultySection from "./departments/shared/FacultySection";
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
  BookOpen,
  ChevronDown,
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

const SimpleTable = ({ title, columns, rows }) => (
  <div className="bg-white border border-brand/15 overflow-hidden">
    <div className="px-4 py-3 border-b border-brand/10">
      <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
        {title}
      </h4>
    </div>
    <table className="w-full table-fixed text-sm">
      <thead className="bg-brand text-surface">
        <tr>
          {columns.map((column, index) => (
            <th
              key={column}
              className={`text-left px-4 py-3 font-semibold align-top ${
                columns.length === 3 && index === 2 ? "w-32" : ""
              }`}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.join("-")} className="odd:bg-surface/40">
            {row.map((cell, index) => (
              <td
                key={`${cell}-${index}`}
                className="px-4 py-3 border-t border-brand/10 align-top whitespace-normal break-words"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProgrammeDetail = ({ programme }) => {
  const { id } = useParams();
  const dept = programme || departments.find((d) => d.id === id);
  const [showStudentClubs, setShowStudentClubs] = useState(true);

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

  const facultyDeptId =
    dept.facultyDeptId ||
    {
      "industrial-electronics": "eee",
      "thermal-power-engineering": "me",
      "cse-research": "cse",
      "ece-research": "ece",
      "eee-research": "eee",
      "me-research": "me",
      physics: "bsh",
      chemistry: "bsh",
      mathematics: "bsh",
    }[dept.id] ||
    dept.id;
  const sourceFacultyData = dept.facultyData || { hod: null, members: [] };
  const localFaculty = [
    sourceFacultyData.hod,
    ...(sourceFacultyData.members || []),
  ].filter(Boolean);
  const selectedHod =
    localFaculty.find((faculty) => faculty.id === dept.hodId) || sourceFacultyData.hod;
  const hod = selectedHod ? { ...selectedHod, showPhone: true } : null;
  const facultyData = {
    hod,
    members: localFaculty.filter((faculty) => !hod || faculty.id !== hod.id),
  };
  const facultyCount = localFaculty.length;
  const facultyStrength =
    dept.facultyStrength !== undefined
      ? String(dept.facultyStrength).padStart(2, "0")
      : facultyCount;
  const news = newsByDept(facultyDeptId);
  const evs = eventsByDept(facultyDeptId);
  const clubs = dept.hideSharedClubs ? [] : clubsByDept(facultyDeptId);
  const departmentClubs = dept.studentActivities?.clubs || [];
  const professionalChapters = dept.studentActivities?.professionalChapters || [];
  const programmeType = dept.programmeType || "ug";
  const overviewTitle =
    programmeType === "research"
      ? dept.name
      : dept.name;
  const relatedProgrammes = departments.filter(
    (d) => d.id !== dept.id && (d.programmeType || "ug") === programmeType
  );
  const researchAreas =
    typeof dept.research === "string"
      ? dept.research.split(/[·,]/).map((area) => area.trim()).filter(Boolean)
      : [];
  const studentResourcePathByDept = {
    cse: "/programme/cse/student-resources",
    "cse-aiml": "/programme/cse-aiml/student-resources",
    ece: "/programme/ece/student-resources",
    eee: "/programme/eee/student-resources",
    me: "/programme/me/student-resources",
    civil: "/programme/civil/student-resources",
    bsh: "/programme/bsh/student-resources",
  };
  const studentResourcePath = studentResourcePathByDept[dept.id];
  const navItems = [
    ["overview", "Overview"],
    //dept.curriculumSupport && ["curriculum", "Curriculum"],
    (dept.programmeOutcomes || dept.pso || dept.peo) && ["outcomes", "Outcomes"],
    //["faculty", "Faculty"],
    //["accreditation", "Accreditation"],
    ["research", "Research"],
    dept.achievements?.length > 0 && ["achievements", "Achievements"],
    (dept.infrastructure || dept.studentActivities || dept.departmentContact) && ["infrastructure", "Infrastructure"],
    //(dept.facultyTable || dept.teachingStaff || dept.nonTeachingStaff) && ["staff-profile", "Staff"],
    ["news", "News & Events"],
    studentResourcePath && ["student-resources", "Student Resources", studentResourcePath],
    ["clubs", "Clubs"],
  ].filter(Boolean);

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
          {navItems.map(([h, l, to]) =>
            to ? (
              <Link key={h} to={to} className="uppercase hover:underline">
                {l}
              </Link>
            ) : (
              <a key={h} href={`#${h}`} className="uppercase hover:underline">
                {l}
              </a>
            )
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Section id="overview" title={overviewTitle}>
              <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
                {dept.short}
              </span>
              <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
                {dept.description}
              </p>
              {dept.dashboard && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                  {dept.dashboard.map(([label, value]) => (
                    <div
                      key={label}
                      className="bg-[#7a1d2c] p-4 border border-[#7a1d2c]"
                    >
                      <div
                        className="text-3xl text-white font-semibold"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {value}
                      </div>

                      <div className="text-xs uppercase text-white/80 font-sans-ui tracking-widest mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {dept.academicOverview && (
                <div className="grid md:grid-cols-3 gap-3 mt-5">
                  {dept.academicOverview.map((item) => (
                    <div key={item.title} className="bg-white p-4 border border-brand/15">
                      <h4 className="text-brand font-semibold">{item.title}</h4>
                      <p className="text-sm text-[#2a2a2a]/85 mt-2 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
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
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {researchAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 bg-brand/10 text-brand text-xs rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {dept.curriculumSupport && (
              <Section id="curriculum" title="Curriculum Support" icon={BookOpen}>
                <ul className="space-y-2">
                  {dept.curriculumSupport.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-white p-4 border border-brand/15">
                      <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] text-[#2a2a2a]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {(dept.programmeOutcomes || dept.pso || dept.peo) && (
              <Section id="outcomes" title="Outcome-Based Education" icon={Sparkles}>
                {dept.programmeOutcomes && (
                  <div className="bg-white border border-brand/15 p-5">
                    <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                      Programme Outcomes
                    </h4>
                    <ol className="space-y-2 text-[15px] text-[#2a2a2a]/85">
                      {dept.programmeOutcomes.map((item, idx) => (
                        <li key={item}>
                          <span className="text-brand font-semibold">PO{idx + 1}:</span> {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {dept.pso && (
                    <div className="bg-white border border-brand/15 p-5">
                      <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                        Programme Specific Outcomes
                      </h4>
                      <ul className="space-y-2 text-[15px] text-[#2a2a2a]/85">
                        {dept.pso.map((item, idx) => (
                          <li key={item}>
                            <span className="text-brand font-semibold">PSO{idx + 1}:</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {dept.peo && (
                    <div className="bg-white border border-brand/15 p-5">
                      <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                        Programme Educational Objectives
                      </h4>
                      <ul className="space-y-2 text-[15px] text-[#2a2a2a]/85">
                        {dept.peo.map((item, idx) => (
                          <li key={item}>
                            <span className="text-brand font-semibold">PEO{idx + 1}:</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Section>
            )}

            <FacultySection
              facultyData={facultyData}
              programmeShort={dept.short}
              Section={Section}
            />

            {/* Accreditation */}
            {dept.accreditation?.length > 0 && (
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
            )}

            {/* Research */}
            {/*<Section id="research" title="Research & Funded Projects" icon={Microscope}>
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
            </Section>*/} 

            {/* Achievements */}
            {dept.achievements?.length > 0 && (
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
            )}
            
            {/*(dept.infrastructure || dept.studentActivities || dept.departmentContact) && (
              <Section id="infrastructure" title="Department Infrastructure" icon={Beaker}>
                {dept.infrastructure && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {dept.infrastructure.map(([label, value]) => (
                      <div key={label} className="bg-white p-4 border border-brand/15">
                        <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                          {label}
                        </p>
                        <p className="text-sm text-[#2a2a2a] mt-2 leading-relaxed">{value}</p>
                      </div>
                    ))}
                  </div>
                )}
                {dept.studentActivities && (
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 border border-brand/15">
                      <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                        Student Clubs
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {dept.studentActivities.clubs.map((item) => (
                          <span key={item} className="px-2.5 py-1 bg-brand/10 text-brand text-xs rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white p-4 border border-brand/15">
                      <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
                        Professional Chapters
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {dept.studentActivities.professionalChapters.map((item) => (
                          <span key={item} className="px-2.5 py-1 bg-brand/10 text-brand text-xs rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {dept.departmentContact && (
                  <div className="bg-white p-5 border-l-4 border-brand mt-4">
                    <h4 className="text-brand font-semibold">{dept.departmentContact.hod}</h4>
                    <p className="text-sm italic text-[#3a3a3a]">{dept.departmentContact.role}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#3a3a3a] mt-3">
                      <span className="flex items-center gap-1">
                        <Mail size={13} className="text-brand" /> {dept.departmentContact.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone size={13} className="text-brand" /> {dept.departmentContact.phone}
                      </span>
                    </div>
                  </div>
                )}
              </Section>
            )*/}

            {/*{(dept.facultyTable || dept.teachingStaff || dept.nonTeachingStaff) && (
              <Section id="staff-profile" title="Staff Profile" icon={Users}>
                {dept.facultyTable && (
                  <SimpleTable
                    title="Faculty Qualifications and Experience"
                    columns={["Faculty Name", "Qualifications", "Academic Experience"]}
                    rows={dept.facultyTable}
                  />
                )}
                <div className="grid lg:grid-cols-2 gap-4 mt-4">
                  {dept.teachingStaff && (
                    <SimpleTable
                      title="Teaching Staff"
                      columns={["Staff Name", "Designation"]}
                      rows={dept.teachingStaff}
                    />
                  )}
                  {dept.nonTeachingStaff && (
                    <SimpleTable
                      title="Non-Teaching Staff"
                      columns={["Staff Name", "Designation"]}
                      rows={dept.nonTeachingStaff}
                    />
                  )}
                </div>
              </Section>
            )}*/}

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
            {(clubs.length > 0 ||
              departmentClubs.length > 0 ||
              professionalChapters.length > 0) && (
              <Section id="clubs" title="Student Clubs" icon={Users}>
                <button
                  type="button"
                  onClick={() => setShowStudentClubs((isOpen) => !isOpen)}
                  className="w-full bg-white border border-brand/15 px-4 py-3 mb-4 flex items-center justify-between gap-3 text-left"
                  aria-expanded={showStudentClubs}
                >
                  <span className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                    Student Clubs
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-brand transition-transform ${showStudentClubs ? "rotate-180" : ""}`}
                  />
                </button>
                {showStudentClubs && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {clubs.map((c) => (
                      <Link
                        to="#"
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
                    {departmentClubs.map((club) => {
                      const clubName = typeof club === "string" ? club : club.name;
                      const clubCategory = typeof club === "string" ? "Student Club" : club.category || "Student Club";
                      const clubDescription =
                        typeof club === "string"
                          ? `Student-led technical activities, events, and peer learning through ${clubName}.`
                          : club.description || `Student-led activities and events through ${clubName}.`;

                      return (
                      <Link
                        to="#"
                        key={clubName}
                        className="bg-white border border-brand/15 overflow-hidden card-hover block"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={clubs[0]?.image || dept.image}
                            alt={clubName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-xs uppercase tracking-widest text-brand font-sans-ui">
                            {clubCategory}
                          </span>
                          <h4 className="text-brand font-semibold mt-0.5 leading-snug">{clubName}</h4>
                          <p className="text-xs text-[#3a3a3a]/85 mt-1.5 line-clamp-2">
                            {clubDescription}
                          </p>
                        </div>
                      </Link>
                      );
                    })}
                    {professionalChapters.map((chapter) => {
                      const chapterName = typeof chapter === "string" ? chapter : chapter.name;
                      const chapterCategory =
                        typeof chapter === "string"
                          ? "Professional Chapter"
                          : chapter.category || "Professional Chapter";
                      const chapterDescription =
                        typeof chapter === "string"
                          ? `Student engagement, workshops, certifications, and technical activities through ${chapterName}.`
                          : chapter.description ||
                            `Student engagement, workshops, certifications, and technical activities through ${chapterName}.`;

                      return (
                      <Link
                        to="#"
                        key={chapterName}
                        className="bg-white border border-brand/15 overflow-hidden card-hover block"
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={clubs[0]?.image || dept.image}
                            alt={chapterName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-xs uppercase tracking-widest text-brand font-sans-ui">
                            {chapterCategory}
                          </span>
                          <h4 className="text-brand font-semibold mt-0.5 leading-snug">{chapterName}</h4>
                          <p className="text-xs text-[#3a3a3a]/85 mt-1.5 line-clamp-2">
                            {chapterDescription}
                          </p>
                        </div>
                      </Link>
                      );
                    })}
                  </div>
                )}
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
                  <span>
                    {programmeType === "research" ? "Research Intake" : "Annual Intake"}:{" "}
                    <strong>{dept.intake ? `${dept.intake} seats` : "To be updated"}</strong>
                  </span>
                </div>
                
                <div>Faculty Strength: <strong>{facultyStrength}</strong></div>
                <div>Duration: <strong>{dept.duration || "4 Years (8 Semesters)"}</strong></div>
                <div>Affiliation: <strong>VTU, Belagavi</strong></div>
                {dept.projects && (
                  <div>
                    Research Funded Projects: <strong>{dept.projects.length}</strong>
                  </div>
                )}
              </div>
              {programmeType !== "research" && (
                <Link
                  to="/admissions"
                  className="block mt-5 text-center bg-brand text-surface py-2.5 text-sm font-semibold font-sans-ui hover:bg-brand-dark transition"
                >
                  Apply for {dept.short}
                </Link>
              )}

              <div className="mt-6 pt-5 border-t border-brand/10">
                <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
                  Other {programmeType === "research" ? "Research Centres" : "Programmes"}
                </h4>
                <ul className="space-y-1.5">
                  {relatedProgrammes
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
