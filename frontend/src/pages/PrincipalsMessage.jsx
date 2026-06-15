import React from "react";
import InnerLayout from "./InnerLayout";

const PrincipalsMessage = () => (
  <InnerLayout
    title="Principal's Message"
    image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Principal's Message" }]}
  >
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="md:w-64 flex-shrink-0">
        <div className="aspect-[3/4] overflow-hidden bg-surface">
          <img
            src="\hero_images\VAKulkarni.png"
            alt="Dr. V. A. Kulkarni"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3">
          <p className="text-brand font-semibold text-lg">Dr. V. A. Kulkarni</p>
          <p className="text-[#3a3a3a] italic text-sm">Principal, KLS VDIT</p>
          <p className="text-[#3a3a3a]/70 text-xs mt-1">Ph.D. (Mech. Engg.), F.I.E.</p>
        </div>
      </div>
      <div className="flex-1 vdit-prose">
        <p className="text-xl italic text-brand">
          “Knowledge is power. At VDIT, we strive to make this knowledge
          accessible, applicable, and transformative for every student who
          walks through our gates.”
        </p>
        <p>
          Dear Aspirants, Students, Parents and Well-wishers,
        </p>
        <p>
          It gives me great pleasure to welcome you to KLS Vishwanathrao
          Deshpande Institute of Technology, Haliyal. Since our inception in
          2004, VDIT has remained steadfast in its mission to provide quality
          technical education to the rural and semi-urban youth of North
          Karnataka, while preparing them for a globally connected world.
        </p>
        <p>
          Our 26-acre campus, cradled by the picturesque Western Ghats, hosts
          modern academic blocks, well-equipped laboratories, and a vibrant
          residential community of more than 1,650 students. We currently
          offer seven undergraduate programmes, two postgraduate programmes
          and a growing portfolio of doctoral and continuing-education
          opportunities.
        </p>
        <p>
          What sets VDIT apart is our deeply personal approach to education.
          Our experienced faculty mentor each student, our IEDC nurtures
          entrepreneurial thinking, and our industry-institute partnerships
          ensure that classroom learning translates into real career
          outcomes. The continued NBA accreditation of our flagship
          programmes and consistent NAAC outcomes are a testament to the
          quality of the education we provide.
        </p>
        <p>
          As we step into the future of artificial intelligence, sustainable
          energy, and connected systems, I invite you to be a part of the VDIT
          family. Together, we shall transform learners into leaders.
        </p>
        <p className="mt-8">
          <strong>Dr. V. A. Kulkarni</strong>
          <br />
          <span className="italic">Principal, KLS VDIT, Haliyal</span>
        </p>
      </div>
    </div>
  </InnerLayout>
);

export default PrincipalsMessage;
