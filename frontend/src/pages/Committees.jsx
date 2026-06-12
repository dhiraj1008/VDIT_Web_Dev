import React from "react";
import InnerLayout from "./InnerLayout";
import { committees } from "../data/mock";

const Committees = () => (
  <InnerLayout
    title="Committees & Chairs"
    image="https://images.pexels.com/photos/9243572/pexels-photo-9243572.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Committees & Chairs" }]}
  >
    <div className="vdit-prose mb-6">
      <p>
        The institute has constituted several standing committees to ensure
        smooth academic, administrative and student-welfare functioning. Each
        committee meets regularly and tables its minutes before the Local
        Governing Council. Membership is reviewed annually by the Principal in
        consultation with the LGC.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {committees.map((c) => (
        <div key={c.name} className="bg-white p-5 border border-brand/15 card-hover">
          <h3 className="text-brand font-semibold leading-snug">{c.name}</h3>
          <p className="text-sm text-[#3a3a3a] mt-1">Chair: <span className="italic">{c.chair}</span></p>
        </div>
      ))}
    </div>
  </InnerLayout>
);

export default Committees;
