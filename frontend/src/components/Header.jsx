import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import SearchModal from "./SearchModal";
// import ThemeSwitcher from "./ThemeSwitcher";

const topLinks = [
  //{ label: "Announcements", to: "/announcements" },
  //{ label: "People@VDIT", to: "/about/people" },
  //{ label: "Students", to: "/students" },
  //{ label: "Alumni", to: "/alumni" },
  //{ label: "Recruitment", to: "/about/recruitment" },
  //{ label: "NIRF", to: "/about/nirf" },
];

// Mega-menu structure: each top-level item has columns of links + optional 3rd-level children
const mainNav = [
  {
    label: "ABOUT",
    to: "/about",
    columns: [
      {
        heading: "About VDIT",
        links: [
          { label: "About KLS", to: "/about/about-kls" },
          { label: "About VDIT", to: "/about/about-vdit" },
          { label: "Chairman's Message", to: "/about/chairmans-message" },
          { label: "Principal's Message", to: "/about/principals-message" },
          //{ label: "Vision & Mission", to: "/about/vision-mission" },
          //{ label: "Our History", to: "/about/our-history" },
        ],
      },
      /*{
        heading: "Governance",
        links: [
          { label: "Governing Bodies", to: "/about/governing-bodies" },
          { label: "Committees & Chairs", to: "/about/committees" },
          { label: "Rules & Regulations", to: "/about/rules" },
          { label: "Right to Information", to: "/about/rti" },
        ],
      },
      {
        heading: "People @ VDIT",
        links: [
          { label: "Faculty", to: "/about/people?tab=faculty" },
          { label: "Administrative Staff", to: "/about/people?tab=admin" },
          { label: "Researchers", to: "/about/people?tab=research" },
          { label: "Fellows", to: "/about/people?tab=fellows" },
        ],
      },
      {
        heading: "Quality & Disclosure",
        links: [
          { label: "IQAC", to: "/about/iqac" },
          { label: "NAAC", to: "/about/naac" },
          { label: "NIRF", to: "/about/nirf" },
          { label: "Mandatory Disclosure", to: "/about/mandatory-disclosure" },
          { label: "Financial Statements", to: "/about/financial-statements" },
        ],
      },*/
    ],
  },
  {
    label: "ACADEMICS",
    to: "/academics",
    columns: [
      {
        heading: "Undergraduate Programs",
        links: [
          { label: "Computer Science & Engineering", to: "/programme/cse" },
          { label: "Computer Science & Engineering (AI & ML)", to: "/programme/cse-aiml" },
          { label: "Electronics & Communication Engineering", to: "/programme/ece" },
          { label: "Electrical & Electronics Engineering", to: "/programme/eee" },
          { label: "Mechanical Engineering", to: "/programme/me" },
          { label: "Civil Engineering", to: "/programme/civil" },
          { label: "Basic Science", to: "/programme/bsh" },
        ],
      },
      {
        heading: "Postgraduate Programs",
        links: [
          { label: "Industrial Electronics", to: "/programme/ece" },
          { label: "Thermal Power Engineering", to: "/programme/eee" },
        ],
      },
      {
        heading: "Research Centre",
        links: [
          { label: "Computer Science & Engineering", to: "/programme/cse" },
          { label: "Electronics & Communication Engineering", to: "/programme/ece" },
          { label: "Electrical & Electronics Engineering", to: "/programme/eee" },
          { label: "Mechanical Engineering", to: "/programme/me" },
          { label: "Physics", to: "/programme/physics" },
          { label: "Chemistry", to: "/programme/chemistry" },
          { label: "Mathematics", to: "/programme/mathematics" },
        ],
      },
      {
        heading: "COE",
        links: [
          { label: "Cyber Security Innovation Lab", to: "/coe/cyber-security-innovation-lab" },
          { label: "Toyota Centre of Excellence", to: "/coe/toyota-centre-of-excellence" },
          { label: "NVIDIA Jetson Orin Nano Innovation Learning Centre", to: "/coe/nvidia-jetson-innovation-learning-centre" },
          { label: "Microchip Embedded Systems", to: "/coe/microchip-embedded-systems" },
          { label: "Royal Enfield Training Centre", to: "/coe/royal-enfield-training-centre" },
          { label: "LEAP", to: "/coe/leap" },
        ],
      },
      {
        heading: "Library",
        links: [
          { label: "Library", to: "/library" },
        ],
      },
    ],
  },
  {
    label: "LIFE",
    to: "/campus",
    columns: [
      {
        heading: "Campus Life",
        links: [
          { label: "Hostels", to: "/campus-life/hostels" },
          { label: "Transportation", to: "/campus-life/transportation" },
          { label: "Sports & Gym", to: "/campus-life/sports-gym" },
          { label: "ATM", to: "/campus-life/atm" },
          { label: "Solar Rooftop", to: "/campus-life/solar-rooftop" },
        ],
      },
    ],
  },
  {
  label: "ASSOCIATIONS & INNOVATION HUB",
  //to: "/associations",
  columns: [
      {
        heading: "Professional Bodies",
        links: [
          { label: "Institute of Electrical and Electronics Engineers (IEEE)", to: "/associations/ieee" },
          { label: "Computer Society of India (CSI)", to: "/associations/csi" },
          { label: "Association for Computing Machinery (ACM)", to: "/associations/acm" },
          { label: "Indian Society for Technical Education (ISTE)", to: "/associations/iste" },
          { label: "Institution of Engineers (India) (IEI)", to: "/associations/iei" },
          { label: "Board for IT Education Standards (BITES)", to: "/associations/bites" },
          { label: "Institution's Innovation Council (IIC)", to: "/associations/iic" },
        ],
      },
    ],
},
  {
    label: "CLUBS",
    //to: "/clubs",
    columns: [
      {
        heading: "Student Clubs",
        links: [
          { label: "Red Ribbon Club", to: "/clubs#red-ribbon" },
          { label: "RedCross Society", to: "/clubs#red-cross" },
          { label: "Eco Club", to: "/clubs#eco" },
          { label: "Kalpavruksha Kannada Sangha", to: "/clubs#kalpavruksha" },
          { label: "NSS", to: "/clubs#nss" },
          { label: "Standards Club", to: "/clubs#standards" },
        ],
      },
    ],
  }, 
  {
    label: "AWARDS & RECOGNITION",
    to: "/awards-recognition",
    columns: null,
  }

  /*{
    label: "ADMISSIONS",
    to: "/admissions",
    columns: [
      {
        heading: "Apply",
        links: [
          { label: "How to Apply", to: "/admissions#apply" },
          { label: "Eligibility", to: "/admissions#eligibility" },
          { label: "Important Dates", to: "/admissions#dates" },
          { label: "Admission Enquiry", to: "/admissions#apply" },
        ],
      },
      {
        heading: "Fees & Aid",
        links: [
          { label: "Fee Structure", to: "/admissions#fees" },
          { label: "Scholarships", to: "/admissions#scholarships" },
          { label: "Hostel Fees", to: "/campus#hostels" },
        ],
      },
    ],
  },
  {
    label: "RESEARCH",
    to: "/research",
    columns: [
      {
        heading: "Research at VDIT",
        links: [
          { label: "Research Areas", to: "/research#areas" },
          { label: "Research Centres", to: "/research#centres" },
          { label: "Publications", to: "/research#publications" },
          { label: "Funded Projects", to: "/research#projects" },
        ],
      },
      {
        heading: "Innovation",
        links: [
          { label: "IEDC", to: "/research#iedc" },
          { label: "Industry-Institute Cell", to: "/research#i-i" },
          { label: "Patents", to: "/research#patents" },
        ],
      },
    ],
  },to: "/forum",
    columns: null,
  {
    label: "CAMPUS",
    to: "/campus",
    columns: [
      {
        heading: "Facilities",
        links: [
          { label: "Library", to: "/library" },
          { label: "Hostels", to: "/campus#hostels" },
          { label: "Cafeteria", to: "/campus#facilities" },
          { label: "Wi-Fi & IT", to: "/campus#facilities" },
          { label: "Transport", to: "/campus#facilities" },
        ],
      },
      {
        heading: "Student Life",
        links: [
          { label: "Sports", to: "/campus#sports" },
          { label: "Cultural", to: "/campus#cultural" },
          { label: "NSS", to: "/campus#nss" },
          { label: "Student Clubs", to: "/student-clubs" },
        ],
      },
      {
        heading: "Career",
        links: [
          { label: "Placements", to: "/placements" },
          { label: "Recruiters", to: "/placements#recruiters" },
          { label: "Training & Skill Dev.", to: "/placements#training" },
        ],
      },
    ],
  },
  {
    label: "NEWS & EVENTS",
    to: "/news-events",
    columns: null,
  },
  {
    label: "VDIT FORUM",
    to: "/forum",
    columns: null,
  },*/
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = (label) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMega(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMega(null);
      closeTimer.current = null;
    }, 180);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-surface transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Top utility bar */}
        <div className="hidden md:flex justify-end items-center gap-5 px-6 lg:px-10 pt-3 text-[12.5px] font-sans-ui">
          {topLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-brand hover:text-brand-dark transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1 border border-brand/30 px-3 py-1 rounded text-brand hover:bg-brand hover:text-surface transition-colors whitespace-nowrap"
            aria-label="Open search"
          >
            <Search size={14} />
            <span>Search</span>
          </button>
          {/* <ThemeSwitcher /> */}
        </div>

        {/* Main nav row */}
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 py-3">
          <a href="/" className="flex items-center gap-3">
            <Logo size={120} />
            <div className="leading-tight">
              <div
                className="text-brand font-bold text-2xl md:text-3xl tracking-wide whitespace-nowrap"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                KLS VDIT
              </div>
              <div className="text-[#3a3a3a] text-[11px] md:text-xs font-sans-ui leading-tight max-w-[280px]">
                Vishwanathrao Deshpande Institute of Technology, Haliyal
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 font-sans-ui text-[13.5px] font-semibold tracking-wider whitespace-nowrap">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.columns && openMenu(item.label)}
                onMouseLeave={() => item.columns && scheduleClose()}
              >
                <NavLink
                  to={item.to || "#"}
                  onClick={(e) => {
                    if (!item.to) e.preventDefault();
                  }}
                  className={({ isActive }) =>
                    `nav-link text-[#2a2a2a] hover:text-brand flex items-center gap-1 ${
                      isActive ? "text-brand" : ""
                    }`
                  }
                >
                  {item.label}
                  {item.columns && <ChevronDown size={13} />}
                </NavLink>
              </div>
            ))}
            <button
              onClick={() => setSearchOpen(true)}
              className="lg:hidden text-brand p-2"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-brand"
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-brand"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mega menu panel (desktop) */}
        {openMega && (
          <div
            onMouseEnter={() => openMenu(openMega)}
            onMouseLeave={() => scheduleClose()}
            className="hidden lg:block absolute left-0 right-0 top-full pt-2 z-40"
          >
            {/* Invisible bridge to prevent dead-zone between trigger & panel */}
            <div className="bg-surface border-t border-brand/15 shadow-xl mega-anim">
            {(() => {
              const item = mainNav.find((i) => i.label === openMega);
              if (!item || !item.columns) return null;
              return (
                <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6">
                  {item.columns.map((col) => (
                    <div key={col.heading}>
                      <h4 className="text-[11px] tracking-[0.18em] text-brand font-sans-ui font-semibold mb-3 uppercase">
                        {col.heading}
                      </h4>
                      <ul className="space-y-2 min-w-max">
                        {col.links.map((l) => (
                          <li key={l.to}>
                            <Link
                              to={l.to}
                              onClick={() => {
                                if (closeTimer.current) clearTimeout(closeTimer.current);
                                if (!l.children) setOpenMega(null);
                              }}
                              className="text-[13.5px] text-[#2a2a2a] hover:text-brand transition flex items-center gap-1.5 whitespace-nowrap"
                            >
                              <ChevronRight
                                size={12}
                                className="text-brand/0 group-hover:text-brand whitespace-nowrap"
                              />
                              {l.label}
                            </Link>
                            {l.children && (
                              <ul className="mt-2 ml-4 space-y-1.5 border-l border-brand/15 pl-3 whitespace-nowrap">
                                {l.children.map((child) => (
                                  <li key={child.to}>
                                    <Link
                                      to={child.to}
                                      onClick={() => {
                                        if (closeTimer.current) clearTimeout(closeTimer.current);
                                        setOpenMega(null);
                                      }}
                                      className="text-[13px] text-[#2a2a2a]/85 hover:text-brand transition flex items-start gap-1.5 leading-snug whitespace-nowrap"
                                    >
                                      <ChevronRight size={11} className="text-brand mt-0.5 flex-shrink-0" />
                                      <span>{child.label}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            })()}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-surface border-t border-brand/20 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1 font-sans-ui">
              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-brand/10"
                >
                  <button
                    onClick={() => {
                      if (item.columns) {
                        setOpenMobileMenu(
                          openMobileMenu === item.label ? null : item.label
                        );
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    className="w-full flex items-center justify-between py-3 text-[#2a2a2a] font-semibold text-sm tracking-wider"
                  >
                    <Link
                      to={item.to || "#"}
                      onClick={(e) => {
                        if (item.columns) e.preventDefault();
                        else setMobileOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.columns && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openMobileMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.columns && openMobileMenu === item.label && (
                    <div className="pl-4 pb-3 space-y-3">
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[10.5px] uppercase text-brand font-semibold tracking-widest mb-1.5 mt-2">
                            {col.heading}
                          </p>
                          <ul className="space-y-1.5">
                            {col.links.map((l) => (
                              <li key={l.to}>
                                {l.children ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setOpenMobileSubMenu(
                                          openMobileSubMenu === l.label ? null : l.label
                                        )
                                      }
                                      className="w-full py-1 text-[13px] text-[#2a2a2a]/85 hover:text-brand flex items-center justify-between"
                                    >
                                      <span>{l.label}</span>
                                      <ChevronDown
                                        size={14}
                                        className={`transition-transform ${
                                          openMobileSubMenu === l.label ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                    {openMobileSubMenu === l.label && (
                                      <ul className="ml-3 mt-1 space-y-1.5 border-l border-brand/15 pl-3">
                                        {l.children.map((child) => (
                                          <li key={child.to}>
                                            <Link
                                              to={child.to}
                                              onClick={() => setMobileOpen(false)}
                                              className="block py-1 text-[12.5px] text-[#2a2a2a]/75 hover:text-brand leading-snug"
                                            >
                                              {child.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    to={l.to}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1 text-[13px] text-[#2a2a2a]/85 hover:text-brand"
                                  >
                                    {l.label}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-2 text-xs">
                {topLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-brand py-1"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="pt-2">
                  {/* <ThemeSwitcher /> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;
