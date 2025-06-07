"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../public/me.png";
import phone from '../public/phone.png';
import github from '../public/github.svg';
import facebook from '../public/facebook.png';
import gmail from '../public/gmail.webp';
import { useState } from "react";

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const [highlightIcons, setHighlightIcons] = useState(false);

  const links = ['https://github.com/yehtetaung4466', 'https://www.facebook.com/ye.htet.aung.546389', 'yehtet804p@gmail.com', '+959427900982'];
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 font-sans selection:bg-indigo-200">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.header
          className="flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div
            className="flex-shrink-0"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={profile}
              alt="Ye Htet Aung's profile image"
              width={180}
              height={180}
              className=" rounded-3xl border-4 mb-5"
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left space-y-4"
            variants={container}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Ye Htet Aung
            </motion.h1>
            <motion.p
              className="text-lg text-indigo-600 font-medium"
              variants={fadeInUp}
            >
              Full-Stack Developer
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2"
              variants={container}
            >
              <motion.a
  href="#contact"
  onClick={() => {
    setHighlightIcons(true);
    setTimeout(() => setHighlightIcons(false), 1000); // 1 second highlight
  }}
  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1"
  variants={fadeInUp}
>
  Contact Me
</motion.a>

              <motion.a
                href="mailto:yehtet804p@gmail.com"
                className="border border-indigo-500 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl transition duration-300 transform hover:-translate-y-1"
                variants={fadeInUp}
              >
                Say Hello
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-3xl font-bold text-indigo-600 mb-6"
            variants={fadeInUp}
          >
            Languages & Frameworks
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TypeScript",
              "Python",
              "Dart",
              "Flutter",
              "Angular",
              "React",
              "Nest.js",
            ].map((skill) => (
              <motion.span
                key={skill}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm md:text-base px-4 py-2 rounded-full shadow-md transition transform duration-300 hover:-translate-y-1"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mt-32 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-3xl font-bold text-indigo-600 mb-4"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            I am currently open to freelance or full-time opportunities. Feel free
            to reach out if you have any questions or want to collaborate!
          </motion.p>
          <motion.div className="mt-6 flex justify-center items-center gap-6 flex-wrap" variants={fadeInUp}>
  {links.map((link, index) => {
    const isEmail = link.includes("@");
    const isPhone = link.startsWith("+");

    let href = link;
    let icon = null;
    let alt = "";
    let onClick = undefined;

    if (link.includes("github")) {
      icon = github;
      alt = "GitHub";
    } else if (link.includes("facebook")) {
      icon = facebook;
      alt = "Facebook";
    } else if (isEmail) {
      href = `mailto:${link}`;
      icon = gmail;
      alt = "Gmail";
    } else if (isPhone) {
      icon = phone;
      alt = "Phone";
      onClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
          await navigator.clipboard.writeText(link);
          alert(`Phone number ${link} copied to clipboard`);
        } catch {
          alert("Failed to copy phone number.");
        }
      };
    }

    return (
      <motion.a
        key={index}
        href={isPhone ? "#" : href}
        onClick={onClick}
        target={isPhone ? undefined : "_blank"}
        rel={isPhone ? undefined : "noopener noreferrer"}
        className="w-14 h-14 p-2 rounded-full shadow-lg transition transform duration-300 hover:scale-110"
        animate={highlightIcons ? { scale: [1, 1.2, 1], boxShadow: "0 0 10px #6366f1" } : {}}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={icon}
          alt={`${alt} Icon`}
          className="object-contain"
          width={40}
          height={40}
        />
      </motion.a>
    );
  })}
</motion.div>



        </motion.section>
      </div>
    </main>
  );
}
