import React from "react";
import { useParams, Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { findFaculty, findDept, facultyByDept } from "../data/mock";
import { ArrowLeft, Mail, Phone, Linkedin, BookOpen, FlaskConical, Award, GraduationCap, Briefcase } from "lucide-react";

const splitRecognitionItem = (item) => {
  if (typeof item !== "string") return [item];

  return item
    .replace(/\s+(?:and|&)\s+(?=(?:A\s+member|Life\s+Member|Member(?:\s+of)?|IEI|ISTE|IAENG|IETE|IEEE|ACM|CSI)\b)/gi, "\n")
    .replace(/\s*[,/]\s+(?=(?:A\s+member|Life\s+Member|Member(?:\s+of)?|IEI|ISTE|IAENG|IETE|IEEE|ACM|CSI)\b)/gi, "\n")
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean);
};

const getRecognitionItems = (recognition) => {
  const items = recognition && recognition.length > 0 ? recognition : ["information to be updated"];
  return items.flatMap(splitRecognitionItem);
};

const FacultyProfile = () => {
  const { id } = useParams();
  const f = findFaculty(id);

  if (!f) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-brand text-xl">Faculty profile not found.</p>
        <Link to="/about/people" className="inline-flex items-center gap-2 text-brand underline mt-3">
          <ArrowLeft size={14} /> Back to People
        </Link>
      </main>
    );
  }
  const dept = findDept(f.deptId);
  const peers = facultyByDept(f.deptId).filter((p) => p.id !== f.id);

  return (
    <main>
      <InnerHero
        title={f.name}
        image={dept ? dept.image : "https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"}
        breadcrumbs={[
          { label: "About", to: "/about" },
          { label: "People @ VDIT", to: "/about/people" },
          { label: f.name },
        ]}
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <aside className="space-y-5">
            <div className="aspect-[3/4] overflow-hidden bg-surface-alt">
              <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
            </div>
            <div className="bg-white border border-brand/15 p-5 space-y-3 text-sm">
              <div>
                <p className="text-brand font-semibold text-lg">{f.name}</p>
                <p className="italic text-[#3a3a3a]">{f.role}</p>
                {dept && (
                  <Link to={`/programme/${dept.id}`} className="text-xs text-brand underline mt-1 inline-block">
                    {dept.short} — {dept.name}
                  </Link>
                )}
              </div>
              <div className="pt-2 border-t border-brand/10 space-y-1.5">
                <p className="flex items-center gap-2"><Mail size={14} className="text-brand" /> <a href={`mailto:${f.email}`} className="hover:underline">{f.email}</a></p>
                <p className="flex items-center gap-2"><Phone size={14} className="text-brand" /> {f.phone}</p>
                <div className="flex items-center gap-3 pt-1">
                    {f.linkedin && (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${f.name} LinkedIn profile`}
                        title="LinkedIn"
                        className="faculty-profile-icon-link"
                      >
                        <Linkedin size={18} strokeWidth={2.1} />
                      </a>
                    )}
                    {f.irins && (
                      <a
                        href={f.irins}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${f.name} IRINS profile`}
                        title="IRINS"
                        className="faculty-profile-icon-link"
                      >
                        <span
                          className="irins-logo-mask"
                          style={{
                            maskImage: "url('/Logos/Irins_Logo.png')",
                            WebkitMaskImage: "url('/Logos/Irins_Logo.png')",
                          }}
                          aria-hidden="true"
                        />
                      </a>
                    )}
                    <span
                      className="faculty-profile-icon-link faculty-profile-static-logo"
                      title="Vidwan"
                      aria-label="Vidwan logo"
                    >
                      <span
                        className="vidwan-logo-mask"
                        style={{
                          maskImage: "url('/Logos/Vidwan_Logo.png')",
                          WebkitMaskImage: "url('/Logos/Vidwan_Logo.png')",
                        }}
                        aria-hidden="true"
                      />
                    </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-alt/60 p-5 border border-brand/15">
              <p className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">At a glance</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><GraduationCap size={14} className="text-brand" /> {f.qualifications}</div>
                <div className="flex items-center gap-2"><Briefcase size={14} className="text-brand" /> {f.experience} of experience</div>
                <div className="flex items-center gap-2"><BookOpen size={14} className="text-brand" /> {f.publications} publications</div>
                <div className="flex items-center gap-2"><FlaskConical size={14} className="text-brand" /> {f.projects} funded project{f.projects === 1 ? "" : "s"}</div>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl text-brand font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>About</h2>
              <p className="mt-3 text-[#2a2a2a]/85 leading-relaxed text-[15.5px]">{f.bio}</p>
            </div>
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {f.areas.map((a) => (
                  <span key={a} className="px-3 py-1.5 bg-brand/10 text-brand text-sm rounded-full">{a}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Courses Taught</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {f.courses.map((c) => (
                  <li key={c} className="bg-white p-3 border-l-4 border-brand text-sm">{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl text-brand font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}><Award size={20} /> Selected Recognition</h3>
              <ul className="list-disc list-inside text-[#2a2a2a]/85 space-y-1.5 text-[15px]">
                {getRecognitionItems(f.recognition).map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>

            {peers.length > 0 && (
              <div>
                <h3 className="text-2xl text-brand font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>More from {dept ? dept.short : "the department"}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {peers.slice(0, 3).map((p) => (
                    <Link key={p.id} to={`/faculty/${p.id}`} className="flex items-center gap-3 bg-white p-3 border border-brand/15 card-hover">
                      <img src={p.image} alt={p.name} className="w-14 h-14 rounded-full object-cover" />
                      <div>
                        <p className="text-brand font-semibold text-sm leading-tight">{p.name}</p>
                        <p className="text-xs text-[#3a3a3a] italic">{p.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FacultyProfile;
