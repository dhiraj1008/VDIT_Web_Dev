import React from "react";
import InnerLayout from "./InnerLayout";
import { Mail, Phone } from "lucide-react";

const RTI = () => (
  <InnerLayout
    title="Right to Information"
    image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Right to Information" }]}
  >
    <div className="vdit-prose">
      <p>
        In compliance with the Right to Information Act, 2005, KLS VDIT
        designates Public Information Officers (PIOs) and Appellate Authorities
        for receiving and processing applications.
      </p>

      <h3>How to file an RTI</h3>
      <ol>
        <li>Address your application to the Public Information Officer.</li>
        <li>Submit either by registered post or in person along with the prescribed fee (DD of ₹10 in favour of “The Principal, KLS VDIT, Haliyal”).</li>
        <li>Specify the information sought and your contact details.</li>
        <li>The PIO will respond within 30 days as per the Act.</li>
      </ol>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white p-6 border border-brand/15">
        <p className="text-xs uppercase tracking-widest text-brand font-sans-ui font-semibold">Public Information Officer</p>
        <h3 className="text-brand text-xl font-semibold mt-2">Shri. Ravindra K. Patil</h3>
        <p className="text-sm italic text-[#3a3a3a]">Registrar, KLS VDIT</p>
        <div className="mt-3 space-y-1 text-sm text-[#2a2a2a]">
          <p className="flex items-center gap-2"><Mail size={14} className="text-brand" /> rti@klsvdit.edu.in</p>
          <p className="flex items-center gap-2"><Phone size={14} className="text-brand" /> 08284 - 220 333</p>
        </div>
      </div>
      <div className="bg-white p-6 border border-brand/15">
        <p className="text-xs uppercase tracking-widest text-brand font-sans-ui font-semibold">First Appellate Authority</p>
        <h3 className="text-brand text-xl font-semibold mt-2">Dr. V. A. Kulkarni</h3>
        <p className="text-sm italic text-[#3a3a3a]">Principal, KLS VDIT</p>
        <div className="mt-3 space-y-1 text-sm text-[#2a2a2a]">
          <p className="flex items-center gap-2"><Mail size={14} className="text-brand" /> principal@klsvdit.edu.in</p>
          <p className="flex items-center gap-2"><Phone size={14} className="text-brand" /> 08284 - 220 332</p>
        </div>
      </div>
    </div>
  </InnerLayout>
);

export default RTI;
