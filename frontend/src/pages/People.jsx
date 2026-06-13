import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import InnerLayout from "./InnerLayout";
import { faculty, adminStaff, researchers, departments, findDept } from "../data/mock";

const tabs = [
  { id: "faculty", label: "Faculty" },
  { id: "admin", label: "Administrative Staff" },
  { id: "research", label: "Researchers" },
  { id: "fellows", label: "Fellows" },
];

const People = () => {
  const [params, setParams] = useSearchParams();
  const [tab, setTab] = useState(params.get("tab") || "faculty");
  const [dept, setDept] = useState(params.get("dept") || "all");

  useEffect(() => {
    setTab(params.get("tab") || "faculty");
    setDept(params.get("dept") || "all");
  }, [params]);

  const setActive = (id) => {
    setTab(id);
    const p = new URLSearchParams(params);
    p.set("tab", id);
    setParams(p, { replace: true });
  };

  const setDeptFilter = (d) => {
    setDept(d);
    const p = new URLSearchParams(params);
    if (d === "all") p.delete("dept");
    else p.set("dept", d);
    setParams(p, { replace: true });
  };

  const facultyFiltered = (() => {
    if (dept === "all") return faculty;
    const d = departments.find((x) => x.short === dept || x.id === dept);
    return d ? faculty.filter((f) => f.deptId === d.id) : faculty;
  })();

  return (
    <InnerLayout
      title="People @ VDIT"
      image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"
      breadcrumbs={[{ label: "About", to: "/about" }, { label: "People @ VDIT" }]}
    >
      <div className="flex border-b border-brand/20 mb-8 font-sans-ui overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-5 py-3 text-sm font-semibold tracking-widest whitespace-nowrap transition-colors ${
              tab === t.id
                ? "text-brand border-b-2 border-brand"
                : "text-[#3a3a3a] hover:text-brand"
            }`}
          >
            {t.label.toUpperCase()}
          </button>
        ))}
      </div>

      {tab === "faculty" && (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setDeptFilter("all")}
              className={`px-3 py-1.5 text-xs rounded-full font-sans-ui ${
                dept === "all"
                  ? "bg-brand text-surface"
                  : "bg-white text-brand border border-brand/30"
              }`}
            >
              All
            </button>
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => setDeptFilter(d.short)}
                className={`px-3 py-1.5 text-xs rounded-full font-sans-ui ${
                  dept === d.short
                    ? "bg-brand text-surface"
                    : "bg-white text-brand border border-brand/30"
                }`}
              >
                {d.short}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyFiltered.map((f) => {
              const d = findDept(f.deptId);
              return (
                <article
                  key={f.id}
                  className="bg-white border border-brand/15 overflow-hidden card-hover"
                >
                  <Link to={`/faculty/${f.id}`} className="aspect-[4/3] overflow-hidden block">
                    <img
                      src={f.image}
                      alt={f.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/faculty/${f.id}`} className="hover:underline">
                      <h3 className="text-brand font-semibold text-lg leading-snug">
                        {f.name}
                      </h3>
                    </Link>
                    <p className="italic text-sm text-[#3a3a3a]">
                      {f.role}
                      {d && (
                        <>
                          <span className="mx-1">·</span>
                          <span>{d.short}</span>
                        </>
                      )}
                    </p>
                    <p className="mt-2 text-sm text-[#3a3a3a]/85 leading-relaxed line-clamp-3">
                      {f.bio}
                    </p>
                    <Link to={`/faculty/${f.id}`} className="text-xs text-brand underline mt-2 inline-block">
                      View profile →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}

      {tab === "admin" && (
        <div className="bg-white border border-brand/15">
          <table className="w-full text-sm">
            <thead className="bg-brand text-surface">
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {adminStaff.map((a) => (
                <tr key={a.id} className="odd:bg-surface/40">
                  <td className="p-3 border-t border-brand/10">{a.name}</td>
                  <td className="p-3 border-t border-brand/10 italic">{a.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "research" && (
        <div className="space-y-3">
          {researchers.map((r) => {
            const d = findDept(r.deptId);
            return (
              <div key={r.id} className="bg-white p-5 border-l-4 border-brand">
                <h3 className="text-brand font-semibold">{r.name}</h3>
                <p className="text-sm italic text-[#3a3a3a]">
                  {r.role}
                  {d && (
                    <>
                      <span className="mx-1">·</span>
                      <Link to={`/programme/${d.id}`} className="hover:underline text-brand">
                        {d.short}
                      </Link>
                    </>
                  )}
                </p>
                <p className="text-sm text-[#2a2a2a]/85 mt-1">Topic: {r.topic}</p>
              </div>
            );
          })}
        </div>
      )}

      {tab === "fellows" && (
        <div className="bg-white p-8 border border-brand/15 text-center">
          <p className="text-[#3a3a3a]/85">
            VDIT does not currently host external visiting fellows. The institute
            periodically invites distinguished speakers and short-term visitors
            via the IEDC and Industry-Institute Cell.
          </p>
        </div>
      )}
    </InnerLayout>
  );
};

export default People;
