import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "cse-resources",
  department: "Computer Science & Engineering",
  short: "CSE",
  description: "Student resources for the Department of Computer Science & Engineering.",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const CSEResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default CSEResources;
