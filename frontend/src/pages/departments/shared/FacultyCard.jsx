import { Link } from "react-router-dom";
import { Mail, Phone, Clock } from "lucide-react";

const FALLBACK_IMAGE = "/dummy_image.jpeg";

const getSpecializations = (faculty) =>
  faculty.specializations || faculty.areas || [];

const FacultyImage = ({ faculty, className }) => (
  <img
    src={faculty.image || FALLBACK_IMAGE}
    alt={faculty.name || "Faculty member"}
    className={className}
    onError={(event) => {
      event.currentTarget.src = FALLBACK_IMAGE;
    }}
  />
);

const FacultyMeta = ({ faculty }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#3a3a3a] mt-3">
    {faculty.email && (
      <span className="flex items-center gap-1">
        <Mail size={12} className="text-brand" /> {faculty.email}
      </span>
    )}
    {faculty.showPhone && faculty.phone && (
      <span className="flex items-center gap-1">
        <Phone size={12} className="text-brand" /> {faculty.phone}
      </span>
    )}
    {faculty.experience && (
      <span className="flex items-center gap-1">
        <Clock size={12} className="text-brand" /> {faculty.experience}
      </span>
    )}
  </div>
);

export const HodFacultyCard = ({ faculty }) => {
  if (!faculty) return null;

  const designation = faculty.designation || faculty.role;
  const qualification = faculty.qualification || faculty.qualifications;
  const description = faculty.description || faculty.bio;

  return (
    <article className="flex flex-col sm:flex-row gap-5 bg-white border-l-4 border-brand p-5 mb-5 card-hover">
      <Link to={`/faculty/${faculty.id}`} className="flex-shrink-0">
        <FacultyImage
          faculty={faculty}
          className="w-28 h-28 sm:w-32 sm:h-32 object-cover"
        />
      </Link>
      <div className="flex-1">
        <span className="text-xs uppercase tracking-widest text-brand font-sans-ui font-semibold">
          Head of Department
        </span>
        <Link to={`/faculty/${faculty.id}`} className="hover:underline">
          <h4
            className="text-2xl text-brand font-semibold mt-0.5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {faculty.name}
          </h4>
        </Link>
        {(designation || qualification) && (
          <p className="text-sm italic text-[#3a3a3a]">
            {[designation, qualification].filter(Boolean).join(" · ")}
          </p>
        )}
        {description && (
          <p className="text-sm text-[#2a2a2a]/85 mt-2 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
        <FacultyMeta faculty={faculty} />
      </div>
    </article>
  );
};

const FacultyCard = ({ faculty }) => {
  const specializations = getSpecializations(faculty).slice(0, 2);
  const designation = faculty.designation || faculty.role;
  const qualification = faculty.qualification || faculty.qualifications;

  return (
    <article className="bg-white border border-brand/15 p-4 flex items-start gap-4 card-hover">
      <Link to={`/faculty/${faculty.id}`} className="flex-shrink-0">
        <FacultyImage faculty={faculty} className="w-20 h-20 object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/faculty/${faculty.id}`} className="hover:underline">
          <h4 className="text-brand font-semibold leading-tight">{faculty.name}</h4>
        </Link>
        {designation && (
          <p className="text-xs italic text-[#3a3a3a] mt-0.5">{designation}</p>
        )}
        {qualification && (
          <p className="text-xs text-[#3a3a3a]/85 mt-1.5 line-clamp-2">
            {qualification}
          </p>
        )}
        {specializations.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {specializations.map((specialization) => (
              <span
                key={specialization}
                className="text-[10.5px] bg-brand/10 text-brand px-2 py-0.5 rounded-full"
              >
                {specialization}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default FacultyCard;
