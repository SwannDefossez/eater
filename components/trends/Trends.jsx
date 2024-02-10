import React from "react";
import { getCompanies } from "@/lib/data";

import Swiper from "./Swiper.jsx";
const Trends = async () => {
  var companies = await getCompanies();
  companies = JSON.parse(JSON.stringify(companies));
  return (
    <div>
      <Swiper companies={companies} />
    </div>
  );
};

export default Trends;
