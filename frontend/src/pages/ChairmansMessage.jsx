import React from "react";
import InnerLayout from "./InnerLayout";

const ChairmansMessage = () => (
  <InnerLayout
    title="Chairman's Message"
    image="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=2400&q=80"
    breadcrumbs={[{ label: "About", to: "/about" }, { label: "Chairman's Message" }]}
  >
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="md:w-64 flex-shrink-0">
        <div className="aspect-[3/4] overflow-hidden bg-surface">
          <img
            src="\hero_images\PrashantKulkarni.png"
            alt="Shri. Prashant Kulkarni"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3">
          <p className="text-brand font-semibold text-lg">Shri. Prashant Kulkarni</p>
          <p className="text-[#3a3a3a] italic text-sm">Chairman, KLS VDIT</p>
          {/*<p className="text-[#3a3a3a]/70 text-xs mt-1">Ph.D. (Mech. Engg.), F.I.E.</p>*/}
        </div>
      </div>
      <div className="flex-1 vdit-prose">
        <p className="text-xl italic text-brand">
          “Knowledge is power. At VDIT, we strive to make this knowledge
          accessible, applicable, and transformative for every student who
          walks through our gates.”
        </p>
        {/*<p>
          Dear Aspirants, Students, Parents and Well-wishers,
        </p>*/}
        <p>
          Welcome to our institution, where tradition, excellence, and innovation come together to shape future leaders and responsible citizens.
        </p>
        <p>
          Established under the visionary leadership of the <strong>Karnatak Law Society (KLS)</strong>, our institution proudly carries forward a legacy of educational excellence spanning more than <strong>eight decades</strong>. Guided by the ideals of our founders, we are committed to creating an academic environment that nurtures talent, encourages innovation, and empowers students to become skilled professionals and socially responsible individuals.
        </p>
        <p>
          At our institution, education extends beyond classrooms and laboratories. We view learning as a transformative journey that fosters <strong>critical thinking</strong>, <strong>builds character</strong>, and equips students with the knowledge and skills required to contribute meaningfully to society and the nation.
        </p>
        <p>
          Through a strong emphasis on <strong>quality education</strong>, <strong>ethical values</strong>, <strong>research</strong>, <strong>innovation</strong>, and <strong>sustainable development</strong>, we strive to provide opportunities that enable students to achieve academic and professional success while addressing the evolving needs of the global community.
        </p>
        <p>
          As we continue our pursuit of excellence, we remain dedicated to inclusive growth, institutional development, and the holistic advancement of our students. We warmly welcome students, parents, alumni, industry partners, and all stakeholders to join us in our journey towards academic distinction, innovation, and societal progress.
        </p>
        <p className="mt-8">
          <strong>Shri. Prashant Kulkarni</strong>
          <br />
          <span className="italic">Chairman, KLS VDIT, Haliyal</span>
        </p>
      </div>
    </div>
  </InnerLayout>
);

export default ChairmansMessage;
