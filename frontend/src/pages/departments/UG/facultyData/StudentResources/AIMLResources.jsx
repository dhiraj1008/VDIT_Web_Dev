import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "cse-aiml-resources",
  department: "Computer Science & Engineering (AI & ML)",
  short: "CSE (AI & ML)",
  description: "Student resources for the Department of Computer Science & Engineering (AI & ML).",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const AIMLResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default AIMLResources;
