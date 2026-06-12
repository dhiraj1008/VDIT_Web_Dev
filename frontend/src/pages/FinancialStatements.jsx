import React from "react";
import InnerLayout from "./InnerLayout";
import { FileText, Download } from "lucide-react";

const statements = [
  { year: "2024-25", size: "1.8 MB" },
  { year: "2023-24", size: "1.6 MB" },
  { year: "2022-23", size: "1.5 MB" },
  { year: "2021-22", size: "1.4 MB" },
  { year: "2020-21", size: "1.3 MB" },
];

const FinancialStatements = () => (
  <InnerLayout
    title="Financial Statements"
    image="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Financial Statements" }]}
  >
    <div className="vdit-prose mb-4">
      <p>
        KLS VDIT publishes its audited annual financial statements in keeping
        with norms of transparency. Statements are prepared by an independent
        chartered accountant and approved by the Karnatak Law Society.
      </p>
    </div>
    <div className="divide-y divide-brand/10 bg-white border border-brand/15">
      {statements.map((s) => (
        <div key={s.year} className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-brand" />
            <div>
              <p className="font-semibold text-[#2a2a2a]">Annual Audited Statement, {s.year}</p>
              <p className="text-xs text-[#3a3a3a]/70">PDF · {s.size}</p>
            </div>
          </div>
          <button className="text-xs flex items-center gap-1 text-brand border border-brand/40 px-3 py-1.5 rounded hover:bg-brand hover:text-surface transition">
            <Download size={14} /> Download
          </button>
        </div>
      ))}
    </div>
  </InnerLayout>
);

export default FinancialStatements;
