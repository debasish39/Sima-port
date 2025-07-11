import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false });
  }, []);

  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-16 text-stone-300"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h2>

        <p
          className="text-lg leading-relaxed text-justify mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I am <strong>Simanchala Padhi</strong>, a dedicated Odia serial actor
          from <strong>Ganjam, Berhampur</strong> with years of experience in
          the entertainment industry. Trained in classical acting, I bring
          authenticity, depth, and expression to every role.
        </p>

        <p
          className="text-lg leading-relaxed text-justify mb-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Over the years, I've had the honor of portraying a variety of
          characters across renowned Odia serials:
        </p>

        <ul
          className="mt-4 text-justify list-none pl-0 space-y-3 text-base"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            ["କେଦାର ଗୌରୀ (2024–2025)", "Role of Raju"],
            ["ସାଥିରେ (2023–2024)", "Lead Role as Laxmi Kanta Babu"],
            ["କେମିତି କହିବି କହ (2020–2021)", "Comedy Role in Fakir Mohan (FM)"],
            ["ରହିଛି ରହିବି ତୋରି ପାଇଁ (2018–2019)", "Lead Role as Gittu"],
            ["All Rounder (Tarang Channel)", "Guest Appearances"],
            ["ତାରିଣୀ ଆଖିର ତାରା", "Guest Role"],
          ].map(([title, role], i) => (
            <li
              key={i}
              className="flex items-start gap-2 hover:text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
              data-aos="fade-right"
              data-aos-delay={500 + i * 100}
              tabIndex={0}
            >
              <FaCheckCircle className="mt-[5px] text-stone-400 group-hover:text-white" />
              <span className="text-base">
                <strong>{title}</strong> — <em>{role}</em>
              </span>
            </li>
          ))}
        </ul>

        <p
          className="mt-8 text-lg leading-relaxed text-justify"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          These roles have allowed me to connect deeply with audiences and
          showcase the rich storytelling of Odia culture. With every appearance,
          I strive to entertain, inspire, and bring meaningful characters to
          life.
        </p>

        <p
          className="mt-4 text-lg leading-relaxed text-justify"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          My journey is a continuous pursuit of excellence, fueled by the love
          of performance and storytelling.
        </p>

        <div
          className="mt-8 space-y-2 text-sm sm:text-base text-stone-400 text-left sm:text-justify"
          data-aos="fade-up"
          data-aos-delay="1300"
        >
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-stone-500" />
            <span>
              <strong>Hometown:</strong> Berhampur,Ganjam,Odisha
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-stone-500" />
            <span>
              <strong>Acting Career Since:</strong> 2014
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
