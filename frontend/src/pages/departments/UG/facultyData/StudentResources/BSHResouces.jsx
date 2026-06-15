import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "bsh-resources",
  department: "Basic Science & Humanities",
  short: "BSH",
  description: "Student resources for the Department of Basic Science & Humanities.",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const BSHResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default BSHResources;
