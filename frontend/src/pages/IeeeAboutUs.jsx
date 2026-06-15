import React from "react";
import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import {
  ArrowLeft,
  Calendar,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Rocket,
  Users,
} from "lucide-react";

const StatCard = ({ value, label }) => (
  <div className="bg-white border border-brand/15 p-5 text-center">
    <div
      className="text-3xl md:text-4xl font-semibold text-brand"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {value}
    </div>
    <div className="mt-1 text-xs uppercase tracking-widest text-[#2a2a2a]/70 font-semibold">
      {label}
    </div>
  </div>
);

const InfoBlock = ({ icon: Icon, title, children }) => (
  <div className="bg-white border border-brand/15 p-6">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full border border-brand/20 flex items-center justify-center text-brand">
        <Icon size={20} />
      </div>
      <h3
        className="text-2xl text-brand font-semibold"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {title}
      </h3>
    </div>
    <div className="text-[15.5px] text-[#2a2a2a]/85 leading-relaxed">{children}</div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="mt-4 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-[15px] text-[#2a2a2a]/85 leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const IeeeAboutUs = () => {
  return (
    <main>
      <InnerHero
        title="About IEEE"
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400"
        breadcrumbs={[
          { label: "Associations & Innovation Hub", to: "/associations" },
          { label: "IEEE", to: "/associations/ieee" },
          { label: "About Us" },
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

              <h2
                className="text-3xl md:text-5xl text-brand font-semibold leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                A journey of learning, leadership, collaboration and inspiration
              </h2>

              <p className="mt-5 text-[16px] text-[#2a2a2a]/85 leading-relaxed">
                IEEE is a reflection of countless journeys, shaped by learning,
                collaboration and inspiration. Being a part of IEEE has been a
                transformative experience for KLS VDIT IEEE Student Branch. What began
                as a simple step toward exploring technical opportunities soon evolved
                into a journey of growth, leadership and meaningful connections.
              </p>

              <p className="mt-4 text-[16px] text-[#2a2a2a]/85 leading-relaxed">
                KLS VDIT’s association with IEEE began in 2020 by forming a Student
                Branch. The institution was looking for exposure to real-world
                technologies, opportunities beyond academics, and a platform to connect
                with academicians and industry professionals. IEEE provided all this and
                more.
              </p>
            </section>

            <InfoBlock icon={Lightbulb} title="What IEEE Means to VDIT">
              <p>
                For VDIT IEEE Student Branch, IEEE represents a legacy of excellence and
                innovation, a community that nurtures growth, and a platform that
                empowers individuals.
              </p>

              <BulletList
                items={[
                  "Exposure to real-world technologies.",
                  "Opportunities beyond academics.",
                  "A platform to connect with academicians and industry professionals.",
                  "A community that encourages innovation, collaboration and professional growth.",
                ]}
              />
            </InfoBlock>

            <InfoBlock icon={Rocket} title="Experiential Learning">
              <p>
                One of the most impactful aspects of IEEE has been its emphasis on
                experiential learning. Through IEEE activities, students bridge the gap
                between theoretical knowledge and practical application.
              </p>

              <BulletList
                items={[
                  "Participation in technical workshops and hackathons.",
                  "Engagement in hands-on projects.",
                  "Expert talks from industry leaders.",
                  "Virtual conferences, webinars, online competitions and collaborative projects.",
                ]}
              />
            </InfoBlock>

            <InfoBlock icon={Users} title="Leadership and Volunteerism">
              <p>
                IEEE is not just about learning; it is also about leading and
                contributing. Students serving in branch roles gain valuable skills in
                teamwork, planning, communication and networking.
              </p>

              <BulletList
                items={[
                  "Student Branch Chair, Vice Chair, Treasurer and Volunteer Coordinator roles help students develop leadership.",
                  "Organizing events such as national-level hackathons teaches teamwork and responsibility.",
                  "The IEEE Student Branch culture encourages students to take initiative and make a difference.",
                ]}
              />
            </InfoBlock>

            <InfoBlock icon={Network} title="Professional Network and Community">
              <p>
                One of the most enriching aspects of the IEEE journey has been the
                people. Through IEEE, members connect with fellow technology enthusiasts,
                mentors and industry professionals who share real-world insights.
              </p>

              <BulletList
                items={[
                  "Fellow members passionate about technology.",
                  "Mentors who guide and inspire.",
                  "Industry professionals who share real-world experience.",
                  "A strong professional network that supports student growth.",
                ]}
              />
            </InfoBlock>

            <InfoBlock icon={Handshake} title="IEEE Bangalore Section and Mangalore Subsection">
              <p>
                KLS VDIT’s journey with IEEE Bangalore Section and IEEE Mangalore
                Subsection has been one of learning, growth and inspiration. These
                communities support student branches and promote collaboration between
                academia and industry.
              </p>

              <BulletList
                items={[
                  "Supporting a vast network of student branches across Karnataka.",
                  "Organizing high-quality conferences and technical events.",
                  "Promoting collaboration between academia and industry.",
                  "Enhancing technical and personal development for professional and student members.",
                ]}
              />
            </InfoBlock>

            <InfoBlock icon={Globe2} title="Vision for the Future">
              <p>
                As IEEE Student Branch moves forward, it envisions stronger work in
                emerging technologies, deeper industry-academia partnerships, increased
                opportunities for students and wider outreach for societal impact.
              </p>

              <BulletList
                items={[
                  "Greater focus on emerging technologies.",
                  "Stronger industry-academia partnerships.",
                  "Increased opportunities for students and young professionals.",
                  "Wider outreach to create societal impact.",
                ]}
              />
            </InfoBlock>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-32">
            <div className="bg-brand text-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold opacity-80">
                Student Branch
              </p>
              <h3
                className="text-3xl font-semibold mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                VDIT IEEE Student Branch
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                A platform for students to learn, lead, collaborate and connect with the
                global technical community.
              </p>
            </div>

            <StatCard value="2020" label="Established" />
            <StatCard value="STB99377" label="Branch Code" />

            <div className="bg-white border border-brand/15 p-6">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold">
                Key Focus Areas
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-[#2a2a2a]/85">
                <li className="flex items-start gap-2">
                  <Calendar size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Technical workshops and hackathons
                </li>
                <li className="flex items-start gap-2">
                  <Users size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Leadership and volunteering
                </li>
                <li className="flex items-start gap-2">
                  <Network size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Professional networking
                </li>
                <li className="flex items-start gap-2">
                  <Rocket size={16} className="text-brand mt-0.5 flex-shrink-0" />
                  Emerging technologies
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default IeeeAboutUs;
