import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import FacultyCard, { HodFacultyCard } from "./FacultyCard";

const FacultySection = ({ facultyData, programmeShort, Section }) => {
  const hod = facultyData?.hod || null;
  const members = facultyData?.members || [];
  const facultyCount = members.length + (hod ? 1 : 0);

  return (
    <Section
      id="faculty"
      title="Faculty"
      icon={Users}
      sub={`Meet the ${String(facultyCount).padStart(2, "0")} faculty members of the ${programmeShort} department`}
    >
      <HodFacultyCard faculty={hod} />

      {members.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {members.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      )}

      <Link
        to={`/about/people?tab=faculty&dept=${programmeShort}`}
        className="inline-flex items-center gap-1 text-brand hover:underline mt-5 text-sm font-sans-ui"
      >
        View all faculty <ArrowRight size={14} />
      </Link>
    </Section>
  );
};

export default FacultySection;
