import React, { useState } from "react";
import { PageHero } from "./About";
import { Check, ArrowRight } from "lucide-react";
import { departments } from "../data/mock";

const Admissions = () => {
  const admissionProgrammes = departments.filter((d) => (d.programmeType || "ug") !== "research");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    phone: "",
    source: "",
    courses: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleCourse = (id) => {
    setForm((p) => ({
      ...p,
      courses: p.courses.includes(id)
        ? p.courses.filter((c) => c !== id)
        : [...p.courses, id],
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    // store locally
    const queue = JSON.parse(localStorage.getItem("vdit_enquiries") || "[]");
    queue.push({ ...form, ts: new Date().toISOString() });
    localStorage.setItem("vdit_enquiries", JSON.stringify(queue));
    setSubmitted(true);
  };

  return (
    <main>
      <PageHero
        title="Admissions 2026-27"
        sub="Join VDIT and shape the next generation of engineers"
        image="https://images.unsplash.com/photo-1750379046723-5ed69ff11571?w=2400&q=80"
      />

      <section id="apply" className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl text-brand mb-4 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            How to Apply
          </h2>
          <p className="text-[#2a2a2a]/85 leading-relaxed mb-6">
            Admission to all undergraduate engineering programmes at VDIT is
            through Karnataka CET / COMEDK / management quota as per VTU and
            Government of Karnataka norms. Postgraduate programmes are
            admitted via PGCET / GATE.
          </p>
          <ol className="space-y-4">
            {[
              "Register and complete KCET / COMEDK / PGCET as applicable",
              "Participate in Karnataka Examinations Authority counselling",
              "Choose VDIT (College code: E184) and your preferred programme",
              "Report at VDIT with original documents and complete enrolment",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-brand text-surface text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-sans-ui font-semibold">
                  {i + 1}
                </span>
                <span className="text-[15px] text-[#2a2a2a]">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white p-6 md:p-8 border border-brand/15 shadow-sm">
          <h3 className="text-2xl text-brand mb-1 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Admission Enquiry 2026-27</h3>
          <p className="text-sm text-[#3a3a3a]/80 mb-5">Fill in your details and our team will get in touch.</p>

          {submitted ? (
            <div className="py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-brand mx-auto flex items-center justify-center text-surface mb-4">
                <Check size={28} />
              </div>
              <p className="text-brand font-semibold text-xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Thank you!</p>
              <p className="text-[#3a3a3a]/85 text-sm">Your enquiry has been recorded. Our admissions team will reach out shortly.</p>
              <button onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", city: "", email: "", phone: "", source: "", courses: [] }); }} className="mt-5 text-brand underline text-sm">Submit another enquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3 font-sans-ui">
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First Name *" className="px-3 py-2.5 border border-brand/30 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 rounded" />
                <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last Name *" className="px-3 py-2.5 border border-brand/30 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 rounded" />
              </div>
              <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City *" className="w-full px-3 py-2.5 border border-brand/30 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 rounded" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email *" className="w-full px-3 py-2.5 border border-brand/30 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 rounded" />
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="w-full px-3 py-2.5 border border-brand/30 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 rounded" />
              <select required value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full px-3 py-2.5 border border-brand/30 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 rounded">
                <option value="">How did you hear about us? *</option>
                <option>Friends &amp; Family</option>
                <option>Web Search</option>
                <option>Social Media</option>
                <option>Education Fair</option>
                <option>Newspaper / Print</option>
              </select>
              <div>
                <p className="text-sm text-[#3a3a3a] mb-2">Courses you are interested in *</p>
                <div className="space-y-2">
                  {admissionProgrammes.map((d) => (
                    <label key={d.id} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" checked={form.courses.includes(d.id)} onChange={() => toggleCourse(d.id)} className="w-4 h-4 accent-brand" />
                      <span>{d.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full bg-brand text-surface py-3 text-sm font-semibold hover:bg-brand-dark transition flex items-center justify-center gap-2 rounded">
                Enquire <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="eligibility" className="bg-surface-alt/60 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl text-brand mb-6 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Eligibility</h2>
          <ul className="space-y-3 text-[15px] text-[#2a2a2a]/85">
            <li>• <strong>B.E. (4 years):</strong> Pass in PUC II / 10+2 with Physics, Mathematics and one of Chemistry/Biology/Computer Science with at least 45% (40% for reserved categories) and a valid KCET / COMEDK rank.</li>
            <li>• <strong>M.Tech (2 years):</strong> A B.E./B.Tech in the relevant branch with first class and a valid PGCET / GATE score.</li>
            <li>• <strong>Lateral Entry (B.E. 2nd year):</strong> A 3-year diploma in engineering with at least 45% and a valid Diploma CET rank.</li>
          </ul>
        </div>
      </section>

      <section id="fees" className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="text-3xl text-brand mb-6 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Fee Structure (Indicative)</h2>
        <div className="overflow-x-auto bg-white border border-brand/15">
          <table className="w-full text-sm">
            <thead className="bg-brand text-surface">
              <tr>
                <th className="text-left p-3">Programme</th>
                <th className="text-left p-3">CET / Govt. Quota</th>
                <th className="text-left p-3">COMEDK</th>
                <th className="text-left p-3">Management Quota</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.E. CSE / CSE (AI & ML)", "₹ 75,000", "₹ 1,75,000", "₹ 2,25,000"],
                ["B.E. ECE / EEE", "₹ 65,000", "₹ 1,55,000", "₹ 1,95,000"],
                ["B.E. Mech / Civil", "₹ 55,000", "₹ 1,35,000", "₹ 1,65,000"],
                ["M.Tech (CSE / DE)", "₹ 60,000", "—", "₹ 1,20,000"],
              ].map((row) => (
                <tr key={row[0]} className="odd:bg-surface/40">
                  {row.map((c, i) => (
                    <td key={i} className="p-3 border-t border-brand/10">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#3a3a3a]/70 mt-3">* Fees are indicative and subject to revision per VTU / KEA / KLS norms each academic year.</p>
      </section>

      <section id="scholarships" className="bg-surface-alt/60 py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl text-brand mb-6 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Scholarships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Merit Scholarships", "Awarded to top KCET / COMEDK rankers and toppers of every semester at VDIT."],
              ["State Government Schemes", "SC/ST/OBC/Minority post-matric scholarships processed through SSP Karnataka."],
              ["VDIT Need-based Aid", "Financial assistance for academically promising students from economically weaker sections."],
              ["AICTE Pragati / Saksham", "Centrally sponsored schemes for girl students and differently-abled students."],
            ].map(([t, d]) => (
              <div key={t} className="bg-white p-5 border-l-4 border-brand">
                <h3 className="text-brand font-semibold text-lg">{t}</h3>
                <p className="text-[#3a3a3a]/85 text-sm mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
