import React from "react";
import { Link } from "react-router-dom";
import InnerHero from "../../components/InnerHero";
import { Beaker, Calendar, CheckCircle2 } from "lucide-react";

const campusLifeLinks = [
  ["Hostels", "/campus-life/hostels"],
  ["Transportation", "/campus-life/transportation"],
  ["Sports & Gym", "/campus-life/sports-gym"],
  ["ATM", "/campus-life/atm"],
  ["Solar Rooftop", "/campus-life/solar-rooftop"],
];

export const CampusLifeShell = ({
  title,
  short,
  image,
  navItems,
  quickFacts,
  children,
}) => (
  <main>
    <InnerHero
      title={title}
      image={image}
      breadcrumbs={[
        { label: "Life" },
        { label: "Campus Life" },
        { label: short || title },
      ]}
    />

    <section className="bg-surface-alt/60 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
        {navItems.map(([href, label]) => (
          <a key={href} href={href} className="uppercase hover:underline">
            {label}
          </a>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">{children}</div>
        <CampusLifeAside currentTitle={title} quickFacts={quickFacts} />
      </div>
    </section>
  </main>
);

export const CampusLifeAside = ({ currentTitle, quickFacts }) => (
  <aside className="space-y-5">
    <div className="bg-white border border-brand/15 p-5 lg:sticky lg:top-36 self-start">
      <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
        Quick Facts
      </h4>
      <div className="mt-3 space-y-3 text-sm">
        {quickFacts.map(([label, value]) => (
          <div key={label} className="flex items-start gap-2">
            <Calendar size={14} className="text-brand flex-shrink-0 mt-0.5" />
            <span>
              {label}: <strong>{value}</strong>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-brand/10">
        <h4 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui mb-3">
          Other Campus Life
        </h4>
        <ul className="space-y-1.5">
          {campusLifeLinks
            .filter(([label]) => label !== currentTitle)
            .map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-[#2a2a2a] hover:text-brand flex items-center gap-1"
                >
                  <Beaker size={12} className="text-brand" />
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </aside>
);

export const PageSection = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-32">
    <div className="flex items-end justify-between gap-4 mb-5">
      <h3
        className="text-2xl md:text-3xl text-brand font-semibold flex items-center gap-2"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {Icon && <Icon size={22} />} {title}
      </h3>
    </div>
    {children}
  </section>
);

export const InfoList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((text) => (
      <li key={text} className="flex items-start gap-3 bg-white p-4 border border-brand/15">
        <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
        <span className="text-[15px] text-[#2a2a2a]">{text}</span>
      </li>
    ))}
  </ul>
);

export const ResponsiveTable = ({ columns, rows }) => (
  <div className="overflow-x-auto bg-white border border-brand/15">
    <table className="min-w-full text-sm text-left">
      <thead className="bg-brand text-surface">
        <tr>
          {columns.map((column) => (
            <th key={column} className="px-4 py-3 font-semibold whitespace-nowrap">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={`${row.join("-")}-${rowIndex}`} className="border-t border-brand/10">
            {row.map((cell, cellIndex) => (
              <td key={`${cell}-${cellIndex}`} className="px-4 py-3 align-top text-[#2a2a2a]">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
