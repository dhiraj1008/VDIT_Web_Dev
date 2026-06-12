import React from "react";
import { CheckCircle2 } from "lucide-react";

const SportsAchievement = ({ section }) => (
  <div className="space-y-4">
    {section.years.map((year) => (
      <div key={year.year} className="bg-white border border-brand/15 p-5">
        <h4
          className="text-2xl text-brand font-semibold"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {year.year}
        </h4>
        <p className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-2">
          {year.summary}
        </p>
        {year.events.length > 0 && (
          <div className="mt-4">
            <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
              Important Events
            </p>
            <ul className="mt-3 space-y-2">
              {year.events.map((event) => (
                <InfoItem key={event} text={event} />
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4">
          <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest">
            Highlights
          </p>
          <ul className="mt-3 space-y-2">
            {year.highlights.map((highlight) => (
              <InfoItem key={highlight} text={highlight} />
            ))}
          </ul>
        </div>
      </div>
    ))}

    {section.groups && (
      <div className="bg-white border border-brand/15 p-5">
        <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest mb-3">
          Student Participants & Winners
        </p>
        <ParticipantGroups groups={section.groups} />
      </div>
    )}

    {section.galleryNotes && (
      <div className="bg-white border border-brand/15 p-5">
        <p className="text-xs uppercase text-[#3a3a3a]/70 font-sans-ui tracking-widest mb-3">
          Gallery
        </p>
        <ul className="space-y-2">
          {section.galleryNotes.map((note) => (
            <InfoItem key={note} text={note} />
          ))}
        </ul>
      </div>
    )}
  </div>
);

const InfoItem = ({ text }) => (
  <li className="flex items-start gap-3 bg-white p-4 border border-brand/15">
    <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
    <span className="text-[15px] text-[#2a2a2a]">{text}</span>
  </li>
);

const ParticipantGroups = ({ groups }) => (
  <div className="space-y-3">
    {groups.map((group, index) => (
      <details
        key={group.title}
        className="bg-white border border-brand/15 p-4"
        open={index === 0}
      >
        <summary className="cursor-pointer text-brand font-semibold">
          {group.title}
        </summary>
        <div className="mt-4">
          <ResponsiveTable columns={group.columns} rows={group.rows} />
        </div>
      </details>
    ))}
  </div>
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

export default SportsAchievement;
