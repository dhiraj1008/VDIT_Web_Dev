import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Download, Languages } from "lucide-react";
import { PageHero } from "./About";

const events = [
  {
    title: "Kannada Rajyotsava Celebration (2025)",
    description:
      "A cultural celebration honoring Karnataka's formation day through Kannada language, traditional attire, songs, competitions, and student participation that strengthened pride in regional heritage.",
    report: "/Clubs/Kannada-Sangha-Kalpavruksha-Club/Kannada rajyotsava report 2025.doc",
  },
  {
    title: "International Mother Language Day Lecture Program (2025)",
    description:
      "An educational event celebrating the importance of the mother tongue through a Kannada-language lecture on Artificial Intelligence, encouraging innovation, learning, and technological awareness among students.",
    report: "/Clubs/Kannada-Sangha-Kalpavruksha-Club/matru bhasha divas report.docx",
  },
  {
    title: "Kannada Rajyotsava Celebration 2024",
    description:
      "A vibrant Kannada Rajyotsava celebration featuring traditional puppet shows, cultural heritage presentations, competitions, and community outreach activities that promoted Kannada language, history, and regional pride.",
    report: "/Clubs/Kannada-Sangha-Kalpavruksha-Club/kannada rajyotsava celebration 2024.pdf",
  },
  {
    title: "Kannada Kartika Anudina Anuspandana Program (2023)",
    description:
      "A literary and cultural program promoting the richness of Kannada language and literature through expert talks, folk performances, and community engagement that inspired linguistic pride.",
    report: "/Clubs/Kannada-Sangha-Kalpavruksha-Club/kartika auspandana report.doc",
  },
];

const KalpavrukshaKannadaSangha = () => (
  <main>
    <PageHero
      title="Kalpavruksha Kannada Sangha"
      sub="Celebrating Kannada language, literature, culture, and student expression"
      image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=2400&q=80"
    />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <Link
        to="/clubs"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline mb-8"
      >
        <ArrowLeft size={16} />
        Back to Clubs
      </Link>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <section className="lg:col-span-2 bg-white border border-brand/15 p-7 md:p-9">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 border border-brand/20 flex items-center justify-center text-brand">
              <Languages size={22} />
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-semibold">
              Cultural Club
            </p>
          </div>

          <h2
            className="text-3xl md:text-5xl text-brand font-semibold leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Kannada language, culture, and community
          </h2>

          <p className="mt-5 text-[16px] text-[#2a2a2a]/85 leading-relaxed">
            Kalpavruksha Kannada Sangha promotes Kannada language, literature,
            cultural identity, and student participation through celebrations,
            lectures, and campus activities.
          </p>
        </section>

        <aside className="bg-brand text-white p-6 lg:sticky lg:top-32">
          <p className="text-xs uppercase tracking-[0.24em] opacity-80 font-semibold">
            Club Focus
          </p>
          <h3
            className="text-3xl font-semibold mt-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Language and Culture
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            A student platform for Kannada expression, cultural awareness, and
            meaningful campus engagement.
          </p>
        </aside>
      </div>

      <section className="mt-12">
        <p className="text-xs uppercase tracking-[0.24em] text-brand font-semibold mb-4">
          Events
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {events.map((event) => (
            <article key={event.title} className="bg-white border border-brand/15 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <h3 className="text-xl text-brand font-semibold leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-2">
                    {event.description}
                  </p>
                  <a
                    href={event.report}
                    download
                    className="inline-flex items-center gap-2 mt-4 bg-brand text-white px-4 py-2 text-xs font-semibold tracking-wider uppercase hover:bg-brand-dark transition"
                  >
                    <Download size={14} />
                    Download full report
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  </main>
);

export default KalpavrukshaKannadaSangha;