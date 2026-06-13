import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerHero from "../components/InnerHero";
import { ArrowLeft, Mail, IdCard, Users, ChevronDown } from "lucide-react";

const execomMembers = [
  {
    name: "Dr. V. A. Kulkarni",
    designation: "Principal, KLS VDIT, Haliyal",
    role: "Chairman",
    email: "principal@klsvdit.edu.in",
    membershipId: "99222491",
    image: "/IEEE_images/execom_members/image9.png",
  },
  {
    name: "Dr. Arun L. Kakhandki",
    designation: "Professor, Dept. of ECE, KLS VDIT, Haliyal",
    role: "Branch Counselor",
    email: "arunlk@ieee.org",
    membershipId: "97206016",
    image: "/IEEE_images/execom_members/image10.png",
  },
  {
    name: "Prof. Suraj Kadli",
    designation: "HoD, Dept. of ECE, KLS VDIT, Haliyal",
    role: "Faculty Advisor",
    email: "sbk@klsvdit.edu.in",
    membershipId: "99889832",
    image: "/IEEE_images/execom_members/image1.png",
  },
  {
    name: "Prof. Prakash Chavan",
    designation: "Professional Member, KLS VDIT, Haliyal",
    role: "Professional Member",
    email: "plc@klsvdit.edu.in",
    membershipId: "98446921",
    image: "/IEEE_images/execom_members/image3.png",
  },
];

const studentExecom = [
  {
    name: "Ms. Sanjana Dhawale",
    designation: "6th sem, Dept. of CS (AIML), KLS VDIT, Haliyal",
    role: "Student Chair - IEEE VDIT Student Branch",
    image: "/IEEE_images/execom_members/image1.png",
  },
  {
    name: "Mr. Akshay Bulbule",
    designation: "6th sem, Dept. of EEE, KLS VDIT, Haliyal",
    role: "Student Vice Chair - IEEE VDIT Student Branch",
    image: "/IEEE_images/execom_members/image2.png",
  },
  {
    name: "Ms. Nandita K.",
    designation: "6th sem, Dept. of ECE, KLS VDIT, Haliyal",
    role: "Student Secretary - IEEE VDIT Student Branch",
    image: "/IEEE_images/execom_members/image3.png",
  },
  {
    name: "Ms. Vaishnavi",
    designation: "6th sem, Dept. of EEE, KLS VDIT, Haliyal",
    role: "Student Joint Secretary - IEEE VDIT Student Branch",
    image: "/IEEE_images/execom_members/image5.png",
  },
  {
    name: "Ms. Heena Kousar",
    designation: "6th sem, Dept. of EEE, KLS VDIT, Haliyal",
    role: "Student Joint Secretary - IEEE VDIT Student Branch",
    image: "/IEEE_images/execom_members/image5.png",
  },
  {
    name: "Ms. Swati Hosur",
    designation: "6th sem, Dept. of EEE, KLS VDIT, Haliyal",
    role: "Student Treasurer - IEEE VDIT Student Branch",
    image: "/IEEE_images/execom_members/image6.png",
  },
  {
    name: "Ms. Chaya Madli",
    designation: "6th sem, Dept. of ECE, KLS VDIT, Haliyal",
    role: "Chair - Student Activity Committee (SAC)",
    image: "/IEEE_images/execom_members/image7.png",
  },
  {
    name: "Mr. Sameer Pattan",
    designation: "6th sem, Dept. of CSE (AIML), KLS VDIT, Haliyal",
    role: "Vice Chair - Student Activity Committee (SAC)",
    image: "/IEEE_images/execom_members/image8.png",
  },
];

