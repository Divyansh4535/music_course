import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const musicSchoolContent = [
    {
      title: "Unmatched Expertise",
      description:
        "Our instructors are seasoned professionals who bring their extensive experience and passion for music to every lesson. They are dedicated to helping you achieve your musical goals with personalized guidance and mentorship.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our courses are meticulously designed to cover every aspect of music, from foundational theory to advanced performance techniques. You'll gain a thorough understanding and practical skills that will prepare you for any musical challenge.",
    },
    {
      title: "Personalized Learning",
      description:
        "We understand that every student is unique, which is why we tailor our lessons to match your specific needs and interests. Whether you're a beginner or an advanced musician, you'll receive instruction that helps you grow at your own pace.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Learn in an environment that supports your creativity and learning. Our modern studios and classrooms are equipped with the latest technology and instruments, providing the perfect setting for your musical education.",
    },
    {
      title: "Performance Opportunities",
      description:
        "We believe in learning by doing. That's why we offer numerous opportunities for you to perform in front of live audiences, helping you build confidence and stage presence while gaining valuable experience.",
    },
    {
      title: "Supportive Community",
      description:
        "Become part of a community that shares your passion for music. You'll connect with fellow students, instructors, and industry professionals who will inspire and support you throughout your musical journey.",
    },
    {
      title: "Flexible Schedules",
      description:
        "We know life can be busy, so we offer flexible scheduling options to fit your lifestyle. Whether you're balancing work, school, or other commitments, you can find a schedule that works for you.",
    },
    {
      title: "Career Advancement",
      description:
        "Our strong ties with the music industry open doors for you to take your career to the next level. We provide resources and opportunities for internships, auditions, and job placements to help you succeed.",
    },
    {
      title: "Affordable Tuition",
      description:
        "High-quality music education shouldn't break the bank. We offer competitive pricing and financial aid options to make our courses accessible to everyone, regardless of their financial situation.",
    },
    {
      title: "Innovative Teaching Methods",
      description:
        "Stay ahead of the curve with our cutting-edge teaching methods. We incorporate the latest technologies and educational strategies to ensure you're learning in the most effective and engaging way possible.",
    },
    {
      title: "Proven Track Record",
      description:
        "Join a legacy of success. Our alumni have gone on to achieve great things in the music industry, and you can be next. Let us help you turn your musical dreams into reality.",
    },
  ];

  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
