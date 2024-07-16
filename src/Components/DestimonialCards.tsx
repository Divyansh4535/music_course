import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const DestimonialCards = () => {
  const content = [
    {
      quote:
        "This music course helped me discover my true potential and hone my skills like never before.",
      name: "Sarah Johnson",
      title: "Student",
    },
    {
      quote:
        "The instructors' expertise and passion made every lesson inspiring and invaluable.",
      name: "Michael Brown",
      title: "Student",
    },
    {
      quote:
        "Joining this music course was the best decision I ever made for my musical career.",
      name: "Emily Davis",
      title: "Professional Musician",
    },
    {
      quote:
        "The comprehensive curriculum provided me with a solid foundation in both theory and practice.",
      name: "David Wilson",
      title: "Student",
    },
    {
      quote:
        "I appreciated the personalized attention and tailored lessons that suited my learning pace and interests.",
      name: "Jessica Miller",
      title: "Student",
    },
    {
      quote:
        "The state-of-the-art facilities and equipment made learning a truly enjoyable experience.",
      name: "Daniel Anderson",
      title: "Student",
    },
    {
      quote:
        "The performance opportunities allowed me to gain confidence and real-world experience.",
      name: "Sophia Martinez",
      title: "Student",
    },
    {
      quote:
        "Being part of a supportive community of musicians has been incredibly motivating and rewarding.",
      name: "James Lee",
      title: "Student",
    },
    {
      quote:
        "The flexible schedules made it easy for me to balance my music education with other commitments.",
      name: "Olivia Taylor",
      title: "Student",
    },
    {
      quote:
        "This course provided me with the tools and opportunities to advance my music career.",
      name: "William Harris",
      title: "Professional Musician",
    },
  ];
  return (
    <div className="h-screen w-full overflow-x-hidden flex-col p-5 items-center flex justify-center dark:bg-black bg-white dark:bg-grid-white/[0.1] relative bg-grid-black/[0.1]  ">
      <h2 className="md:mb-10 text-2xl font-bold ">Hear our Harmony : voices of Success </h2>
      <InfiniteMovingCards direction="right" speed="slow" items={content} />
    </div>
  );
};

export default DestimonialCards;
























