import Head from "next/head";
import Image from "next/image";
import BackgroundImage from "../components/cards/backgroundImageCard";
import CountryLeaguesCard from "../components/cards/countryLeaguesCard";
import DetailsCard from "../components/cards/detailsCard";
import OtherCollections from "../components/cards/otherCollections";
import ProductCard from "../components/cards/productCard";
import Heading from "../components/Heading/headings";
import Hero from "../components/hero/hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lg:space-y-10 lg:p-10">
        <Hero />
        <div className="grid w-full grid-cols-2 gap-4 p-4 lg:h-40 lg:grid-cols-4 lg:p-0">
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
      </div>
      <div className="relative w-40 lg:-ml-10 h-14">
        <Image
          src="/assets/icons/svg/rewards-badge.svg"
          alt="rewards badge"
          layout="fill"
        />
      </div>
      <div className="relative px-4 py-3 pb-20 space-y-20 lg:p-20">
        <section className="w-full ">
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
        <section className="w-full ">
          <Heading text="Country Leagues" />
          <div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-5">
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
        <section className="w-full ">
          <Heading text="Other Collections" />
          <div className="grid grid-cols-2 gap-5 lg:gap-12 lg:grid-cols-3">
            <OtherCollections text="Kids" image="kids" />
            <OtherCollections text="Large sizes" image="large-sizes" />
            <OtherCollections text="Goalkeeper" image="goalkeeper" />
            <OtherCollections
              text="Authentic / Pro Player"
              image="pro-player"
            />
            <OtherCollections text="shorts" image="shorts" />
            <OtherCollections text="socks" image="socks" />
          </div>
        </section>
        <section className="w-full ">
          <BackgroundImage />
        </section>
      </div>
    </div>
  );
}
