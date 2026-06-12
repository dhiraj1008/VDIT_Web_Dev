import React from "react";
import { PageHero } from "./About";
import { Library, Building2, Trophy, Utensils, Wifi, Bus } from "lucide-react";

const Campus = () => {
  const facilities = [
    [Library, "Library", "60,000+ volumes, e-journals via VTU consortium, digital library and reading hall."],
    [Building2, "Hostels", "Separate boys' and girls' hostels with hygienic mess and 24x7 security."],
    [Utensils, "Cafeteria", "Modern food court serving North Karnataka favourites and standard South-Indian fare."],
    [Trophy, "Sports", "Cricket ground, basketball, volleyball and indoor games facilities."],
    [Wifi, "Wi-Fi Campus", "High-speed Wi-Fi across academic blocks, library and hostels."],
    [Bus, "Transport", "Dedicated college buses connecting Haliyal, Dandeli and surrounding villages."],
  ];

  return (
    <main>
      <PageHero
        title="Our Campus"
        sub="26 acres of green, calm and learning at the foothills of the Western Ghats"
        image="https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=2400"
      />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <p className="text-[16px] text-[#2a2a2a]/90 leading-relaxed">
          The KLS VDIT campus is set on a 26-acre site in Haliyal, Uttara Kannada
          district. Cradled by a picturesque landscape and forested hills, the
          campus offers an ideal environment for focussed academic work and
          holistic development. Modern academic blocks, well-equipped
          laboratories, hostels and recreational facilities make VDIT a true
          residential learning experience.
        </p>
      </section>

      <section id="facilities" className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl text-brand mb-10 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map(([Icon, t, d]) => (
              <div key={t} className="bg-white p-6 border border-brand/10 card-hover">
                <div className="w-11 h-11 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl text-brand font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t}</h3>
                <p className="text-[#3a3a3a]/85 text-sm mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="library" className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=1200" alt="Library" className="w-full aspect-[4/3] object-cover" />
        <div>
          <h2 className="text-3xl text-brand mb-3 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Central Library</h2>
          <p className="text-[#2a2a2a]/85 leading-relaxed">
            The library has a rich collection of textbooks, reference works,
            journals and project reports across all engineering disciplines.
            Students enjoy access to e-resources via the VTU consortium, IEEE,
            Springer and DELNET.
          </p>
        </div>
      </section>

      <section id="hostels" className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl text-brand mb-3 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Stay@VDIT</h2>
            <p className="text-[#2a2a2a]/85 leading-relaxed">
              Separate boys' and girls' hostels are located within the campus.
              Rooms are airy and well-furnished. The mess serves vegetarian
              meals prepared with fresh produce. Wardens and a dedicated team
              ensure a safe and friendly residential environment.
            </p>
          </div>
          <img src="https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=1200" alt="Hostel" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      <section id="sports" className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200&q=80" alt="Sports" className="w-full aspect-[4/3] object-cover" />
        <div>
          <h2 className="text-3xl text-brand mb-3 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Sports &amp; Cultural</h2>
          <p className="text-[#2a2a2a]/85 leading-relaxed">
            VDIT teams have represented VTU in cricket, basketball and athletics
            events. The annual cultural fest showcases music, dance, drama and
            literary contests, bringing together students from across the
            college.
          </p>
        </div>
      </section>

      <section id="transport" className="bg-surface-alt/60 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl text-brand mb-3 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Transportation</h2>
            <p className="text-[#2a2a2a]/85 leading-relaxed">
              College buses connect the campus with Haliyal, Dandeli and nearby
              areas, helping day scholars commute comfortably and reliably.
            </p>
          </div>
          <img src="https://images.pexels.com/photos/5805182/pexels-photo-5805182.jpeg?w=1200" alt="College transportation" className="w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      <section id="atm" className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src="https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?w=1200" alt="ATM facility" className="w-full aspect-[4/3] object-cover" />
        <div>
          <h2 className="text-3xl text-brand mb-3 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>ATM</h2>
          <p className="text-[#2a2a2a]/85 leading-relaxed">
            On-campus banking access supports students, parents, staff and
            visitors with convenient cash and basic transaction services.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Campus;
