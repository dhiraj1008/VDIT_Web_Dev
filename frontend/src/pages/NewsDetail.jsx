import React from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { findNews, newsItems, findDept } from "../data/mock";
import { ArrowLeft, Calendar, Tag, ChevronRight } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();
  const n = findNews(id);

  if (!n) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-brand text-xl">News story not found.</p>
        <Link to="/news-events" className="inline-flex items-center gap-2 text-brand underline mt-3">
          <ArrowLeft size={14} /> Back to News & Events
        </Link>
      </main>
    );
  }

  const dept = findDept(n.deptId);
  const related = newsItems.filter((x) => x.id !== n.id).slice(0, 3);

  return (
    <main>
      <InnerHero
        title={n.title}
        image={n.image}
        breadcrumbs={[{ label: "News & Events", to: "/news-events" }, { label: n.category || "Story" }]}
      />
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-wrap items-center gap-4 text-xs font-sans-ui mb-6">
          <span className="flex items-center gap-1 text-brand"><Calendar size={13} /> {n.date}</span>
          {n.category && <span className="flex items-center gap-1 text-brand"><Tag size={13} /> {n.category}</span>}
          {dept && (
            <Link to={`/programme/${dept.id}`} className="flex items-center gap-1 text-brand hover:underline">
              <ChevronRight size={13} /> {dept.short}
            </Link>
          )}
        </div>
        <p className="text-lg italic text-brand mb-5">{n.description}</p>
        <p className="text-[#2a2a2a]/90 leading-relaxed text-[16px]">{n.body}</p>
      </section>

      <section className="bg-surface-alt/60 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h3 className="text-2xl text-brand font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>More News</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link to={`/news/${r.id}`} key={r.id} className="bg-white card-hover overflow-hidden border border-brand/10 block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-brand tracking-wider font-sans-ui">{r.date}</span>
                  <h4 className="text-brand text-lg mt-1 font-semibold leading-snug">{r.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;
