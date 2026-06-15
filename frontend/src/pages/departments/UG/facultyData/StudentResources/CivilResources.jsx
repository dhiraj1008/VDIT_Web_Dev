import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "civil-resources",
  department: "Civil Engineering",
  short: "Civil",
  description: "Student resources for the Department of Civil Engineering.",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const CivilResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default CivilResources;
