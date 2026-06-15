import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "cse-aiml-resources",
  department: "Computer Science & Engineering (AI & ML)",
  short: "CSE (AI & ML)",
  description: "Student resources for the Department of Computer Science & Engineering (AI & ML).",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [
        {
          label: "1st Semester TimeTable",
          href: "#",
        },
        {
          label: "2nd Semester TimeTable",
          href: "#",
        },
        {
          label: "3rd Semester TimeTable",
          href: "#",
        },
        {
          label: "4th Semester TimeTable",
          href: "/resources/student-resources/aiml/timetable/4th_Semester_TimeTable.pdf",
        },
        {
          label: "5th Semester TimeTable",
          href: "#",
        },
        {
          label: "6th Semester TimeTable",
          href: "/resources/student-resources/aiml/timetable/6th_Semester_TimeTable.pdf",
        },
    ] },
    { title: "Academic Calendar", items: [] },
    {
      title: "Lab Manuals",
      items: [
        {
          label: "1st Year (2025) Combined Lab Manual",
          href: "/resources/student-resources/aiml/lab-manuals/2nd-sem-2025-combined.pdf",
        },
        {
          label: " BAD402 (Artificial Intelligence) Lab Manual 2025-2026",
          href: "/resources/student-resources/aiml/lab-manuals/4th-sem-cseaiml-lab-manual-2025-2026.pdf",
        },
        {
          label: "BCSL606 (Machine Learning) Lab Manual",
          href: "/resources/student-resources/aiml/lab-manuals/6th-sem-lab-manual.pdf",
        },
        {
          label: "BAI358 (PHP) Lab Manual",
          href: "/resources/student-resources/aiml/lab-manuals/bai358-php-lab-manual.pdf",
        },
        {
          label: "BAIL504 (DVL) Lab Manual",
          href: "/resources/student-resources/aiml/lab-manuals/bail504-dvl-lab-manual.pdf",
        },
        {
          label: "BCS303 (Operating System) Lab Manual",
          href: "/resources/student-resources/aiml/lab-manuals/bcs303-operating-system-lab-manual.pdf",
        },
        {
          label: "BCSL305 (Data Structures) Lab Manual",
          href: "/resources/student-resources/aiml/lab-manuals/bcsl305-ds-lab-manual.pdf",
        },
        {
          label: "BAI702 (Machine Learning 2) Lab Manual 1",
          href: "/resources/student-resources/aiml/lab-manuals/ml2-lab-manual-1.pdf",
        },
      ],
    },
    {
      title: "Question Papers & Solutions",
      semesters: [
        {
          label: "22 Scheme 1st Semester",
          items: [
            {
              label: "BMATS101 QP Solution (Dec-Jan 24-25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-1st-sem/bmats101-qp-solution-dec-jan-24-25.pdf",
            },
            {
              label: "BMATS101 Model QP and Solution",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-1st-sem/bmats101-model-qp-and-solution.pdf",
            },
          ],
        },
        {
          label: "22 Scheme 2nd Semester",
          items: [
            {
              label: "BMATS201 Model QP and Solution",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-2nd-sem/bmats201-model-qp-and-solution.pdf",
            },
            {
              label: "BMATS201 QP and Solution (Jun-July 2024)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-2nd-sem/bmats201-qp-and-solution-jun-july-2024.pdf",
            },
            {
              label: "BPLCK205B Intro to Python Programming Model QP and Solution",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-2nd-sem/bplck205b-intro-to-python-prog-model-qp-and-solution.pdf",
            },
            {
              label: "BPOPS203 QP and Solution (Jun-July 2023)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-2nd-sem/bpops203-qp-and-solution-jun-july-2023.pdf",
            },
          ],
        },
        {
          label: "22 Scheme 3rd Semester",
          items: [
            {
              label: "BCS301 QP and Solution (Dec-Jan 24-25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-3rd-sem/bcs301-qp-and-solution-dec-jan-24-25.pdf",
            },
            {
              label: "BCS302 QP and Solution (Dec-Jan 24-25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-3rd-sem/bcs302-qp-and-solution-dec-jan-24-25.pdf",
            },
            {
              label: "BCS303 Operating System Solution",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-3rd-sem/bcs303-operating-system-solution.pdf",
            },
            {
              label: "BCS304 QP and Solution (Dec-Jan 23-24)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-3rd-sem/bcs304-qp-and-solution-dec-jan-23-24.pdf",
            },
            {
              label: "BCS304 QP and Solution (Dec-Jan 24-25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-3rd-sem/bcs304-qp-and-solution-dec-jan-24-25.pdf",
            },
            {
              label: "BCS306A QP and Solution (Dec-Jan 24-25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-3rd-sem/bcs306a-qp-and-solution-dec-jan-24-25.pdf",
            },
          ],
        },
        {
          label: "22 Scheme 4th Semester",
          items: [
            {
              label: "BAD402 QP and Solution (Jun-July 24)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-4th-sem/bad402-qp-and-solution-jun-july-24.pdf",
            },
            {
              label: "BBOC407 QP and Solution (Jun-July 25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-4th-sem/bboc407-qp-and-solution-jun-july-25.pdf",
            },
            {
              label: "BBOC407 Solution",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-4th-sem/bboc407-solution.pdf",
            },
            {
              label: "BCS401 QP and Solution (Jun-July 25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-4th-sem/bcs401-qp-and-solution-jun-july-25.pdf",
            },
            {
              label: "BCS403 QP and Solution (Jun-July 25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-4th-sem/bcs403-qp-and-solution-jun-july-25.pdf",
            },
            {
              label: "BCS405A QP and Solution (Jun-July 25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-4th-sem/bcs405a-qp-and-solution-jun-july-25.pdf",
            },
          ],
        },
        {
          label: "22 Scheme 5th Semester",
          items: [
            {
              label: "BCS501 QP and Solution (Dec24-Jan25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-5th-sem/bcs501-qp-and-solution-dec24-jan25.pdf",
            },
          ],
        },
        {
          label: "22 Scheme 6th Semester",
          items: [
            {
              label: "BCO601 Solution",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-6th-sem/bco601-solution.pdf",
            },
            {
              label: "BCS602 QP and Solution (Jun-July 25)",
              href: "/resources/student-resources/aiml/question-papers-solutions/22-scheme-6th-sem/bcs602-qp-and-solution-jun-july-25.pdf",
            },
          ],
        },
      ],
    },
    {
      title: "Add-On Subjects",
      semesters: [
        { label: "1st Semester", items: [] },
        { label: "2nd Semester", items: [] },
        { label: "3rd Semester", items: [] },
        {
          label: "4th Semester",
          items: [
            {
              label: "4th Sem Add-On 1 Syllabus",
              href: "/resources/student-resources/aiml/addon-course/4th-sem-add-on-1-syllabus.pdf",
            },
            {
              label: "4th Sem Add-On 2 Syllabus",
              href: "/resources/student-resources/aiml/addon-course/4th-sem-add-on-2-syllabus.pdf",
            },
          ],
        },
        { label: "5th Semester", items: [] },
        { label: "6th Semester", items: [] },
        {
          label: "7th Semester",
          items: [
            {
              label: "7th Sem Add-On 1 Syllabus",
              href: "/resources/student-resources/aiml/addon-course/7th-sem-add-on-1-syllabus.pdf",
            },
            {
              label: "7th Sem Add-On 2 Syllabus",
              href: "/resources/student-resources/aiml/addon-course/7th-sem-add-on-2-syllabus.pdf",
            },
          ],
        },
        { label: "8th Semester", items: [] },
      ],
    },
    {
      title: "Published Papers & Patents",
      items: [
        {
          label: " INTEGRATED LEGAL CASE ANALYSIS AND DOCUMENT GENERATION SYSTEM USING RETRIEVAL-AUGMENTED AI MODELS ",
          href: "/resources/student-resources/aiml/published-papers-patents/viewjournal-396.pdf",
        },
        {
          label: " NETWORK TRAFFIC ANALYSIS FOR SECURITY ANOMALY ",
          href: "/resources/student-resources/aiml/published-papers-patents/viewjournal-799.pdf",
        },
        {
          label: " CROWD SENSE: A REAL-TIME SYSTEM FOR CROWD ANALYTICS",
          href: "/resources/student-resources/aiml/published-papers-patents/viewjournal-883.pdf",
        },
        {
          label: " AI-DRIVEN MOBILE FORENSICS",
          href: "/resources/student-resources/aiml/published-papers-patents/viewjournal-1145.pdf",
        },
        {
          label: " AI-BASED TEXT TO 3D MODEL GENERATOR",
          href: "/resources/student-resources/aiml/published-papers-patents/viewjournal-1793-793.pdf",
        },
      ],
    },
    {
      title: "Mentor List",
      items: [
        {
          label: "2025-26",
          href: "/resources/student-resources/aiml/Mentor%20list/2025-26/Montor%20mentee%202025-26.pdf",
        },
      ],
    },
    { title: "Calender of Events", items: [
        {   label: "2nd & 4th Semester",
            href: "/resources/student-resources/aiml/calender-of-events/2nd_&_4th_Sem.pdf",
        }
    ] },
  ],
};

const AIMLResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default AIMLResources;
