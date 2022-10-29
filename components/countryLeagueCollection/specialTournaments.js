import React from "react";
import CountryLeaguesCard from "./countryLeaguesCard";
import Heading from "../Heading/headings";

export default function CountryLeagueCollection({ data }) {
  return (
    <section className="w-full ">
      <Heading text="Country Leagues" />

      <div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-5">
        {data[0].sub_categories.map((sub, index) => (
          <CountryLeaguesCard
            key={index}
            text={sub.title}
            image={sub.image}
            slug={sub.slug}
          />
        ))}
      </div>
    </section>
  );
}
