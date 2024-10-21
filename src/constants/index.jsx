import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  " React, Node, Express, MongoDb, Tailwind, PostgreSQL, Javascript, Redux, ";

export const PROJECTS = [
  {
    id: 1,
    title: "Macbook Clone",
    description:
      "A Macbook clone website with attention to detail",
    imgSrc: project1,
    link: "https://alwynwilson.github.io/Macbook-clone.io/",
  },
  {
    id: 2,
    title: "A Developer Blog",
    description:
      "A web-app to show case developer's projects using MERN stack",
    imgSrc: project2,
    link: "https://project-fair-io.vercel.app/",
  },
  {
    id: 3,
    title: "DineSpot",
    description:
      "A Restuarant finding web-app limited to a small location with search functionality",
    imgSrc: project3,
    link: "https://dine-spot-io.vercel.app/",
  },
  {
    id: 4,
    title: "Vortex",
    description:
      "A dummy website for design agency",
    imgSrc: project4,
    link: "https://vortex-io-five.vercel.app/",
  },
  {
    id: 5,
    title: "D-Quiz",
    description: "A Quiz app for Developer's to brush up their technical knowledge",
    imgSrc: project5,
    link: "https://quiz-app-io.vercel.app/",
  },
  {
    id: 6,
    title: "Library Management tool",
    description:
      "An online library inventory management app",
    imgSrc: project6,
    link: "https://library-management-app-gray.vercel.app/",
  },
  {
    id: 7,
    title: "Media Player",
    description: "A custom media Player with watchlist for youtube contents.",
    imgSrc: project7,
    link: "https://example.com/fitness-tracker",
  },
  {
    id: 8,
    title: "Wanderlust",
    description: "An Landing page for travel blog",
    imgSrc: project9,
    link: "https://github.com/alwynwilson/parallax-scroll-website.io",
  }
];

export const ABOUT =
  "As a passionate Full Stack Developer, I thrive on crafting dynamic and responsive web applications that deliver exceptional user experiences. With a solid foundation in both front-end and back-end technologies, I excel at building robust and scalable solutions that meet diverse needs. My expertise includes cutting-edge JavaScript frameworks like React, Node.js and Express.js, along with proficiency in database like MongoDB. I’m committed to continuous learning and staying ahead of industry trends, enabling me to integrate the latest practices and tools into every project I tackle. Let’s create something amazing together!";

export const INTRO = "Full Stack Developer with expertise in building scalable web applications using modern technologies like React, Node.js, Express, and MongoDB. Driven by innovation, I craft intuitive user interfaces and robust backend solutions. Let's create something exceptional!";

export const EXPERIENCES = [
  {
    company: "Spidero Technology",
    role: "Trainee - React Developer",
    year: "08/2024 - 09/2024",
    description:
      "Developing and maintaining scalable web applications using cutting-edge technologies. Collaborating with teams to design and implement innovative solutions. Optimizing application performance, tracking and improving user traffic by eye-catching designs.",
  },
  {
    company: "Luminar Technolabs",
    role: "Fullstack Developer Intern",
    year: "01/2024 - 07/2024",
    description:
      "Developed user interfaces for web applications utilizing React, Node.js, Express.js, and MongoDB. Focused on delivering seamless user experiences. Optimized components for responsive designs across a wide range of web-enabled devices and browsers.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/_a_l_l_w_i_n_s",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/alwynwilson",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/alwyn-wilson",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I'm always eager to take on new and exciting challenges. Whether you have a project in mind or want to explore ideas together, I’d love to connect! Let’s combine our skills to build something remarkable. Reach out, and let's collaborate to bring your vision to life!",
  email: "alwynwilson187@gmail.com",
  phone: "+(91 - 9544936427)",
};
