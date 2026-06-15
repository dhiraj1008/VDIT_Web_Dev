import React, { useState } from "react";

const StudentResourceTemplate = ({ resourcePage }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
        {resourcePage.short}
      </span>
      <h1
        className="text-3xl md:text-4xl text-brand font-semibold mt-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {resourcePage.department} Student Resources
      </h1>
      <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3 max-w-3xl">
        {resourcePage.description}
      </p>

      <div className="space-y-4 mt-8">
        {resourcePage.sections.map((section) => {
          const isOpen = openSection === section.title;

          return (
            <section key={section.title} className="bg-white border border-brand/15 p-5">
              <button
                type="button"
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between gap-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
                  {section.title}
                </span>
                <span className="text-brand text-sm">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && section.semesters?.length > 0 && (
              <div className="space-y-2 mt-4">
                {section.semesters.map((semester) => (
                  <details
                    key={semester.label}
                    className="border border-brand/10 bg-surface/40"
                  >
                    <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-brand">
                      {semester.label}
                    </summary>
                    {semester.items.length > 0 ? (
                      <ul className="space-y-2 px-4 pb-4">
                        {semester.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href || "#"}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-[#2a2a2a] hover:text-brand transition"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#3a3a3a]/70 italic px-4 pb-4">
                        Content will be updated soon.
                      </p>
                    )}
                  </details>
                ))}
              </div>
              )}

              {isOpen && !section.semesters?.length && section.items.length > 0 && (
              <ul className="space-y-2 mt-4">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href || "#"}
                      className="text-sm text-[#2a2a2a] hover:text-brand transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              )}

              {isOpen && !section.semesters?.length && section.items.length === 0 && (
              <p className="text-sm text-[#3a3a3a]/70 italic mt-4">
                Content will be updated soon.
              </p>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default StudentResourceTemplate;
