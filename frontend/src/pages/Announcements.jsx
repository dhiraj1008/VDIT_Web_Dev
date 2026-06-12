import React from "react";
import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { announcements } from "../data/mock";
import { Megaphone, Calendar } from "lucide-react";

const Announcements = () => (
  <main>
    <InnerHero
      title="Announcements"
      image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
      breadcrumbs={[{ label: "Announcements" }]}
    />
    <section className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
      <div className="space-y-3">
        {announcements.map((a) => (
          <Link
            to={`/announcement/${a.id}`}
            key={a.id}
            className="flex items-start gap-4 bg-white p-5 border border-brand/15 card-hover"
          >
            <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
              <Megaphone size={18} />
            </div>
            <div className="flex-1">
              <p className="text-[#2a2a2a] font-medium leading-snug">{a.text}</p>
              <p className="text-xs text-brand mt-1 flex items-center gap-1 font-sans-ui"><Calendar size={12} /> {a.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default Announcements;
