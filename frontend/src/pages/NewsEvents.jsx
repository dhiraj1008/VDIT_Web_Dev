import React, { useState } from "react";
import { Link } from "react-router-dom";
import { newsItems, events } from "../data/mock";
import { PageHero } from "./About";
import { Calendar } from "lucide-react";

const NewsEvents = () => {
  const [tab, setTab] = useState("news");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(newsItems.map((n) => n.category).filter(Boolean)))];
  const filteredNews = filter === "All" ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <main>
      <PageHero
        title="News & Events"
        sub="What's happening at VDIT"
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=2400&q=80"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex gap-2 border-b border-brand/20 mb-8 font-sans-ui">
          {[
            ["news", "News"],
            ["events", "Events"],
          ].map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-5 py-3 text-sm font-semibold tracking-widest transition-colors ${
                tab === k
                  ? "text-brand border-b-2 border-brand"
                  : "text-[#3a3a3a] hover:text-brand"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {tab === "news" ? (
          <>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-3 py-1.5 text-xs rounded-full font-sans-ui ${
                    filter === c
                      ? "bg-brand text-surface"
                      : "bg-white text-brand border border-brand/30"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((n) => (
                <Link
                  to={`/news/${n.id}`}
                  key={n.id}
                  className="bg-white border border-brand/10 card-hover block"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={n.image}
                      alt={n.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-sans-ui">
                      <span className="text-brand tracking-wider">{n.date}</span>
                      {n.category && (
                        <span className="bg-brand/10 text-brand px-2 py-0.5 rounded-full">
                          {n.category}
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-brand text-xl mt-2 font-semibold leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {n.title}
                    </h3>
                    <p className="text-[#3a3a3a]/85 text-sm mt-3 leading-relaxed line-clamp-3">
                      {n.description}
                    </p>
                    <span className="text-xs text-brand underline mt-3 inline-block">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <Link
                to={`/event/${e.id}`}
                key={e.id}
                className="border-l-4 border-brand bg-white p-6 card-hover block"
              >
                <div className="flex items-center gap-2 text-brand text-xs tracking-wider font-sans-ui mb-2">
                  <Calendar size={14} />
                  {e.date} · {e.time}
                </div>
                <h3 className="text-[#2a2a2a] text-xl font-semibold leading-snug">{e.title}</h3>
                {e.venue && (
                  <p className="text-xs text-[#3a3a3a]/70 mt-2">Venue: {e.venue}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default NewsEvents;
