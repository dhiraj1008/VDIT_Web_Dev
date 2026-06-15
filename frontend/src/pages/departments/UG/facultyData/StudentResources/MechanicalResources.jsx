import React from "react";
import StudentResourceTemplate from "./StudentResourceTemplate";

export const resourcePage = {
  id: "mechanical-resources",
  department: "Mechanical Engineering",
  short: "ME",
  description: "Student resources for the Department of Mechanical Engineering.",
  sections: [
    { title: "Syllabus", items: [] },
    { title: "Timetable", items: [] },
    { title: "Academic Calendar", items: [] },
    { title: "Lab Manuals", items: [] },
    { title: "Question Papers", items: [] },
    { title: "Useful Links", items: [] },
  ],
};

const MechanicalResources = () => <StudentResourceTemplate resourcePage={resourcePage} />;

export default MechanicalResources;