const ieeeStudentMembers = [
  { name: "Abhay Gouri", email: "abhaygouri100@gmail.com", membershipId: "102290649" },
  { name: "Aditya Kulkarni", email: "adityakulkarni22222@gmail.com", membershipId: "102289062" },
  { name: "Aditya S Anavekar", email: "adityaanavekar17@gmail.com", membershipId: "102295535" },
  { name: "Akshata Bonaboyin", email: "akshataboanboyin@gmail.com", membershipId: "102286512" },
  { name: "Akshata Sali", email: "akshatasali40@gmail.com", membershipId: "102295101" },
  { name: "Akshay Bulbule", email: "akshaybulbule111@gmail.com", membershipId: "102124080" },
  { name: "Amrita Oshimath", email: "amritaoshimath@gmail.com", membershipId: "102295615" },
  { name: "Ananya Madivalar", email: "ananyamadivalar06@gmail.com", membershipId: "102290569" },
  { name: "Ananya Manjunath Patil", email: "pananya145@gmail.com", membershipId: "102289056" },
  { name: "Anjali Ratnakar", email: "anjaliratnakar630@gmail.com", membershipId: "102282617" },
  { name: "Anuradha Sopinnavar", email: "mmanju49399@gmail.com", membershipId: "102295470" },
  { name: "Anusha B Galatagi", email: "anushrigalatagi@gmail.com", membershipId: "102290506" },
  { name: "Anushree M Bendigeri", email: "anushreebendigeri@gmail.com", membershipId: "102290314" },
  { name: "Avani", email: "avanishetty18@gmail.com", membershipId: "102290516" },
  { name: "Avani Badami", email: "avanibadami08@gmail.com", membershipId: "102295363" },
  { name: "Basavarajeshwari R Golasangi", email: "poojarajesh161@gmail.com", membershipId: "102295276" },
  { name: "Bharath", email: "bharathbadiger804@gmail.com", membershipId: "102291014" },
  { name: "Bhavani N B Goudru", email: "bhavaninbg@gmail.com", membershipId: "102219446" },
  { name: "Bhoomika S Ballari", email: "bhoomikaballary04@gmail.com", membershipId: "102286334" },
  { name: "Chaitali C Khandugol", email: "chaitali.c.k.7@gmail.com", membershipId: "102278633" },
  { name: "Chaya C Madli", email: "chayamadli11@ieee.org", membershipId: "101070729" },
  { name: "Chetan Tigadi", email: "chetantigadi607@gmail.com", membershipId: "102290970" },
  { name: "Hardik Kotur", email: "koturhardik94@gmail.com", membershipId: "102295229" },
  { name: "Heena Kousar Savanur", email: "heenasavanur80@gmail.com", membershipId: "102218870" },
  { name: "Jyoti M Hulakoppa", email: "jyotihulakoppa7@gmail.com", membershipId: "102295092" },
  { name: "Kavya Hiremath", email: "shiremath540@gmail.com", membershipId: "102290849" },
  { name: "Keertana Nagaraddi", email: "keerthanarn12@gmail.com", membershipId: "102291007" },
  { name: "Keerti Shirol", email: "keertishirol83@gmail.com", membershipId: "102290936" },
  { name: "Lavanya P Chougule", email: "lavanyachougala2@gmail.com", membershipId: "102278549" },
  { name: "Madhu B Hudali", email: "madhuhudali5@gmail.com", membershipId: "102295506" },
  { name: "Madhu Mudigoudra", email: "madhumudigoudra33@gmail.com", membershipId: "102290434" },
  { name: "Madhushree Kambar", email: "madhushreekambar9@gmail.com", membershipId: "102290722" },
  { name: "Manasi Malode", email: "mansimalode756@gmail.com", membershipId: "102289048" },
  { name: "Manaswi Shirodkar", email: "manaswishirodkar123@gmail.com", membershipId: "102279001" },
  { name: "Manoj Mudenagudi", email: "manojmudenagudi3@gmail.com", membershipId: "102295172" },
  { name: "Maryam Khan", email: "khanmaryamy11@gmail.com", membershipId: "102279027" },
  { name: "Meghana Mahale", email: "meghanagmahale@gmail.com", membershipId: "102290426" },
  { name: "Nakshatra Devakar", email: "nakshatradevakar@gmail.com", membershipId: "102295342" },
  { name: "Nandita V Kundanagar", email: "nanditakundanaga1@ieee.org", membershipId: "101055066" },
  { name: "Neha M Nasibi", email: "nehanasibi@gmail.com", membershipId: "102286308" },
  { name: "Nisha R Bidrolkar", email: "bidrolkarnisha@gmail.com", membershipId: "102291006" },
  { name: "Pooja Patil", email: "ashapatil1437@gmail.com", membershipId: "102278679" },
  { name: "Pragati Giri", email: "pragatigiri157@gmail.com", membershipId: "102267754" },
  { name: "Pratham Tumminakatti", email: "", membershipId: "100852062" },
  { name: "Preeti Arkasali", email: "Arkasalipreeti88@gmail.com", membershipId: "102295293" },
  { name: "Rachana R M", email: "rachanarm8@gmail.com", membershipId: "102284960" },
  { name: "Rakshita More", email: "rakshumore075@gmail.com", membershipId: "102278745" },
  { name: "Rashmi Toranagatti", email: "toranagattirashmi@gmail.com", membershipId: "102282513" },
  { name: "Rohini M Badiger", email: "rohinimb84@gmail.com", membershipId: "102219468" },
  { name: "Roopali Pawar", email: "28soujanyapawar@gmail.com", membershipId: "102278925" },
  { name: "Samarth Khiroji", email: "khirojisamarth@gmail.com", membershipId: "101662183" },
  { name: "Samir Ahmed Pathan", email: "pathansamirahmed@gmail.com", membershipId: "101680666" },
  { name: "Sanjana Dhawale", email: "sanjanadhawale@ieee.org", membershipId: "100851961" },
  { name: "Sanjana Katagar", email: "katagarsanjana@gmail.com", membershipId: "102295488" },
  { name: "Sanjana S Netrakar", email: "netrakarsanjana@gmail.com", membershipId: "102290499" },
  { name: "Sarayu Kolagal", email: "sarayukolagal@gmail.com", membershipId: "102290619" },
  { name: "Sejal Nargund", email: "sejalnargund@ieee.org", membershipId: "100852355" },
  { name: "Shivani", email: "shivanishetty175@gmail.com", membershipId: "102290552" },
  { name: "Shreyas Magadum", email: "shreyasmagadum3@gmail.com", membershipId: "102290738" },
  { name: "Shridhar Pujar", email: "shridharpujar2005@gmail.com", membershipId: "102290658" },
  { name: "Shriraksha", email: "rakshabandi44@gmail.com", membershipId: "102286082" },
  { name: "Shrusti Udapudi", email: "udapudinagendra72@gmail.com", membershipId: "102290625" },
  { name: "Shubhada Gouda", email: "goudashubhada@gmail.com", membershipId: "102295559" },
  { name: "Shubham Jalawadi", email: "shubhamjalawadi@gmail.com", membershipId: "102268205" },
  { name: "Sneha Bangarimath", email: "snehabangarimath950@gmail.com", membershipId: "102295220" },
  { name: "Sneha Belgaonkar", email: "snehabelgaonkar206@gmail.com", membershipId: "102295322" },
  { name: "Sneha Dhiran", email: "snehadhiran48@gmail.com", membershipId: "102290598" },
  { name: "Spoorti Rao", email: "spoortirao3029@gmail.com", membershipId: "102295480" },
  { name: "Srushti S Betasur", email: "srushtib848@gmail.com", membershipId: "102290776" },
  { name: "Srusti Naveen Nayak", email: "srustinayak452@gmail.com", membershipId: "102295170" },
  { name: "Stuti Inamdar", email: "stutiinamdar824@gmail.com", membershipId: "102282503" },
  { name: "Suma A Godachppanavar", email: "sgodachppanavar@gmail.com", membershipId: "102282547" },
  { name: "Sunita V Miragani", email: "sunitavm025@gmail.com", membershipId: "102286400" },
  { name: "Supreet Chinnannavar", email: "supreetnc@ieee.org", membershipId: "100852084" },
  { name: "Suraj Krishna Patil", email: "surajkpatil9380@gmail.com", membershipId: "102267770" },
  { name: "Sushmita B Rayappanavar", email: "sushmitarayappanavar0@gmail.com", membershipId: "102219339" },
  { name: "Swaleha Bapusab Hadli", email: "swalehabh@gmail.com", membershipId: "102218612" },
  { name: "Swathi S Gondhali", email: "gondhaliswati51@gmail.com", membershipId: "102286249" },
  { name: "Swati Jain", email: "swatibjain000@gmail.com", membershipId: "102288982" },
  { name: "Swati M Hosur", email: "swatihosur07@gmail.com", membershipId: "102267752" },
  { name: "Tanuja Kamble", email: "kambletanuja605@gmail.com", membershipId: "102286512" },
  { name: "Tejaswini M Shettangoudar", email: "tejaswinims151@gmail.com", membershipId: "102290542" },
  { name: "Tejaswini Sherkhane", email: "tejusherkhane123@gmail.com", membershipId: "102290468" },
  { name: "Vaishnavi Pattar", email: "vaishnavipattar234@gmail.com", membershipId: "102218718" },
  { name: "Varsha Araksali", email: "varshaarkasali321@gmail.com", membershipId: "102281604" },
  { name: "Varshini Patil", email: "varshinipatil864@gmail.com", membershipId: "102290424" },
  { name: "Varun Pol", email: "varunpol6360@gmail.com", membershipId: "102295121" },
  { name: "Vidya Huggimath", email: "vidyahuggimath@gmail.com", membershipId: "102295495" },
  { name: "Swapna Bayannavar", email: "", membershipId: "102238792" },
  { name: "Rajeshwari S", email: "", membershipId: "102223741" },
  { name: "Sneha S", email: "", membershipId: "102216375" },
  { name: "Neelambika Patil", email: "", membershipId: "102218446" },
  { name: "Ashwini Munavalli", email: "", membershipId: "102237876" },
  { name: "Vanita Khemalapure", email: "", membershipId: "102224087" },
  { name: "Rajani Hiremath", email: "", membershipId: "102224472" },
  { name: "Devindra Pawar", email: "", membershipId: "102244185" },
];

