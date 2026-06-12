import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "./About";
import { studentClubs, findDept } from "../data/mock";

const categories = ["All", "Technical", "Cultural", "Sports", "Outreach", "Innovation"];

const StudentClubs = () => {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? studentClubs : studentClubs.filter((c) => c.category === cat);

  return (
    <main>
      <PageHero
        title="Student Clubs & Activities"
        sub="Where engineering meets curiosity, creativity and community"
        image="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2400&q=80"
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 text-xs rounded-full font-sans-ui font-semibold tracking-wider ${
                cat === c
                  ? "bg-brand text-surface"
                  : "bg-white text-brand border border-brand/30 hover:bg-brand/10"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((club) => {
            const dept = club.deptId ? findDept(club.deptId) : null;
            return (
              <article key={club.id} className="bg-white border border-brand/15 overflow-hidden card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={club.image} alt={club.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-brand tracking-widest font-sans-ui">{club.category.toUpperCase()}</span>
                  <h3 className="text-brand text-xl font-semibold mt-1 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {club.name}
                  </h3>
                  <p className="text-sm text-[#3a3a3a]/85 mt-2 leading-relaxed">{club.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <p className="text-[#3a3a3a] italic">Faculty Advisor: {club.advisor}</p>
                    {dept && (
                      <Link to={`/programme/${dept.id}`} className="text-brand hover:underline">
                        {dept.short}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default StudentClubs;
