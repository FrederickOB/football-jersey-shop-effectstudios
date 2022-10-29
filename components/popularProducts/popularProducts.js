import React from "react";
import Heading from "../Heading/headings";
import ProductCard from "./productCard";

export default function PopularProducts({ data }) {
  return (
    <section className="w-full ">
      <Heading text="MOST POPULAR T-SHIRTS" withScrollButtons={true} />
      <div
        className="relative flex flex-row w-full h-96  space-x-8 overflow-x-auto  "
        e
      >
        {data && data.data
          ? data.data.map((popularProduct, index) => (
              <ProductCard
                key={popularProduct.id}
                product_name={popularProduct.product_name}
                price={popularProduct.variants[0].price}
                discount_price={popularProduct.variants[0].compare_at_price}
                image={popularProduct.gallery[0].image}
                slug={popularProduct.slug}
              />
            ))
          : null}
      </div>
    </section>
  );
}
