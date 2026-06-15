import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "ece-resources",
  department: "Electronics & Communication Engineering",
  short: "ECE",
  description: "Student resources for the Department of Electronics & Communication Engineering.",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const ECEResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default ECEResources;
