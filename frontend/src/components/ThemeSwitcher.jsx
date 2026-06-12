import React, { useEffect, useRef, useState } from "react";
import { Palette, Check } from "lucide-react";
import { useTheme, THEMES } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const active = THEMES.find((t) => t.id === theme) || THEMES[0];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="Change colour theme"
        aria-expanded={open}
        className="flex items-center gap-1.5 border border-brand/30 px-3 py-1 rounded text-brand hover:bg-brand hover:text-surface transition-colors"
      >
        <Palette size={14} />
        <span
          className="inline-block w-3 h-3 rounded-full ring-1 ring-current"
          style={{ backgroundColor: active.hex }}
        />
        <span className="hidden md:inline">Theme</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-surface border border-brand/20 shadow-xl z-50 mega-anim">
          <div className="px-4 py-2.5 border-b border-brand/15">
            <p className="text-[11px] uppercase tracking-widest text-brand font-semibold font-sans-ui">
              Colour theme
            </p>
          </div>
          <ul>
            {THEMES.map((t) => {
              const isActive = t.id === theme;
              return (
                <li key={t.id}>
                  <button
                    onClick={() => {
                      setTheme(t.id);
                      setOpen(false);
                    }}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 transition-colors ${
                      isActive
                        ? "bg-brand/10"
                        : "hover:bg-brand/5"
                    }`}
                  >
                    <span
                      className="w-7 h-7 rounded-full ring-2 ring-offset-2 ring-offset-surface flex-shrink-0"
                      style={{ backgroundColor: t.hex, boxShadow: `0 0 0 1px ${t.hex}` }}
                    />
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-[#2a2a2a]">
                        {t.label}
                      </span>
                      <span className="block text-[11px] text-[#3a3a3a]/70 font-sans-ui">
                        {t.description} · {t.hex}
                      </span>
                    </span>
                    {isActive && <Check size={16} className="text-brand" />}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="px-4 py-2 border-t border-brand/15 text-[11px] text-[#3a3a3a]/70 font-sans-ui">
            Your choice is saved on this device.
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
