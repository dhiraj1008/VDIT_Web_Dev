import React from "react";
import { Link } from "react-router-dom";
import { newsItems, events, stats, departments, leaders } from "../data/mock";
import HeroCarousel from "../components/HeroCarousel";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SectionTitle = ({ children, sub }) => (
  <div className="mb-10">
    <h2
      className="text-4xl md:text-5xl text-brand font-semibold"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {children}
    </h2>
    {sub && <p className="text-[#3a3a3a]/80 mt-2 italic">{sub}</p>}
  </div>
);

const Home = () => {
  const [leaderIdx, setLeaderIdx] = useState(0);
  const visibleLeaders = 2;
  const maxIdx = Math.max(0, leaders.length - visibleLeaders);
  const next = () => setLeaderIdx((i) => Math.min(i + 1, maxIdx));
  const prev = () => setLeaderIdx((i) => Math.max(i - 1, 0));

  return (
    <main>
      <HeroCarousel />

      {/* News */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <SectionTitle>News</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 6).map((item) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className="bg-white card-hover overflow-hidden border border-brand/10 block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-brand font-sans-ui tracking-wider">
                  {item.date}
                </span>
                <h3 className="text-brand text-xl mt-2 font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#3a3a3a]/85 text-sm mt-3 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <span className="text-xs text-brand underline mt-3 inline-block">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/news-events"
            className="inline-flex items-center gap-2 bg-brand text-surface px-7 py-3 text-sm font-sans-ui font-semibold tracking-wider hover:bg-brand-dark transition"
          >
            More News <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Events */}
      <section className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTitle>Events</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev) => (
              <Link
                to={`/event/${ev.id}`}
                key={ev.id}
                className="border-l-4 border-brand bg-white p-5 card-hover block"
              >
                <div className="flex items-center gap-2 text-brand text-xs font-sans-ui tracking-wider mb-2">
                  <Calendar size={14} />
                  {ev.date} · {ev.time}
                </div>
                <h3 className="text-[#2a2a2a] text-lg font-semibold leading-snug">
                  {ev.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/news-events"
              className="inline-flex items-center gap-2 bg-brand text-surface px-7 py-3 text-sm font-sans-ui font-semibold tracking-wider hover:bg-brand-dark transition"
            >
              More Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Stats */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle sub="A glimpse of who we are and the journey since 2004.">
          About VDIT
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mt-8">
          <Stat label="Established" value={stats.established} />
          <Stat label="On Campus Students" value={stats.students} highlight />
          <Stat label="Faculty" value={stats.faculty} />
          <Stat label="Programmes" value={`${stats.ugCourses} UG · ${stats.pgCourses} PG`} />
          <Stat label="Alumni" value={stats.alumni} highlight />
          <Stat label="Campus Area" value={stats.campus} />
          <Stat label="NIRF Engineering" value="Karnataka" small />
          <Stat label="Affiliation" value="VTU Belagavi" small />
        </div>
      </section>

      {/* Study/Departments */}
      <section className="bg-surface-alt/60 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTitle sub="Six departments. Hundreds of opportunities.">
            Study at VDIT
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3">
                Undergraduate Programmes
              </h3>
              <p className="text-[#3a3a3a]/85 leading-relaxed">
                VDIT offers seven 4-year B.E. degree programmes across emerging
                and core disciplines, including the new{" "}
                <Link
                  to="/academics#cse-aiml"
                  className="text-brand underline"
                >
                  B.E. in CSE (AI &amp; ML)
                </Link>
                . Each curriculum is aligned with VTU and enriched through
                industry electives, mini-projects and capstone experiences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3">
                Postgraduate Programmes
              </h3>
              <p className="text-[#3a3a3a]/85 leading-relaxed">
                Our postgraduate offerings include the{" "}
                <span className="text-brand">M.Tech in Digital Electronics</span>{" "}
                and{" "}
                <span className="text-brand">
                  M.Tech in Computer Science
                </span>
                . These two-year programmes provide depth in research methodology
                and are designed for professionals and graduates aiming to lead
                technical innovation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3">
                Research &amp; Doctoral
              </h3>
              <p className="text-[#3a3a3a]/85 leading-relaxed">
                Faculty across VDIT actively engage in research in renewable
                energy, IoT, embedded systems, sustainable construction, and
                applied AI. Multiple departments are recognised VTU research
                centres.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3">
                Continuing Education
              </h3>
              <p className="text-[#3a3a3a]/85 leading-relaxed">
                Through skill development cells and the entrepreneurship
                development centre, VDIT runs short-term certificate courses for
                practitioners and rural learners across North Karnataka.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 bg-brand text-surface px-7 py-3 text-sm font-sans-ui font-semibold tracking-wider hover:bg-brand-dark transition"
            >
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Departments grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle sub="Explore our six engineering departments">
          Departments
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d) => (
            <Link
              to={`/academics#${d.id}`}
              key={d.id}
              className="relative group block aspect-[4/3] overflow-hidden"
            >
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-surface/85 text-xs tracking-widest font-sans-ui">
                  {d.short}
                </div>
                <h3 className="text-surface text-xl font-semibold mt-1 leading-snug">
                  {d.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Community / Leaders carousel */}
      <section className="bg-surface-alt/60 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionTitle sub="Meet the people steering VDIT">
            VDIT Community
          </SectionTitle>
          <div className="relative">
            <button
              onClick={prev}
              disabled={leaderIdx === 0}
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-brand text-surface rounded-full p-2 disabled:opacity-30 hover:bg-brand-dark"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              disabled={leaderIdx === maxIdx}
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-brand text-surface rounded-full p-2 disabled:opacity-30 hover:bg-brand-dark"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
            <div className="grid md:grid-cols-2 gap-8">
              {leaders
                .slice(leaderIdx, leaderIdx + visibleLeaders)
                .map((l) => (
                  <div
                    key={l.id}
                    className="bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 border border-brand/10"
                  >
                    <div className="w-32 h-32 md:w-40 md:h-44 flex-shrink-0 overflow-hidden">
                      <img
                        src={l.image}
                        alt={l.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#3a3a3a]/85 text-sm leading-relaxed">
                        {l.bio}
                      </p>
                      <div className="mt-4">
                        <h3 className="text-brand text-xl font-semibold">
                          {l.name}
                        </h3>
                        <p className="text-[#3a3a3a] text-sm italic">
                          {l.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLeaderIdx(i)}
                  className={`w-3 h-3 rounded-full border border-brand ${
                    i === leaderIdx ? "bg-brand" : "bg-transparent"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore VDIT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle>Explore VDIT</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ExploreTile
            label="Our history"
            to="/about#history"
            image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=600&q=80"
          />
          <ExploreTile
            label="Our campus"
            to="/campus"
            image="https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=600"
          />
          <ExploreTile
            label="Admissions"
            to="/admissions"
            image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=600"
          />
          <ExploreTile
            label="Alumni"
            to="/about#alumni"
            image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80"
          />
        </div>
      </section>
    </main>
  );
};

const Stat = ({ label, value, highlight, small }) => (
  <div>
    <div className="text-xs text-[#3a3a3a] font-sans-ui tracking-widest uppercase mb-2">
      {label}
    </div>

    <div
      className={`${
        small ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"
      } font-semibold leading-none min-h-[72px] ${
        highlight ? "text-brand" : "text-[#1a1a1a]"
      }`}
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {value}
    </div>
  </div>
);

const ExploreTile = ({ label, to, image }) => (
  <Link
    to={to}
    className="group block aspect-square relative overflow-hidden"
  >
    <img
      src={image}
      alt={label}
      loading="lazy"
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/60 transition" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-surface text-xl md:text-2xl font-semibold tracking-wide flex items-center gap-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {label} <ArrowRight size={18} />
      </span>
    </div>
  </Link>
);

export default Home;