const MemberCard = ({ member, showMeta = false }) => (
  <div className="bg-white border border-brand/15 overflow-hidden hover:shadow-md transition-all duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onError={(e) => {
          e.target.src = "/IEEE_images/execom_members/default-profile.png";
        }}
      />
    </div>

    <div className="p-5">
      <h3
        className="text-2xl text-brand font-semibold"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {member.name}
      </h3>

      <p
        className="italic text-lg text-[#2a2a2a]/80"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {member.role}
      </p>

      <p className="mt-2 text-sm text-[#2a2a2a]/75">{member.designation}</p>

      {showMeta && (
        <div className="mt-4 border-t border-brand/10 pt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-brand" />
            <span>{member.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <IdCard size={15} className="text-brand" />
            <span>{member.membershipId}</span>
          </div>
        </div>
      )}
    </div>
  </div>
);

const MembersTable = ({ members }) => {
  const half = Math.ceil(members.length / 2);
  const leftMembers = members.slice(0, half);
  const rightMembers = members.slice(half);

  const TableBlock = ({ data }) => (
  <div className="overflow-hidden border border-brand/10 bg-white">
    <table className="w-full table-fixed text-sm">
      <thead className="bg-brand/5 border-b border-brand/10">
        <tr>
          <th className="w-[35%] text-left px-3 py-3 text-brand font-semibold">
            Name
          </th>

          <th className="w-[40%] text-left px-3 py-3 text-brand font-semibold">
            Email
          </th>

          <th className="w-[25%] text-left px-3 py-3 text-brand font-semibold">
            ID
          </th>
        </tr>
      </thead>

      <tbody>
        {data.map((member) => (
          <tr
            key={member.membershipId}
            className="border-t border-brand/10 hover:bg-brand/5"
          >
            <td className="px-3 py-3 text-xs">
              {member.name}
            </td>

            <td
            className="px-3 py-3 text-[11px] break-all"
            >
              {member.email || "-"}
            </td>

            <td className="px-3 py-3 text-xs whitespace-nowrap">
              {member.membershipId}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

  return (
    <div className="grid lg:grid-cols-2 gap-3">
      <TableBlock data={leftMembers} />
      <TableBlock data={rightMembers} />
    </div>
  );
};

const IeeeExecom = () => {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <main>
      <InnerHero
        title="IEEE Execom"
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=2400"
        breadcrumbs={[
          { label: "Associations & Innovation Hub", to: "/associations" },
          { label: "IEEE", to: "/associations/ieee" },
          { label: "Execom" },
        ]}
      />

      <section className="bg-surface-alt/60 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans-ui font-semibold tracking-wider text-brand">
          <Link to="/associations/ieee" className="uppercase hover:underline">
            Home
          </Link>
          <Link
            to="/associations/ieee/about-us"
            className="uppercase hover:underline"
          >
            About Us
          </Link>
          <Link
            to="/associations/ieee/events"
            className="uppercase hover:underline"
          >
            Events
          </Link>
          <Link
            to="/associations/ieee#achievements"
            className="uppercase hover:underline"
          >
            Achievements
          </Link>
          <Link
            to="/associations/ieee/execom"
            className="uppercase hover:underline"
          >
            Execom
          </Link>
          <Link to="/associations/ieee" className="uppercase hover:underline">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <Link
          to="/associations/ieee"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          Back to IEEE
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-white border border-brand/15 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.28em] text-brand font-semibold mb-3">
                VDIT IEEE Student Branch
              </p>

              <h1
                className="text-3xl md:text-5xl text-brand font-semibold leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Executive Committee 2026
              </h1>

              <p className="mt-5 text-[16px] text-[#2a2a2a]/85 leading-relaxed">
                The VDIT IEEE Student Branch Executive Committee for the year
                2026 includes faculty leadership, professional members and
                student office bearers who guide, coordinate and support IEEE
                activities at KLS VDIT.
              </p>
            </section>

            <section>
              <h2
                className="text-3xl text-brand font-semibold mb-5 flex items-center gap-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <Users size={24} />
                Faculty & Professional Members
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {execomMembers.map((member) => (
                  <MemberCard key={member.name} member={member} showMeta />
                ))}
              </div>
            </section>

            <section>
              <h2
                className="text-3xl text-brand font-semibold mb-5 flex items-center gap-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <Users size={24} />
                Student Executive Committee
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studentExecom.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </section>

            <section>
              <button
                type="button"
                onClick={() => setShowMembers(!showMembers)}
                className="w-full bg-white border border-brand/15 p-6 flex justify-between items-center gap-4 hover:bg-brand/5 transition-all text-left"
              >
                <h2
                  className="text-2xl md:text-3xl text-brand font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  VDIT IEEE STUDENT BRANCH MEMBERS for the Year 2026
                </h2>

                <ChevronDown
                  size={24}
                  className={`text-brand flex-shrink-0 transition-transform duration-300 ${
                    showMembers ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showMembers && (
                <div className="bg-white border-x border-b border-brand/15 p-6">
                  <MembersTable members={ieeeStudentMembers} />
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-32">
            <div className="bg-brand text-white p-6">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold opacity-80">
                IEEE SB Structure
              </p>

              <h3
                className="text-3xl font-semibold mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Year 2026
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/85">
                VDIT IEEE Student Branch structure includes faculty guidance,
                professional members and student leaders.
              </p>
            </div>

            <div className="bg-white border border-brand/15 p-6">
              <h4 className="text-xs uppercase tracking-widest text-brand font-semibold">
                Quick Summary
              </h4>

              <div className="mt-4 space-y-3 text-sm text-[#2a2a2a]/85">
                <div>
                  Professional Members: <strong>4</strong>
                </div>
                <div>
                  Student Office Bearers: <strong>8</strong>
                </div>
                <div>
                  Student Branch Code: <strong>STB99377</strong>
                </div>
                <div>
                  Year: <strong>2026</strong>
                </div>
                <div>
                  Student Members: <strong>{ieeeStudentMembers.length}</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default IeeeExecom;