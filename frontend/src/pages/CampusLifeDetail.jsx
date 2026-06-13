import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Hostels from "./campus-life/Hostels";
import Transportation from "./campus-life/Transportation";
import SportsGym from "./campus-life/SportsGym";
import Atm from "./campus-life/Atm";
import SolarRooftop from "./campus-life/SolarRooftop";

const CampusLifeDetail = () => {
  const { slug, section } = useParams();

  if (slug === "hostels") {
    return <Hostels />;
  }

  if (slug === "transportation") {
    return <Transportation />;
  }

  if (slug === "sports-gym" && !section) {
    return <Navigate to="/campus-life/sports-gym/overview" replace />;
  }

  if (slug === "sports-gym" && !["overview", "sports-faculty", "sports-achievement"].includes(section)) {
    return <Navigate to="/campus-life/sports-gym/overview" replace />;
  }

  if (slug === "sports-gym") {
    return <SportsGym section={section} />;
  }

  if (slug === "atm") {
    return <Atm />;
  }

  if (slug === "solar-rooftop") {
    return <SolarRooftop />;
  }

  return <Navigate to="/campus-life/hostels" replace />;
};

export default CampusLifeDetail;
