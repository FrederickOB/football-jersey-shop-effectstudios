import React from "react";
import Heading from "../Heading/headings";
import OtherCollectionsCard from "./otherCollectionsCards";

export default function OtherCollections({ data }) {
  return (
    <section className="w-full ">
      <Heading text="Other Collections" />
      {
        <div className="grid grid-cols-2 gap-5 lg:gap-12 lg:grid-cols-3">
          {data[0].sub_categories.map((sub, index) => (
            <OtherCollectionsCard
              key={index}
              text={sub.title}
              image={sub.image}
              slug={sub.slug}
            />
          ))}
        </div>
      }
    </section>
  );
}
