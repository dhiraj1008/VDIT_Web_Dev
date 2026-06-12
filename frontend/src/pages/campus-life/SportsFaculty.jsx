import React from "react";

const SportsFaculty = ({ section }) => (
  <ResponsiveTable columns={section.columns} rows={section.rows} />
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

export default SportsFaculty;
