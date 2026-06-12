import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { newsItems, departments, events, faculty, studentClubs } from "../data/mock";

const pages = [
  { title: "About VDIT", path: "/about/about-vdit", desc: "Overview of KLS VDIT, mission, history" },
  { title: "Principal's Message", path: "/about/principals-message", desc: "Message from Dr. V. A. Kulkarni" },
  { title: "Governing Bodies", path: "/about/governing-bodies", desc: "Local Governing Council and KLS" },
  { title: "People @ VDIT", path: "/about/people", desc: "Faculty, administration, researchers" },
  { title: "Committees & Chairs", path: "/about/committees", desc: "Standing committees at VDIT" },
  { title: "Rules & Regulations", path: "/about/rules", desc: "Code of conduct and academic rules" },
  { title: "Right to Information", path: "/about/rti", desc: "RTI disclosures and PIO" },
  { title: "IQAC", path: "/about/iqac", desc: "Internal Quality Assurance Cell" },
  { title: "Mandatory Disclosure", path: "/about/mandatory-disclosure", desc: "AICTE mandatory disclosure" },
  { title: "Financial Statements", path: "/about/financial-statements", desc: "Audited financials" },
  { title: "Academics", path: "/academics", desc: "Programmes and departments" },
  { title: "Admissions", path: "/admissions", desc: "How to apply, fees, scholarships" },
  { title: "Research", path: "/research", desc: "Research areas, publications, centres" },
  { title: "Campus", path: "/campus", desc: "Library, hostels, sports, facilities" },
  { title: "News & Events", path: "/news-events", desc: "Latest news and upcoming events" },
  { title: "Placements", path: "/placements", desc: "Recruiters, statistics, training" },
  { title: "Library", path: "/library", desc: "VDIT Central Library" },
  { title: "Alumni", path: "/alumni", desc: "VDIT Alumni Network" },
];

const SearchModal = ({ open, onClose }) => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return null;
    const Q = q.toLowerCase();
    const pageHits = pages.filter(
      (p) =>
        p.title.toLowerCase().includes(Q) || p.desc.toLowerCase().includes(Q)
    );
    const deptHits = departments
      .filter(
        (d) =>
          d.name.toLowerCase().includes(Q) ||
          d.short.toLowerCase().includes(Q) ||
          (d.research || "").toLowerCase().includes(Q)
      )
      .map((d) => ({ title: d.name, path: `/programme/${d.id}`, desc: d.research }));
    const newsHits = newsItems
      .filter((n) => n.title.toLowerCase().includes(Q) || n.description.toLowerCase().includes(Q))
      .map((n) => ({ title: n.title, path: `/news/${n.id}`, desc: n.date }));
    const evHits = events
      .filter((e) => e.title.toLowerCase().includes(Q))
      .map((e) => ({ title: e.title, path: `/event/${e.id}`, desc: e.date }));
    const facHits = faculty
      .filter(
        (f) =>
          f.name.toLowerCase().includes(Q) ||
          (f.areas || []).join(" ").toLowerCase().includes(Q) ||
          (f.role || "").toLowerCase().includes(Q)
      )
      .map((f) => ({ title: f.name, path: `/faculty/${f.id}`, desc: `${f.role}` }));
    const clubHits = studentClubs
      .filter(
        (c) =>
          c.name.toLowerCase().includes(Q) ||
          c.description.toLowerCase().includes(Q)
      )
      .map((c) => ({ title: c.name, path: `/student-clubs`, desc: c.category }));
    return { pageHits, deptHits, newsHits, evHits, facHits, clubHits };
  }, [q]);

  if (!open) return null;

  const go = (path) => {
    onClose();
    setQ("");
    navigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="bg-surface w-full max-w-2xl shadow-2xl border border-brand/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 p-4 border-b border-brand/15">
          <Search size={20} className="text-brand" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search programmes, news, events..."
            className="flex-1 bg-transparent text-[#2a2a2a] focus:outline-none text-base font-sans-ui"
          />
          <button
            onClick={onClose}
            className="text-brand p-1 hover:bg-brand/10 rounded"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {!results ? (
            <div className="p-6">
              <p className="text-xs text-brand tracking-widest font-sans-ui font-semibold mb-3">
                QUICK LINKS
              </p>
              <div className="grid grid-cols-2 gap-1">
                {pages.slice(0, 10).map((p) => (
                  <button
                    key={p.path}
                    onClick={() => go(p.path)}
                    className="text-left px-3 py-2 text-sm hover:bg-brand/10 rounded"
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-2">
              {[
                ["Pages", results.pageHits],
                ["Programmes", results.deptHits],
                ["Faculty", results.facHits],
                ["News", results.newsHits],
                ["Events", results.evHits],
                ["Clubs", results.clubHits],
              ].map(([label, list]) =>
                list.length ? (
                  <div key={label} className="mb-2">
                    <div className="px-4 pt-3 pb-1 text-[11px] tracking-widest text-brand font-sans-ui font-semibold">
                      {label.toUpperCase()}
                    </div>
                    {list.map((r, i) => (
                      <button
                        key={`${label}-${i}`}
                        onClick={() => go(r.path)}
                        className="w-full text-left px-4 py-2.5 hover:bg-brand/10 transition"
                      >
                        <div className="text-sm text-[#2a2a2a] font-medium">{r.title}</div>
                        {r.desc && (
                          <div className="text-xs text-[#3a3a3a]/75 mt-0.5">{r.desc}</div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : null
              )}
              {!results.pageHits.length &&
                !results.deptHits.length &&
                !results.facHits.length &&
                !results.newsHits.length &&
                !results.evHits.length &&
                !results.clubHits.length && (
                  <div className="p-8 text-center text-sm text-[#3a3a3a]/70">
                    No matches for "{q}"
                  </div>
                )}
            </div>
          )}
        </div>
        <div className="px-4 py-2 border-t border-brand/15 text-[11px] text-[#3a3a3a]/70 font-sans-ui flex justify-between">
          <span>Press Esc to close</span>
          <span>{results ? "Live results" : "Start typing to search"}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
