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
          It gives me great pleasure to welcome you to <strong>KLS Vishwanathrao
          Deshpande Institute of Technology, Haliyal</strong>. Since our inception in
          <strong>2004</strong>, <strong>VDIT</strong> has remained steadfast in its mission to provide quality
          technical education to the rural and semi-urban youth of North
          Karnataka, while preparing them for a globally connected world.
        </p>
        <p>
          Our <strong>26-acre campus</strong>, cradled by the picturesque <strong>Western Ghats</strong>, hosts
          modern academic blocks, well-equipped laboratories, and a vibrant
          residential community of more than <strong>1,650</strong> students. We currently
          offer <strong>Seven undergraduate programmes</strong>, <strong>Two postgraduate programmes</strong>
          and a growing portfolio of doctoral and continuing-education
          opportunities.
        </p>
        <p>
          What sets <strong>VDIT</strong> apart is our deeply personal approach to education.
          Our experienced faculty mentor each student, our <strong>IEDC</strong> nurtures
          entrepreneurial thinking, and our industry-institute partnerships
          ensure that classroom learning translates into real career
          outcomes. The continued <strong>NBA</strong> accreditation of our flagship
          programmes and consistent <strong>NAAC</strong> outcomes are a testament to the
          quality of the education we provide.
        </p>
        <p>
          As we step into the future of <strong>Artificial Intelligence</strong>, <strong>sustainable
          energy</strong>, and <strong>connected systems</strong>, I invite you to be a part of the <strong>VDIT
          family</strong>. Together, we shall transform learners into leaders.
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
