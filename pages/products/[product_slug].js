import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import parse from "html-react-parser";
import NumberInput from "../../components/input/number-input";
import TextInput from "../../components/input/text-input";
import { getPopularProducts, getSingleProduct } from "../api/apis";
import SelectInput from "../../components/input/select-input";
import Link from "next/link";
import { motion, useIsPresent } from "framer-motion";

export default function ProductBySlug({ product }) {
  const [galleryImagePosition, setGalleryImagePosition] = useState(0);
  const [inputs, setInputs] = useState({});
  const [readMore, setReadMore] = useState(false);
  const isPresent = useIsPresent();

  useEffect(() => {
    setGalleryImagePosition(0);
    setInputs({});
    setReadMore(false);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const increasePosition = () => {
    if (galleryImagePosition < product.gallery.length - 1) {
      setGalleryImagePosition((state) => state + 1);
    } else {
      setGalleryImagePosition(0);
    }
  };
  const decreasePosition = () => {
    if (galleryImagePosition > 0) {
      setGalleryImagePosition((state) => state - 1);
    } else {
      setGalleryImagePosition(product.gallery.length - 1);
    }
  };
  const getSizes = () => {
    const data = product.attributes.flatMap((attribute) =>
      attribute.product_attribute_values.map((values) => values)
    );
    return data;
  };
  const getDiscountPercentage = () => {
    const discountPercentage =
      (product.variants[0].price / product.variants[0].compare_at_price) * 100;
    return Math.round(discountPercentage * 10) / 10;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(JSON.stringify(inputs));
  };

  return (
    <div className="">
      <Head>
        <title>Product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 lg:px-40">
        <div className="w-full flex flex-row space-x-2 text-[10px] lg:text-xs mt-6">
          <Link href="/">
            <p className="text-blue-400 cursor-pointer hover:underline hover:text-blue-700">
              home
            </p>
          </Link>{" "}
          <span>{" > "}</span>{" "}
          {product.categories.length > 0 && (
            <>
              <Link href={`/${product.categories[0]?.slug}`}>
                <p className="text-blue-400 cursor-pointer hover:underline hover:text-blue-700 truncate">
                  {product.categories[0].title}
                </p>
              </Link>
              <span>{" > "}</span>
            </>
          )}
          <p className="truncate ">{product.product_name}</p>
        </div>
        <div className="grid grid-cols-1 pt-10 pb-6 lg:grid-cols-2 gap-10 lg:gap-20 ">
          <div className="">
            <div className=" w-[20.5rem] lg:w-[35rem] h-[20.5rem] lg:h-[35rem] overflow-hidden">
              <div
                className={`w-full h-full transition-transform duration-75 whitespace-nowrap`}
                style={{
                  transform: `translateX(-${galleryImagePosition * 100}%)`,
                }}
              >
                {product.gallery.map((image) => {
                  return (
                    <div
                      key={image.id}
                      className="relative h-full lg:h-[35rem] aspect-square inline-flex items-center justify-center"
                    >
                      <Image
                        layout="fill"
                        src={image.image}
                        alt={`product-large`}
                        quality={100}
                      />
                      <div className="absolute bottom-0 right-0 flex items-end h-full p-4 space-x-1">
                        <button
                          onClick={() => decreasePosition()}
                          className="flex items-center justify-center w-8 h-8 border border-white"
                        >
                          <div className="relative w-3 h-2 ">
                            <Image
                              src="/assets/icons/svg/left.svg"
                              alt="left icon"
                              layout="fill"
                            />
                          </div>
                        </button>
                        <button
                          onClick={() => increasePosition()}
                          className="flex items-center justify-center w-8 h-8 border border-white"
                        >
                          <div className="relative w-3 h-2 ">
                            <Image
                              src="/assets/icons/svg/right.svg"
                              alt="right icon"
                              layout="fill"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-6 gap-4 w-full lg:w-[35rem] mt-2">
              {product.gallery.map((image, index) => (
                <div
                  key={image.id}
                  className="flex flex-col justify-center h-full w-full space-y-2"
                >
                  {galleryImagePosition === index ? (
                    <Image
                      src="/assets/icons/svg/down.svg"
                      alt="down"
                      height={5}
                      width={8}
                    />
                  ) : (
                    <Image
                      src="/assets/icons/svg/down.svg"
                      alt="down"
                      className="invert"
                      height={5}
                      width={8}
                    />
                  )}
                  <div
                    onClick={() => setGalleryImagePosition(index)}
                    className="relative h-full w-full  aspect-square"
                  >
                    <Image
                      layout="fill"
                      src={image.image}
                      alt={`product-small`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="flex items-center h-10 mb-4 text-xl lg:text-2xl font-bold">
              {product.product_name}
            </p>
            <div className="flex justify-between mb-10">
              <div className="flex items-center justify-center space-x-4">
                <p className=" text-4xl lg:text-5xl font-bold leading-[48px] ">
                  €{product.variants[0].price}
                </p>
                {product.variants[0].compare_at_price > 0 ? (
                  <>
                    <s className="text-sm lg:text-lg font-normal text-red-500">
                      €{product.variants[0].compare_at_price}
                    </s>
                    <div className="flex px-2 py-1 text-sm lg:text-lg font-semibold text-white bg-green-500">
                      {`Save ${getDiscountPercentage()} %`}
                    </div>
                  </>
                ) : null}
              </div>
              <div className="flex items-center justify-center px-4 py-3 space-x-2 border">
                <div className="relative w-3 h-3">
                  <Image
                    layout="fill"
                    src={`/assets/icons/svg/heart-outline.svg`}
                    alt={`heart`}
                    className
                  />
                </div>
                <p className="hidden lg:block">Add to Favorites</p>
              </div>
            </div>
            <div className="text-xs lg:text-sm leading-6 mb-10">
              <div className={`${readMore ? "" : "h-20 truncate"}`}>
                {product.description ? parse(`${product.description}`) : null}
              </div>
              <button
                className="font-semibold underline capitalize"
                onClick={() => setReadMore((state) => !state)}
              >
                {readMore ? "read less" : "read more"}
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-10 space-y-6">
                <SelectInput
                  onChange={handleChange}
                  label="Size"
                  name="size"
                  data={getSizes()}
                  option_label="name"
                  value={inputs.size}
                  option_value="product_attribute_id"
                  placeholder="Select a shirt size"
                  hasButton={true}
                  buttonText="View Size Chart"
                />

                <TextInput
                  label="Name"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  placeholder="What name would you want in the shirt?"
                />
                <TextInput
                  onChange={handleChange}
                  label="Number on Shirt"
                  name="shirt_number"
                  value={inputs.shirt_number || ""}
                  placeholder="Enter a number between 0 and 99"
                />

                <SelectInput
                  onChange={handleChange}
                  data={product.patches}
                  label="Patch"
                  name="patch"
                  option_label="title"
                  option_value="id"
                  value={inputs.patch}
                  placeholder="Select a patch"
                />

                <NumberInput
                  onChange={handleChange}
                  value={inputs.quantity || ""}
                  label="Quantity"
                  name="quantity"
                />
              </div>
              <button type="submit" className="flex w-full h-14">
                <div className="flex items-center justify-start w-full h-full px-6 py-4 font-semibold bg-yellow-300">
                  Add to Cart
                </div>
                <div className="relative flex items-center justify-center h-full bg-black w-14">
                  <Image
                    className="invert"
                    src="/assets/icons/svg/shopping-cart.svg"
                    alt="shopping cart"
                    height={20}
                    width={20}
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative w-40 mb-20 h-14">
        <Image
          src="/assets/icons/svg/rewards-badge.svg"
          alt="rewards badge"
          layout="fill"
        />
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.9, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.9, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-yellow-300 z-[100]"
      />
    </div>
  );
}

export async function getStaticPaths() {
  const popularProducts = await getPopularProducts().then(
    (res) => res.products
  );

  const paths = popularProducts.data.map((product) => {
    return {
      params: {
        product_slug: product.slug,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const product_slug = context.params.product_slug;
  const product = await getSingleProduct(product_slug).then(
    (res) => res.product
  );
  return {
    props: {
      product,
    },
  };
}
