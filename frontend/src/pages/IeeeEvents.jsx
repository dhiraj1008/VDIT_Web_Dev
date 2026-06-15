import React from "react";
import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Cpu,
  Lightbulb,
  School,
} from "lucide-react";

const events = [
  {
    title: '24 Hr. National Level Hackathon "Code Battle-2k25"',
    category: "Hackathon",
    date: "11th & 12th March 2025",
    time: "9:30 am to 4:00 pm",
    venue: "VDIT Campus",
    icon: Trophy,
    summary:
      'IEEE Student Branch of KLS VDIT organized a 24 Hours National Level Hackathon, "Code Battle-2k25" - Coding for Sustainability, supported by IEEE Mangalore Subsection.',
    highlights: [
      "78 teams with 297 students registered for the event.",
      "71 teams with 267 students reported and participated.",
      "Students from Karnataka and non-Karnataka engineering colleges participated.",
      "IEEE professional members, IEEE student members, and 220 non-IEEE students attended.",
      "Prize money and certificates were distributed to winners and participants during the valedictory.",
    ],
    themes: [
      "Women Safety & Security - predictive safety analytics and peer-to-peer safety networks.",
      "AI Innovation - AI-driven campus engagement and recruitment solutions.",
      "Cyber Security - real-time threat detection and cybersecurity defense.",
      "Disaster Response - real-time disaster alert and relief coordination platforms.",
      "Healthcare - smart care appointment and queue management system.",
    ],
    guests: [
      "Chief Guest: Mr. Sripad Krishnamurthy, Director & Head, Technical Capability Development, Adobe India, Bangalore.",
      "Guest of Honor: Mr. Narayan Tosur, CEO & MD, Praxien Tech. Pvt. Ltd., Bangalore.",
      "Dr. V. A. Kulkarni, Principal, delivered the presidential remarks.",
      "Dr. Arun Kakhandki, IEEE Branch Counselor, and Mr. Harsh Heralgi, Chair-IEEE Student Branch, were present.",
    ],
  },
  {
    title: "Atal Tinkering Lab (ATL) Mentoring Workshop",
    category: "IEEE SIGHT Activity",
    date: "20th November 2025",
    time: "11:00 am to 3:00 pm",
    venue: "GHS, Benachi",
    icon: School,
    summary:
      "IEEE Student Branch of KLS VDIT organized a one-day Atal Tinkering Lab Mentoring Workshop as part of IEEE SIGHT activity for the students of Government High School, Benachi village. The workshop was sponsored by IEEE Mangalore Subsection.",
    highlights: [
      "Students from 8th, 9th, and 10th standard actively participated.",
      "All 28 IEEE student members were present.",
      "The workshop included practical demonstrations, creative problem solving, and interactive learning activities.",
      "The event promoted innovation and curiosity among young students.",
      "Sri S. S. Benakanal, Principal of GHS Benachi, and school teachers cooperated in successful conduction of the event.",
    ],
    themes: [
      "Innovation and curiosity.",
      "Creative problem solving.",
      "Interactive learning.",
      "Practical demonstrations.",
    ],
    guests: [
      "Dr. Arun Kakhandki, IEEE SB Counselor.",
      "Prof. Suraj Kadli, Faculty Advisor, IEEE SB.",
      "Ms. Akshata Bagewadi, Chair, IEEE SB.",
      "Mr. Abhishek, Student Chair-SAC.",
    ],
  },
  {
    title: "One Day Hands-on Workshop on PCB Design",
    category: "Workshop",
    date: "6th April 2026",
    time: "9:30 am to 4:00 pm",
    venue: "CAED Lab",
    icon: Cpu,
    summary:
      "IEEE Student Branch of KLS VDIT conducted a one-day hands-on workshop on PCB Design, sponsored by IEEE Mangalore Subsection.",
    highlights: [
      "The resource person was Mr. Vaibhav Sugandhi, Founder & CEO, E-ARTKEY Innovation Pvt. Ltd., Hubli.",
      "Students of 4th semester ECE and EEE branches registered for the workshop.",
      "51 students and 15 IEEE student members attended the workshop.",
      "The workshop helped students understand PCB designing and modern PCB fabrication tools.",
    ],
    themes: [
      "Basics of PCB designing.",
      "Advanced techniques, skills, and modern tools for PCB designing.",
      "PCB fabrication process.",
      "Multilayer, SMT, and HDI PCB concepts.",
      "Packaging concepts.",
    ],
    guests: [
      "Dr. V. A. Kulkarni, Principal.",
      "Dr. Arun Kakhandki, IEEE SB Counselor.",
      "Ms. Sanjana Dhawale, Chair, IEEE SB.",
      "Mr. Chaya Madli, SAC Chair.",
      "Ms. Nandita K., Secretary.",
    ],
  },
];

