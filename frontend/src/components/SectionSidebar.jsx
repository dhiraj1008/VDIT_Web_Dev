import React from "react";
import { NavLink } from "react-router-dom";

const SectionSidebar = ({ title, items = [] }) => {
  return (
    <aside className="lg:w-72 flex-shrink-0">
      <div className="bg-white border border-brand/15 sticky top-32">
        <div className="px-5 py-4 bg-brand text-surface">
          <h3 className="text-base font-sans-ui font-semibold tracking-wider uppercase">
            {title}
          </h3>
        </div>
        <ul className="divide-y divide-brand/10">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-surface text-brand border-l-4 border-brand font-semibold"
                      : "text-[#2a2a2a] hover:bg-surface/60 hover:text-brand border-l-4 border-transparent"
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="pl-5 pb-2">
                  {item.children.map((c) => (
                    <li key={c.to}>
                      <NavLink
                        to={c.to}
                        end
                        className={({ isActive }) =>
                          `block py-1.5 text-[13px] ${
                            isActive
                              ? "text-brand font-semibold"
                              : "text-[#3a3a3a] hover:text-brand"
                          }`
                        }
                      >
                        · {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SectionSidebar;
