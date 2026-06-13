import React from "react";
import { Linkedin } from "lucide-react";

const isValidProfileUrl = (url) => typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
const PLACEHOLDER_PROFILE_URL = "#";

export const getFacultyProfileLinks = (facultyMember = {}) => {
  const irinsUrl = facultyMember.irinsUrl || facultyMember.irins;
  const vidwanUrl = facultyMember.vidwanUrl || facultyMember.vidwan;
  const irinsIsVidwan = isValidProfileUrl(irinsUrl) && irinsUrl.includes("vidwan.inflibnet.ac.in");

  return {
    linkedin: isValidProfileUrl(facultyMember.linkedinUrl || facultyMember.linkedin)
      ? facultyMember.linkedinUrl || facultyMember.linkedin
      : PLACEHOLDER_PROFILE_URL,
    irins: isValidProfileUrl(irinsUrl) && !irinsIsVidwan ? irinsUrl : PLACEHOLDER_PROFILE_URL,
    vidwan: isValidProfileUrl(vidwanUrl) ? vidwanUrl : irinsIsVidwan ? irinsUrl : PLACEHOLDER_PROFILE_URL,
  };
};

const FacultyProfileLinks = ({ faculty, linkedinUrl, irinsUrl, vidwanUrl, variant = "detail" }) => {
  const profileLinks = faculty
    ? getFacultyProfileLinks(faculty)
    : {
        linkedin: isValidProfileUrl(linkedinUrl) ? linkedinUrl : "",
        irins: isValidProfileUrl(irinsUrl) ? irinsUrl : "",
        vidwan: isValidProfileUrl(vidwanUrl) ? vidwanUrl : "",
      };

  return (
    <div className={`faculty-profile-links faculty-profile-links-${variant}`}>
      <a
        href={profileLinks.linkedin || PLACEHOLDER_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open LinkedIn profile"
        title="LinkedIn"
        className="faculty-profile-link faculty-profile-link-icon"
      >
        <Linkedin aria-hidden="true" />
      </a>
      <a
        href={profileLinks.irins || PLACEHOLDER_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open IRINS profile"
        title="IRINS"
        className="faculty-profile-link"
      >
        IRINS
      </a>
      <a
        href={profileLinks.vidwan || PLACEHOLDER_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open VIDWAN profile"
        title="VIDWAN"
        className="faculty-profile-link"
      >
        VIDWAN
      </a>
    </div>
  );
};

export default FacultyProfileLinks;
