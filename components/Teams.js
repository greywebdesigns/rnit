import Image from "next/image";
import React from "react";
import TitleRow from "./TitleRow";
import Slider from "react-slick";
import Link from "next/link";

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(
  require.context("/public/employees-gallery", false, /\.(png|jpe?g|svg)$/)
);

const images = Object.entries(cache).map((module) => module[1].default);

const Teams = () => {
  const employees = [
    {
      id: 1,
      picture: "/images/hero-image.png",
      name: "Jerome Escultura",
    },
    {
      id: 2,
      picture: "/images/hero-image.png",
      name: "Jerome Escultura",
    },
    {
      id: 3,
      picture: "/images/hero-image.png",
      name: "Jerome Escultura",
    },
    {
      id: 4,
      picture: "/images/hero-image.png",
      name: "Jerome Escultura",
    },
    {
      id: 5,
      picture: "/images/hero-image.png",
      name: "Jerome Escultura",
    },
    {
      id: 6,
      picture: "/images/hero-image.png",
      name: "Jerome Escultura",
    },
  ];

  var settings = {
    centerMode: false,
    infinite: false,
    slidesToShow: 5,
    speed: 500,
    initialSlide: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          centerMode: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 667,
        settings: {
          centerPadding: "30px",
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 565,
        settings: {
          centerPadding: "30px",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };
  // console.log(images, "images");
  return (
    <>
      <div className="px-4 pb-32 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32 ">
        <TitleRow title="Meet our team" />
        <div className="mt-24">
          <Slider {...settings}>
            {Object.entries(images).map((image, i) => (
              <Employee
                picture={image[1]}
                blurData={image[1].blurDataURL}
                key={i}
              />
            ))}
          </Slider>
        </div>
        {/* {employees.map((item, i) => (
            <Employee picture={item.picture} name={item.name} key={i} />
          ))} */}
      </div>
    </>
  );
};

export default Teams;

function Employee({ picture, name, blurData }) {
  return (
    <div className="mx-2 lg:mx-6">
      <div className="relative mb-4 rounded  w-full">
        <Image
          src={picture}
          alt={name}
          width={400}
          height={400}
          className="absolute object-cover w-full h-full rounded"
          blurDataURL={blurData}
          placeholder="blur"
        />
        {/* <img
          className="absolute object-cover w-full h-full rounded"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person"
        /> */}
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">{name}</p>
        {/* <div className="flex items-center space-x-3 sm:justify-center">
          <Link
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
