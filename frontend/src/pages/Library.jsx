import React from "react";
import { PageHero } from "./About";
import {
  BookOpen,
  Clock,
  Database,
  Globe2,
  Languages,
  LibraryBig,
  Monitor,
  Network,
  Users,
} from "lucide-react";

const highlights = [
  [BookOpen, "Volumes", "46,490+"],
  [LibraryBig, "Titles", "6,493"],
  [Users, "Reference Books", "8,000+"],
  [Monitor, "Digital Systems", "30"],
];

const missions = [
  "To provide comprehensive resources and services that support teaching, learning, and research activities.",
  "To continuously augment and maintain collections that cater to the academic and professional needs of the institute community.",
  "To promote information literacy, lifelong learning, and knowledge sharing.",
];

const libraryHighlights = [
  "Collection of 46,490+ volumes comprising 6,493 titles.",
  "More than 8,000 reference books covering engineering, science, management, and allied disciplines.",
  "Subscription to national and international journals through the VTU Consortium.",
  "Member of DELNET and NDLI.",
  "Spacious and well-equipped reading halls.",
  "Investment of over Rs. 1.12 crore in books, journals, and learning resources.",
  "Lending Library Scheme providing students with up to 5 books per semester.",
  "Dedicated Digital Library and Language Laboratory facilities.",
  "High-speed internet-enabled learning environment.",
];

const eResources = [
  "7,693+ full-text journals",
  "25,608+ e-books",
  "Research databases and conference proceedings",
  "Open-access academic resources",
  "IEEE Blended Learning Platform",
  "Knimbus remote access and mobile library services",
];

const publishers = [
  "Elsevier ScienceDirect",
  "Springer Nature",
  "IEEE Xplore",
  "Emerald Insight",
  "EBSCO Engineering Suite",
  "Cambridge University Press",
  "Cengage Learning",
  "Mint Books",
  "Knimbus Digital Library Platform",
  "DrillBit Plagiarism Detection Software",
];

const services = [
  "Reference Service",
  "Book Circulation Service",
  "Referral Service",
  "New Arrivals Display Service",
  "Newspaper Clipping Service",
  "Digital Library Access",
  "Language Laboratory Facility",
  "Inter-Library Loan Service",
  "Photocopy Service",
  "Spiral Binding",
  "Lamination Service",
  "Remote Access to E-Resources",
];

const languages = ["English", "German", "French", "Japanese"];

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white border border-brand/15 p-5">
    <Icon size={22} className="text-brand" />
    <h3 className="text-brand text-xl font-semibold mt-3">{title}</h3>
    <div className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-2">
      {children}
    </div>
  </div>
);

const TagList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="px-2.5 py-1 bg-brand/10 text-brand text-xs rounded-full"
      >
        {item}
      </span>
    ))}
  </div>
);

const Library = () => (
  <main>
    <PageHero
      title="Library & Information Centre"
      sub="JNAN SUDHA - a knowledge hub for learning, research, and innovation"
      image="https://images.pexels.com/photos/8423416/pexels-photo-8423416.jpeg?w=2400"
    />

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map(([Icon, k, v]) => (
          <div key={k} className="bg-white p-5 border border-brand/15">
            <Icon size={22} className="text-brand" />
            <p className="text-xs uppercase tracking-widest text-[#3a3a3a]/85 mt-2">
              {k}
            </p>
            <p className="text-lg text-brand font-semibold mt-1">{v}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-surface-alt/60 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 vdit-prose">
        <h2
          className="text-3xl text-brand font-semibold mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About the Library
        </h2>
        <p>
          The <strong>Library & Information Centre</strong> of <strong>KLS Vishwanathrao Deshpande
          Institute of Technology (KLS VDIT)</strong>, <strong>Haliyal</strong>, is a vibrant knowledge
          hub dedicated to supporting the academic, research, and learning needs
          of students, faculty, researchers, and staff. Established in <strong>2004</strong>, the
          library has grown into a modern information center offering extensive
          print and digital resources, advanced learning facilities, and
          technology-enabled services.
        </p>
        <p>
          Housed in a separate building named <strong>JNAN SUDHA</strong>, the library provides a
          conducive environment for <strong>learning</strong>, <strong>innovation</strong>, and <strong>research</strong>. The
          facility spans <strong>655 sq. m.</strong> and follows an open-access system, enabling
          users to freely access library resources. All books are classified and
          organized according to the <strong>Dewey Decimal Classification (DDC) system</strong>
          for efficient retrieval.
        </p>
        <p>
          Inspired by the vision of creating lifelong learners, the library
          serves as a center of academic excellence and intellectual growth,
          supporting the institute's mission of quality technical education and
          research.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div className="grid md:grid-cols-2 gap-4">
        <InfoCard icon={Globe2} title="Vision">
          <p>
            To provide a student-friendly learning environment that facilitates
            the dissemination of knowledge through modern information resources
            and technologies.
          </p>
        </InfoCard>
        <InfoCard icon={Network} title="Mission">
          <ul className="list-disc pl-5 space-y-2">
            {missions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </section>

    <section className="bg-surface-alt/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white border border-brand/15 p-5">
          <h2 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
            Library Highlights
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 mt-4 pl-5 list-disc text-sm text-[#2a2a2a]/85 leading-relaxed">
            {libraryHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-brand/15 p-5">
          <Clock size={22} className="text-brand" />
          <h3 className="text-brand text-xl font-semibold mt-3">Timings</h3>
          <p className="text-sm text-[#2a2a2a]/85 leading-relaxed mt-2">
            Library working hours: 8:00 AM to 5:00 PM.
          </p>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div className="grid lg:grid-cols-2 gap-4">
        <InfoCard icon={Database} title="Digital Library & E-Resources">
          <p>
            The Digital Library houses <strong>30 high-end multimedia systems</strong> with
            high-speed internet connectivity, enabling access to e-journals,
            e-books, databases, online courses, and multimedia learning
            resources.
          </p>
          <p>
            Through the <strong>VTU Consortium and institutional subscriptions</strong>, the library provides access to a vast collection of scholarly resources:
          </p>
          <div className="mt-4">
            <TagList items={eResources} />
          </div>
        </InfoCard>
        <InfoCard icon={Languages} title="Language Laboratory">
          <p>
            The Language Laboratory supports communication skill development and
            language learning through structured training.
          </p>
          <div className="mt-4">
            <TagList items={languages} />
          </div>
        </InfoCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="bg-white border border-brand/15 p-5">
          <h2 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
            Major Publishers & Databases
          </h2>
          <div className="mt-4">
            <TagList items={publishers} />
          </div>
        </div>
        <div className="bg-white border border-brand/15 p-5">
          <h2 className="text-xs uppercase tracking-widest text-brand font-semibold font-sans-ui">
            Library Services
          </h2>
          <div className="mt-4">
            <TagList items={services} />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-surface-alt/60 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 vdit-prose">
        <h2
          className="text-3xl text-brand font-semibold mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Commitment to Knowledge
        </h2>
        <p>
          The <strong>KLS VDIT Library</strong> continues to evolve as a modern learning resource
          center by <strong>integrating technology</strong>, <strong>digital resources</strong>, and <strong>quality
          services</strong>. It plays a pivotal role in nurturing <strong>academic excellence</strong>, <strong>
          fostering research culture</strong> and <strong>empowering students</strong> with the knowledge
          and skills required for professional success.
        </p>
      </div>
    </section>
  </main>
);

export default Library;
