"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

const FeatureSection = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    // image:"/courses/guitar.jpg"
  }
  
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 flex flex-col items-center">
      <div>
        <div className="flex flex-col gap-2 items-center ">
          <h2>Featured Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the Best{" "}
          </p>
        </div>
      </div>
      <div className="my-5 p-2">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col h-full  overflow-hidden  ">
                <div className="flex flex-col p-6 md:p-4 items-center text-center flex-grow   ">
                  <p className="text-lg sm:text-xl text-black mt-4 nb-2 dark:text-neutral-200 ">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400  flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/course/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="w-52 my-10 text-center mt-4 text-zinc-100 hover:text-zinc-500 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
        <Link href={"/courses"}>view all courses</Link>
      </div>
    </div>
  );
};

export default FeatureSection;