const EventMeta = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-2 text-sm text-[#2a2a2a]/80">
    <Icon size={16} className="text-brand mt-0.5 flex-shrink-0" />
    <div>
      <span className="font-semibold text-brand">{label}: </span>
      <span>{value}</span>
    </div>
  </div>
);

const BulletList = ({ title, items }) => (
  <div>
    <h4 className="text-sm uppercase tracking-widest text-brand font-semibold mb-3">
      {title}
    </h4>

    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] text-[#2a2a2a]/85 leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const EventCard = ({ event }) => {
  const Icon = event.icon;

  return (
    <article className="bg-white border border-brand/15 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="w-14 h-14 rounded-full border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
          <Icon size={26} />
        </div>

        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">
            {event.category}
          </p>

          <h2
            className="mt-2 text-3xl md:text-4xl text-brand font-semibold leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {event.title}
          </h2>

          <div className="grid sm:grid-cols-3 gap-3 mt-5">
            <EventMeta icon={Calendar} label="Date" value={event.date} />
            <EventMeta icon={Clock} label="Time" value={event.time} />
            <EventMeta icon={MapPin} label="Venue" value={event.venue} />
          </div>

          <p className="mt-5 text-[16px] text-[#2a2a2a]/85 leading-relaxed">
            {event.summary}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <BulletList title="Highlights" items={event.highlights} />
            <BulletList title="Themes / Focus Areas" items={event.themes} />
          </div>

          <div className="mt-8">
            <BulletList title="Guests / Dignitaries" items={event.guests} />
          </div>
        </div>
      </div>
    </article>
  );
};

const IeeeEvents = () => {
  return (
    <main>
      <InnerHero
        title="IEEE Events"
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400"
        breadcrumbs={[
          { label: "Associations & Innovation Hub", to: "/associations" },
          { label: "IEEE", to: "/associations/ieee" },
          { label: "Events" },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          <Link to="/associations/ieee" className="uppercase hover:underline">
            Home
          </Link>
          <Link to="/associations/ieee/about-us" className="uppercase hover:underline">
            About Us
          </Link>
          <Link to="/associations/ieee/events" className="uppercase hover:underline">
            Events
          </Link>
          <Link to="/associations/ieee#achievements" className="uppercase hover:underline">
            Achievements
          </Link>
          <Link to="/associations/ieee/execom" className="uppercase hover:underline">
            Execom
          </Link>
          <Link to="/associations/ieee" className="uppercase hover:underline">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <Link
          to="/associations/ieee"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          Back to IEEE
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white border border-brand/15 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.28em] text-brand font-semibold mb-3">
                VDIT IEEE Student Branch
              </p>

              <h1
                className="text-3xl md:text-5xl text-brand font-semibold leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Events, workshops and technical activities
              </h1>

              <p className="mt-5 text-[16px] text-[#2a2a2a]/85 leading-relaxed">
                The IEEE Student Branch of KLS VDIT organizes technical workshops,
                hackathons, mentoring sessions, and hands-on learning programs to help
                students build practical skills, leadership qualities, innovation mindset,
                and professional exposure.
              </p>
            </section>

            {events.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-32">
            <div className="bg-brand text-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold opacity-80">
                IEEE Activities
              </p>

              <h3
                className="text-3xl font-semibold mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Learning through experience
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                IEEE events at KLS VDIT focus on technical learning, innovation,
                collaboration, leadership, and community impact.
              </p>
            </div>

            <div className="bg-white border border-brand/15 p-6">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold">
                Event Summary
              </h4>

              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy size={18} className="text-brand mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#2a2a2a]">
                      Code Battle-2k25
                    </div>
                    <div className="text-sm text-[#2a2a2a]/70">
                      National-level 24-hour hackathon
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <School size={18} className="text-brand mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#2a2a2a]">
                      ATL Mentoring Workshop
                    </div>
                    <div className="text-sm text-[#2a2a2a]/70">
                      IEEE SIGHT activity at GHS Benachi
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu size={18} className="text-brand mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm text-[#2a2a2a]">
                      PCB Design Workshop
                    </div>
                    <div className="text-sm text-[#2a2a2a]/70">
                      Hands-on technical workshop
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-brand/15 p-6">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold">
                Key Focus
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-[#2a2a2a]/85">
                <li className="flex items-start gap-2">
                  <Lightbulb size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Innovation and creativity
                </li>
                <li className="flex items-start gap-2">
                  <Users size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Student participation
                </li>
                <li className="flex items-start gap-2">
                  <Cpu size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Practical technical skills
                </li>
                <li className="flex items-start gap-2">
                  <Trophy size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Competitive learning
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default IeeeEvents;
