import React from "react";
import InnerLayout from "./InnerLayout";

const Rules = () => (
  <InnerLayout
    title="Rules & Regulations"
    image="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=2400"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Rules & Regulations" }]}
  >
    <div className="vdit-prose">
      <p>
        All students, faculty and staff at KLS VDIT are governed by the rules
        framed by the Karnatak Law Society in conformity with VTU regulations,
        AICTE norms and applicable Karnataka state laws. The following are the
        broad heads under which detailed rules are published.
      </p>

      <h3>Academic Rules</h3>
      <ul>
        <li>VTU CBCS Scheme & Outcome Based Education framework</li>
        <li>Internal Assessment & Continuous Internal Evaluation policy</li>
        <li>Attendance – minimum 75% in each course</li>
        <li>Examination malpractice & disciplinary action</li>
        <li>Project, internship & dissertation guidelines</li>
      </ul>

      <h3>Hostel Rules</h3>
      <ul>
        <li>Curfew timings and visitor entry policy</li>
        <li>Mess discipline and food safety</li>
        <li>Use of electrical appliances and prohibited items</li>
        <li>Code of conduct for residents</li>
      </ul>

      <h3>Code of Conduct</h3>
      <ul>
        <li>Anti-ragging policy as per UGC regulations</li>
        <li>Prevention of sexual harassment (Internal Complaints Committee)</li>
        <li>Use of campus IT and library resources</li>
        <li>Dress code and identification</li>
      </ul>

      <h3>Refund Policy</h3>
      <p>
        Fees once paid will be refunded as per AICTE / VTU / Karnataka
        Examinations Authority guidelines effective for the relevant academic
        year. The full refund policy and approved calendar can be obtained
        from the Office of the Registrar.
      </p>

      <p className="text-xs text-[#3a3a3a]/70 mt-6">
        For the complete handbook, please write to the Office of the Principal
        or download from the campus intranet.
      </p>
    </div>
  </InnerLayout>
);

export default Rules;
