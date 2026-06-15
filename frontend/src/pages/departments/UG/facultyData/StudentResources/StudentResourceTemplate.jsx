import React from "react";

const StudentResourceTemplate = ({ resourcePage }) => (
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

    <div className="grid md:grid-cols-2 gap-4 mt-8">
      {resourcePage.sections.map((section) => (
        <section key={section.title} className="bg-white border border-brand/15 p-5">
          <h2 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
            {section.title}
          </h2>
          {section.items.length > 0 ? (
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
          ) : (
            <p className="text-sm text-[#3a3a3a]/70 italic mt-4">
              Content will be updated soon.
            </p>
          )}
        </section>
      ))}
    </div>
  </main>
);

export default StudentResourceTemplate;
