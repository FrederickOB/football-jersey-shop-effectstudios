import React from "react";
import CountryLeaguesCard from "./countryLeaguesCard";
import Heading from "../Heading/headings";

export default function CountryLeagueCollection({ data }) {
  console.log(data);
  return (
    <section className="w-full ">
      <Heading text="Country Leagues" />
      {data
        ? data.map((countryLeagues) => {
            return (
              <div
                key={countryLeagues.id}
                className="grid h-full grid-cols-2 gap-4 lg:grid-cols-5"
              >
                {countryLeagues.sub_categories.map((sub) => (
                  <CountryLeaguesCard
                    key={sub.id}
                    text={sub.title}
                    image={sub.image}
                  />
                ))}
              </div>
            );
          })
        : null}
    </section>
  );
}
