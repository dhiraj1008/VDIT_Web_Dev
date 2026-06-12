import React from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { findAnnouncement, announcements } from "../data/mock";
import { ArrowLeft, Calendar, Megaphone, ChevronRight } from "lucide-react";

const AnnouncementDetail = () => {
  const { id } = useParams();
  const a = findAnnouncement(id);

  if (!a) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-brand text-xl">Announcement not found.</p>
        <Link to="/announcements" className="inline-flex items-center gap-2 text-brand underline mt-3">
          <ArrowLeft size={14} /> Back
        </Link>
      </main>
    );
  }
  const others = announcements.filter((x) => x.id !== a.id);
  return (
    <main>
      <InnerHero
        title="Announcement"
        image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
        breadcrumbs={[{ label: "Announcements", to: "/announcements" }, { label: "Detail" }]}
      />
      <section className="max-w-3xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-center gap-2 text-xs text-brand font-sans-ui">
          <Megaphone size={14} /> Notice <span className="opacity-50">•</span>
          <Calendar size={12} /> {a.date}
        </div>
        <h2 className="text-3xl md:text-4xl text-brand font-semibold mt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {a.text}
        </h2>
        <p className="mt-5 text-[#2a2a2a]/85 leading-relaxed">
          For complete details, contact the relevant department / office at
          KLS VDIT, Haliyal. Notices are published in the order they were
          issued; for academic notices please reach out to the Examination
          Section, and for admissions notices please contact the Office of the
          Principal.
        </p>
      </section>
      <section className="bg-surface-alt/60 py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h3 className="text-2xl text-brand font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Other Announcements</h3>
          <ul className="space-y-2">
            {others.map((o) => (
              <li key={o.id}>
                <Link to={`/announcement/${o.id}`} className="flex items-center justify-between bg-white p-3 border border-brand/15 hover:border-brand">
                  <span className="text-sm text-[#2a2a2a]">{o.text}</span>
                  <ChevronRight size={16} className="text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AnnouncementDetail;
