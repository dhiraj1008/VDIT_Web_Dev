import React from "react";
import { Link } from "react-router-dom";
import InnerHero from "../../components/InnerHero";
import {
  Beaker,
  Calendar,
  CheckCircle2,
  Leaf,
  Zap,
} from "lucide-react";

const quickFacts = [
  ["Category", "Campus Life"],
  ["Facility", "Solar Rooftop"],
  ["Plant Type", "On-Grid Rooftop Solar PV Plant"],
  ["Total Capacity", "200 kW"],
  ["Commissioned Year", "2018"],
  ["Rooftop Area", "2600 sq. meters"], 
  ["Total Panels", "626"],
  ["Total Generation", "1,636 MWh till May 2026"],
  ["CO2 Reduction", "13,901 tonnes till May 2026"],
];

const capacityRows = [
  ["Total Capacity", "200 kW"],
  ["Main Building Rooftop", "150 kW"],
  ["Mechanical Building Rooftop", "50 kW"],
  ["Commissioned Year", "2018"],
  ["Investment", "Rs. 82 Lakhs"],
  ["Rooftop Area Covered", "2600 square meters"],
];

const specificationRows = [
  ["Total Solar PV Panels", "626"],
  ["Panel Capacity", "320 Wp"],
  ["Panel Type", "Poly Crystalline"],
  ["Panel Make", "WAAREE"],
  ["Grid-Tied Inverters", "04 numbers"],
  ["Inverter Capacity", "50 kVA each"],
  ["Inverter Make", "Delta and V-Guard"],
];

const generationRows = [
  ["Daily Average Power Generation", "About 440 units"],
  ["Monthly Average Power Generation", "13,220 units, considering the data of year 2025"],
  ["Total Generation till May 2026", "1,636 MWh"],
  ["Total Units Generated till May 2026", "16,36,228 units"],
];

const impactRows = [
  ["CO2 avoided per unit", "0.85 kg"],
  ["CO2 emission reduction till May 2026", "13,901 tonnes"],
];

const equipment = [
  "DC Distribution Box with Fuses, MCBs and Surge Protection Devices (SPDs)",
  "AC Distribution Box with MCBs",
  "Net Meter or Bidirectional Energy Meter",
  "Earthing Provided",
  "Lightning Arresters Provided",
  "HT Metering Cubical",
];

const benefits = [
  "Reduces electricity consumption from the grid",
  "Promotes renewable energy adoption",
  "Supports green campus initiatives",
  "Helps reduce carbon dioxide emissions",
  "Improves energy efficiency",
  "Demonstrates institutional commitment to sustainability",
];

const SolarRooftop = () => (
  <main>
    <InnerHero
      title="Solar Rooftop"
      image="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?w=2400"
      breadcrumbs={[
        { label: "Life" },
        { label: "Campus Life" },
        { label: "Solar" },
      ]}
    />

    <section className="bg-surface-alt/60 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
        <a href="#overview" className="uppercase hover:underline">Overview</a>
        <a href="#capacity-location" className="uppercase hover:underline">Plant Capacity</a>
        <a href="#technical-specifications" className="uppercase hover:underline">Specifications</a>
        <a href="#equipment" className="uppercase hover:underline">Equipment</a>
        <a href="#energy-generation" className="uppercase hover:underline">Generation</a>
        <a href="#environmental-impact" className="uppercase hover:underline">Impact</a>
        <a href="#benefits" className="uppercase hover:underline">Benefits</a>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <PageSection id="overview" title="Solar Rooftop" icon={Zap}>
            <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
              200 kW On-Grid Rooftop Solar Photovoltaic Plant
            </span>

            <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
              KLS VDIT has installed a 200 kW grid-connected rooftop solar
              photovoltaic plant to promote clean energy usage, reduce
              electricity consumption from the grid, and support environmental
              sustainability.
            </p>

            <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3 bg-white border border-brand/15 p-4">
              An on-grid rooftop photovoltaic plant is connected to the utility
              electricity grid. Solar PV panels convert sunlight into DC
              electrical energy, which is converted into AC electrical energy
              using a grid-tied inverter and supplied to connected loads. When
              solar generation is more than the load requirement, excess energy
              is exported to the grid through a bidirectional meter. When solar
              generation is insufficient, power is drawn from the grid.
            </p>
          </PageSection>

          <PageSection id="capacity-location" title="Plant Capacity and Location" icon={Calendar}>
            <ResponsiveTable columns={["Detail", "Value"]} rows={capacityRows} />
          </PageSection>

          <PageSection id="technical-specifications" title="Technical Specifications" icon={Beaker}>
            <ResponsiveTable columns={["Specification", "Value"]} rows={specificationRows} />
          </PageSection>

          <PageSection id="equipment" title="Important Equipment" icon={CheckCircle2}>
            <InfoList items={equipment} />
          </PageSection>

          <PageSection id="energy-generation" title="Energy Generation" icon={Zap}>
            <ResponsiveTable columns={["Generation Detail", "Value"]} rows={generationRows} />
          </PageSection>

          <PageSection id="environmental-impact" title="Environmental Impact" icon={Leaf}>
            <p className="text-sm text-brand font-semibold mb-3">
              Every unit of thermal power consumption produces approximately
              0.85 kg of carbon dioxide. Therefore, every unit of solar energy
              helps prevent approximately 0.85 kg of carbon dioxide emission.
            </p>
            <ResponsiveTable columns={["Impact Detail", "Value"]} rows={impactRows} />
          </PageSection>

          <PageSection id="benefits" title="Sustainability Benefits" icon={Leaf}>
            <InfoList items={benefits} />
          </PageSection>
        </div>

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
                {[
                  ["Hostels", "/campus-life/hostels"],
                  ["Transportation", "/campus-life/transportation"],
                  ["Sports & Gym", "/campus-life/sports-gym"],
                  ["ATM", "/campus-life/atm"],
                ].map(([label, to]) => (
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
      </div>
    </section>
  </main>
);

const PageSection = ({ id, title, icon: Icon, children }) => (
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

const InfoList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((text) => (
      <li key={text} className="flex items-start gap-3 bg-white p-4 border border-brand/15">
        <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
        <span className="text-[15px] text-[#2a2a2a]">{text}</span>
      </li>
    ))}
  </ul>
);

const ResponsiveTable = ({ columns, rows }) => (
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

export default SolarRooftop;
