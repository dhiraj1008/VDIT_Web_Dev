import React from "react";
import { PageHero } from "./About";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, FileText, Users } from "lucide-react";

const Students = () => (
  <main>
    <PageHero
      title="Students"
      sub="Resources, services and opportunities for the VDIT student community"
      image="https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?w=2400"
    />
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          [Calendar, "Academic Calendar", "View the official calendar for the current academic year.", "/academics#calendar"],
          [FileText, "Time Tables", "Class time tables for all departments and semesters.", "/academics#timetables"],
          [BookOpen, "Library", "Books, journals and digital resources.", "/library"],
          [Users, "Hostels", "Hostel admission, mess and rules.", "/campus#hostels"],
          [FileText, "Fee Payment", "Online fee portal and receipts.", "/admissions#fees"],
          [FileText, "Grievance Redressal", "Submit a grievance to the relevant committee.", "/about/committees"],
          [Users, "NSS & Clubs", "NSS, NCC, sports and cultural club details.", "/campus#clubs"],
          [FileText, "Examination", "Exam schedule, hall ticket and results portal.", "/academics#exam"],
          [BookOpen, "VDIT Newsletter", "Read the latest monthly newsletter.", "/news-events"],
        ].map(([Icon, t, d, link]) => (
          <Link key={t} to={link} className="bg-white p-5 border border-brand/15 card-hover block">
            <Icon size={22} className="text-brand mb-2" />
            <h3 className="text-brand font-semibold">{t}</h3>
            <p className="text-sm text-[#3a3a3a]/85 mt-1">{d}</p>
          </Link>
        ))}
      </div>
    </section>
  </main>
);

export default Students;
