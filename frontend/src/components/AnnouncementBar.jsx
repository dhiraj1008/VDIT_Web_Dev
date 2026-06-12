import React from "react";
import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";
import { announcements } from "../data/mock";

const AnnouncementBar = () => {
  const items = [...announcements, ...announcements];
  return (
    <div className="bg-brand-dark text-surface overflow-hidden">
      <div className="flex items-center max-w-[1900px] mx-auto">
        <Link
          to="/announcements"
          className="flex items-center gap-2 px-4 py-2 bg-brand text-surface flex-shrink-0 font-sans-ui text-xs uppercase tracking-widest hover:bg-brand-darker transition-colors"
        >
          <Megaphone size={14} />
          <span className="hidden sm:inline">Announcements</span>
        </Link>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-12 marquee-track py-2 whitespace-nowrap">
            {items.map((m, i) => (
              <Link
                to={`/announcement/${m.id}`}
                key={`${m.id}-${i}`}
                className="text-[13px] font-sans-ui flex items-center gap-3 hover:text-white hover:underline cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-surface/70" />
                {m.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
