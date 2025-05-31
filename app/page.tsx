"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../public/me.png";

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
            I'm currently open to freelance or full-time opportunities. Feel free
            to reach out if you have any questions or want to collaborate!
          </motion.p>
          <motion.div className="mt-6" variants={fadeInUp}>
            <motion.a
              href="mailto:yehtet804p@gmail.com"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg transition transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Send an Email
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
