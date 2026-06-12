import React from "react";
import { stats, leaders } from "../data/mock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PageHero = ({ title, sub, image }) => (
  <section className="relative h-[40vh] md:h-[55vh] overflow-hidden">
    <img
      src={image}
      alt=""
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/15" />
    <div className="absolute inset-0 flex items-end pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <p className="text-surface/85 text-xs md:text-sm tracking-[0.25em] font-sans-ui mb-2">
          KLS VDIT
        </p>
        <h1
          className="text-surface text-4xl md:text-6xl font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h1>
        <p className="text-surface/85 mt-2 italic text-base md:text-lg">
          {sub}
        </p>
      </div>
    </div>
  </section>
);

const About = () => {
  return (
    <main>
      <PageHero
        title="About VDIT"
        sub="A Karnatak Law Society initiative · Established in 2004"
        image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
      />

      <section id="kls" className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h2
          className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About KLS
        </h2>
        <div className="prose max-w-none text-[#2a2a2a]/90 leading-relaxed text-[15.5px] space-y-4">
          <p>
            More than three-quarters of a century ago, eminent lawyers and
            visionaries from the North Karnataka region, who also happened to
            be leading lights in the Freedom Struggle, looked far ahead and
            decided that making legal education accessible to the citizens of
            North Karnataka was a worthy goal.
          </p>
          <p>
            Seven eminent lawyers – N. S. Shrikhande, V. A. Naik, V. D. Belvi,
            B. N. Datar, S. N. Angadi, R. Kotbagi and D. S. Paramaj came
            together to form the <strong>Karnatak Law Society</strong> in 1939
            in Belagavi. Today, KLS has the distinction of running schools and
            colleges in the fields of Law, Commerce, Engineering and
            Management Education, with all its institutions earning a
            reputation as leading institutions in Karnataka.
          </p>
        </div>
      </section>

      <section id="history" className="bg-surface-alt/60 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2
            className="text-3xl md:text-4xl text-brand mb-6 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our History
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <div className="text-7xl md:text-8xl text-brand font-semibold leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2004</div>
              <p className="text-[#3a3a3a] italic mt-1">Year of establishment</p>
            </div>
            <div className="md:w-3/5 space-y-4 text-[#2a2a2a]/90 leading-relaxed text-[15.5px]">
              <p>
                Karnatak Law Society, having established a number of
                institutions in the city of Belagavi which have an identity as
                Quality Educational Institutions, started{" "}
                <em>Vishwanathrao Deshpande Institute of Technology (VDIT)</em>{" "}
                at Haliyal in 2004–05 by the initiation and support of Shri R V
                Deshpande, former minister, Government of Karnataka.
              </p>
              <p>
                Within a short span of years, VDIT has developed excellent
                infrastructural facilities and an academic climate to train
                students to meet the challenges posed by the rapidly changing
                techno-economic scenario. The Institute is located on a 26-acre
                campus, cradled by a picturesque landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-3xl text-brand mb-4 font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vision
            </h2>
            <p className="text-[#2a2a2a]/90 leading-relaxed text-[15.5px] italic">
              To nurture talent and enrich society through excellence in
              technical education, research and innovation.
            </p>
          </div>
          <div>
            <h2
              className="text-3xl text-brand mb-4 font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mission
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[#2a2a2a]/90 text-[15.5px] leading-relaxed">
              <li>To augment innovative pedagogy, kindle quest for interdisciplinary learning &amp; enhance conceptual understanding.</li>
              <li>To build competence, professional ethics and develop entrepreneurial thinking.</li>
              <li>To strengthen Industry-Institute Partnership and explore global collaborations.</li>
              <li>To inculcate a culture of socially responsible citizenship.</li>
              <li>To focus on holistic and sustainable development.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2
            className="text-3xl md:text-4xl text-brand mb-10 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Key Facts about VDIT
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {[
              ["Year of establishment", stats.established],
              ["Students at VDIT", stats.students],
              ["Acres of campus", stats.campus],
              ["Teaching Staff", stats.faculty],
              ["Alumni", stats.alumni],
              ["Undergraduate courses", stats.ugCourses],
              ["Post-graduate courses", stats.pgCourses],
              ["Non-teaching staff", "150+"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-5xl md:text-6xl text-brand font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {value}
                </div>
                <p className="text-[#3a3a3a]/85 text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <h2
          className="text-3xl md:text-4xl text-brand mb-10 font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Meet our leaders
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((l) => (
            <div key={l.id} className="text-center bg-white p-6 border border-brand/10">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img src={l.image} alt={l.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-brand font-semibold">{l.name}</h3>
              <p className="text-[#3a3a3a] italic text-sm mt-1">{l.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="alumni" className="bg-surface-alt/60 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl text-brand mb-4 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Alumni Network</h2>
          <p className="text-[#2a2a2a]/90 leading-relaxed text-[15.5px]">
            Over 7,700 alumni of VDIT serve in industry, academia, public service
            and entrepreneurship across India and abroad. The VDIT Alumni
            Association connects current students with mentors, internships and
            career opportunities.
          </p>
          <Link to="/admissions" className="inline-flex items-center gap-2 mt-6 bg-brand text-surface px-7 py-3 text-sm font-sans-ui font-semibold tracking-wider hover:bg-brand-dark transition">
            Join the network <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
export { PageHero };
