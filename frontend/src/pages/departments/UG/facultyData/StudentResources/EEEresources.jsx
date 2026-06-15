import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "eee-resources",
  department: "Electrical & Electronics Engineering",
  short: "EEE",
  description: "Student resources for the Department of Electrical & Electronics Engineering.",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const EEEResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default EEEResources;
