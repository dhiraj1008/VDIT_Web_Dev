import React from "react";
import { PageHero } from "./About";
import { Link } from "react-router-dom";
import { Users, Globe, Award, MessageSquare } from "lucide-react";

const Alumni = () => (
  <main>
    <PageHero
      title="Alumni Network"
      sub="7,700+ engineers building the future across the world"
      image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=2400&q=80"
    />
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          [Users, "Alumni", "7,700+"],
          [Globe, "Countries", "22"],
          [Award, "Distinguished Alumni", "160+"],
          [MessageSquare, "Mentorship Pool", "450 active"],
        ].map(([Icon, k, v]) => (
          <div key={k} className="bg-white p-5 border border-brand/15">
            <Icon size={22} className="text-brand" />
            <p className="text-xs uppercase tracking-widest text-[#3a3a3a]/85 mt-2">{k}</p>
            <p className="text-3xl text-brand font-semibold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl text-brand font-semibold mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Notable Alumni</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          ["Mr. Anand R. Patil, Batch 2008", "Engineering Manager, leading SaaS company"],
          ["Ms. Priya S. Hegde, Batch 2010", "Founder, GreenGrid Energy Pvt. Ltd."],
          ["Mr. Sandeep V. Naik, Batch 2012", "Senior Scientist, ISRO"],
          ["Ms. Smita G. Joshi, Batch 2014", "Architect, Infrastructure Cloud, Bengaluru"],
          ["Mr. Vinod B. Bhat, Batch 2009", "Director, Construction Projects, GCC region"],
          ["Dr. Mahesh A. Patil, Batch 2007", "Associate Professor, IIT Dharwad"],
        ].map(([n, r]) => (
          <div key={n} className="bg-white p-5 border-l-4 border-brand">
            <h3 className="text-brand font-semibold">{n}</h3>
            <p className="text-sm italic text-[#3a3a3a]">{r}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-surface-alt/60 py-14 text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl md:text-4xl text-brand font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Join the VDIT Alumni Network</h2>
        <p className="text-[#2a2a2a]/85 leading-relaxed">
          Reconnect with your batch, mentor current students, attend annual
          alumni meets, and contribute to your alma mater. Registration is open
          for all VDIT graduates.
        </p>
        <Link to="/admissions" className="inline-block mt-6 bg-brand text-surface px-7 py-3 text-sm font-sans-ui font-semibold tracking-wider hover:bg-brand-dark transition">
          Register on Alumni Portal
        </Link>
      </div>
    </section>
  </main>
);

export default Alumni;
