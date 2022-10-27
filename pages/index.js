import Head from "next/head";
import Image from "next/image";
import CountryLeaguesCard from "../components/Cards/countryLeaguesCard";
import DetailsCard from "../components/Cards/detailsCard";
import OtherCollections from "../components/Cards/otherCollections";
import ProductCard from "../components/Cards/productCard";
import Heading from "../components/Heading/headings";
import Hero from "../components/hero/hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-10 space-y-10">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="grid w-full h-40 grid-cols-4 gap-4">
        <DetailsCard
          icon="truck"
          topic="Secure Shipping"
          body="on all orders"
        />
        <DetailsCard icon="phone" topic="Telephone" body="+1 23 456 7890" />
        <DetailsCard
          icon="whatsapp"
          topic="Chat WhatsApp"
          body="Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00"
        />
        <DetailsCard
          icon="check-badge"
          topic="Quality Guarantee"
          body="Verified Purchase Reviews"
        />
      </div>
      <div className="-ml-10">
        <Image
          src="/assets/icons/svg/rewards-badge.svg"
          alt="rewards badge"
          height={56}
          width={160}
        />
      </div>
      <section className="w-full py-20 -mt-10 ">
        <Heading text="MOST POPULAR T-SHIRTS" withScrollButtons={true} />
        <div className="relative flex flex-row w-full space-x-8 overflow-x-auto">
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
          <ProductCard
            discount={67}
            product_name="Manchester United 21-22"
            price="€30.00"
            discount_price="€89.95"
            image="product-large"
          />
        </div>
      </section>
      <section className="w-full py-20 ">
        <Heading text="Country Leagues" />
        <div className="grid grid-cols-5 space-x-4">
          <CountryLeaguesCard
            text="Champions League"
            image="champions-league"
          />
          <CountryLeaguesCard
            text="Champions League"
            image="champions-league"
          />
          <CountryLeaguesCard
            text="Champions League"
            image="champions-league"
          />
          <CountryLeaguesCard
            text="Champions League"
            image="champions-league"
          />
          <CountryLeaguesCard
            text="Champions League"
            image="champions-league"
          />
        </div>
      </section>
      <section className="w-full py-20 ">
        <Heading text="Other Collections" />
        <div className="grid grid-cols-3 gap-8">
          <OtherCollections text="Kids" image="kids" />
          <OtherCollections text="Large sizes" image="large-sizes" />
          <OtherCollections text="Goalkeeper" image="goalkeeper" />
          <OtherCollections text="Authentic / Pro Player" image="pro-player" />
          <OtherCollections text="shorts" image="shorts" />
          <OtherCollections text="socks" image="socks" />
        </div>
      </section>
    </div>
  );
}
