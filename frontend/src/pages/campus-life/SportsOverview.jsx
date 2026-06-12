import React from "react";
import { CheckCircle2 } from "lucide-react";

const SportsOverview = ({ item }) => (
  <>
    <span className="text-xs tracking-[0.2em] text-brand font-sans-ui font-semibold">
      {item.subtitle}
    </span>
    <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3">
      {item.overview}
    </p>
    <p className="text-[#2a2a2a]/85 leading-relaxed text-[15.5px] mt-3 bg-white border border-brand/15 p-4">
      {item.intro}
    </p>
    <ul className="space-y-2 mt-5">
      {item.overviewItems.map((text) => (
        <li key={text} className="flex items-start gap-3 bg-white p-4 border border-brand/15">
          <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
          <span className="text-[15px] text-[#2a2a2a]">{text}</span>
        </li>
      ))}
    </ul>
  </>
);

export default SportsOverview;
