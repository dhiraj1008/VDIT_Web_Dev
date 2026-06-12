import React from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { findEvent, events, findDept } from "../data/mock";
import { ArrowLeft, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();
  const e = findEvent(id);

  if (!e) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-brand text-xl">Event not found.</p>
        <Link to="/news-events" className="inline-flex items-center gap-2 text-brand underline mt-3">
          <ArrowLeft size={14} /> Back to News & Events
        </Link>
      </main>
    );
  }
  const dept = findDept(e.deptId);
  const others = events.filter((x) => x.id !== e.id).slice(0, 3);

  return (
    <main>
      <InnerHero
        title={e.title}
        image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"
        breadcrumbs={[{ label: "News & Events", to: "/news-events" }, { label: "Event" }]}
      />
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          <Card icon={Calendar} label="Date" value={e.date} />
          <Card icon={Clock} label="Time" value={e.time} />
          <Card icon={MapPin} label="Venue" value={e.venue || "VDIT Campus"} />
        </div>
        <p className="text-[#2a2a2a]/90 leading-relaxed text-[16px]">{e.description}</p>
        {dept && (
          <Link to={`/programme/${dept.id}`} className="inline-flex items-center gap-1 mt-5 text-brand hover:underline text-sm">
            <ChevronRight size={14} /> Hosted by {dept.short} — visit department
          </Link>
        )}
        <div className="mt-10 flex flex-wrap gap-3">
          <button className="bg-brand text-surface px-6 py-2.5 text-sm font-sans-ui font-semibold hover:bg-brand-dark transition">
            Add to Calendar
          </button>
          <Link to="/news-events" className="border border-brand/40 text-brand px-6 py-2.5 text-sm font-sans-ui font-semibold hover:bg-brand hover:text-surface transition">
            All Events
          </Link>
        </div>
      </section>
      <section className="bg-surface-alt/60 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h3 className="text-2xl text-brand font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Other Events</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link to={`/event/${o.id}`} key={o.id} className="border-l-4 border-brand bg-white p-5 card-hover block">
                <div className="flex items-center gap-2 text-brand text-xs tracking-wider font-sans-ui mb-2">
                  <Calendar size={13} />
                  {o.date} · {o.time}
                </div>
                <h4 className="text-[#2a2a2a] font-semibold leading-snug">{o.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const Card = ({ icon: Icon, label, value }) => (
  <div className="bg-white p-4 border border-brand/15">
    <div className="flex items-center gap-2 text-brand"><Icon size={16} /> <span className="text-xs uppercase tracking-widest font-sans-ui font-semibold">{label}</span></div>
    <p className="mt-1 text-sm text-[#2a2a2a]">{value}</p>
  </div>
);

export default EventDetail;
