import React from "react";
import { PageHero } from "./About";
import { BookOpen, Wifi, Users, Clock } from "lucide-react";

const Library = () => (
  <main>
    <PageHero
      title="Central Library"
      sub="A learning hub with 60,000+ volumes and full digital access"
      image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"
    />
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          [BookOpen, "Volumes", "60,000+"],
          [Users, "Seating", "300"],
          [Wifi, "E-resources", "VTU Consortium, IEEE, Springer, DELNET"],
          [Clock, "Hours", "8:30 AM - 9:00 PM (Mon-Sat)"],
        ].map(([Icon, k, v]) => (
          <div key={k} className="bg-white p-5 border border-brand/15">
            <Icon size={22} className="text-brand" />
            <p className="text-xs uppercase tracking-widest text-[#3a3a3a]/85 mt-2">{k}</p>
            <p className="text-lg text-brand font-semibold mt-1">{v}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-surface-alt/60 py-14">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 vdit-prose">
        <h2 className="text-3xl text-brand font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>About the Library</h2>
        <p>
          The KLS VDIT Central Library is the academic heart of the campus. It
          maintains a comprehensive collection of textbooks, reference works,
          journals, project reports and back-volumes across every engineering
          discipline taught at the institute.
        </p>
        <h3>Resources & Services</h3>
        <ul>
          <li>Open-access stacks with OPAC search and barcoded check-in/out</li>
          <li>Digital library with subscriptions to IEEE Xplore, Springer Link, ScienceDirect, ASME and DELNET</li>
          <li>Discipline-wise reading rooms and group study cubicles</li>
          <li>Daily newspapers in English, Kannada and Marathi</li>
          <li>Photocopy and printing facility</li>
          <li>Project archive with theses from B.E. and M.Tech students</li>
          <li>Reading-room access to research scholars from neighbouring KLS institutions</li>
        </ul>
      </div>
    </section>
  </main>
);

export default Library;
