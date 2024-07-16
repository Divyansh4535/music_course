"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./Card-hover-effect";

const UpComingWeb = () => {
  const content = [
    {
      title: "Blues Guitar Techniques",
      description:
        "Discover the techniques of blues guitar to add soul and depth to your playing.",
      isFeatured: true,
    },
    {
      title: "Classical Music History",
      description:
        "Explore the rich history of classical music from its origins to the present day.",
      isFeatured: false,
    },
    {
      title: "Electronic Music Production",
      description:
        "Create compelling electronic music with our course designed for beginners to advanced users.",
      isFeatured: true,
    },
    {
      title: "Songwriting Essentials",
      description:
        "Learn the essentials of songwriting to express your musical creativity.",
      isFeatured: false,
    },
    {
      title: "Music Production Fundamentals",
      description:
        "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
      isFeatured: true,
    },
  ];
  return (
    <div className="py-12 bg-gray-900 flex flex-col items-center">
      <div className="flex flex-col gap-2 items-center ">
        <h2 className="uppercase  text-bold text-teal-600 ">
          {" "}
          Featured Webinars
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance your musical Journey{" "}
        </p>
      </div>

      <div className="my-5 p-2">
        <HoverEffect
          items={content.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </div>
      <div className="w-52 my-10 text-center mt-4 text-zinc-100 hover:text-zinc-500 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
        <Link href={"/courses"}>view all Webinares </Link>
      </div>
    </div>
  );
};

export default UpComingWeb;
