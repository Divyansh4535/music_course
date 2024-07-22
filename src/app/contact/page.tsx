"use client";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  console.log(message, email);

  return (
    <div className="h-screen relative w-full bg-neutral-900 p-5 flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center md:w-[60%] mt-24 relative">
        <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        <p className="text-xs md:text-sm font-light text-gray-400 text-center w-[90%]">
          We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
        </p>
        <div className="flex flex-col gap-5 w-full items-center relative">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            className="p-2 bg-black w-[80%] rounded-md h-10"
            placeholder="Your Email Address"
          />
          <textarea
            name="message"
            id="message"
            rows={5}
            className="bg-black w-[80%] rounded-md p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
          ></textarea>
          <div className="w-[80%] flex items-start">
            <button className="w-52 my-10 text-center mt-4 text-zinc-100 hover:text-zinc-200 font-bold backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700 bg-teal-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Page;
