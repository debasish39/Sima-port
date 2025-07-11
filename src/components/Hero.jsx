import React from 'react';
import Pro from '../assets/pro.png';

export default function Hero() {
  return (
    <div className="pb-8  lg:mb-36 px-4 sm:px-6 lg:px-16 mt-30 pt-3">
      <div className="flex flex-col-reverse lg:flex-row items-center">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
            Simanchala Padhi
          </h2>
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text font-bold text-3xl text-transparent uppercase">
            Actor
          </span>

          <p className="my-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl leading-relaxed text-stone-300 text-justify">
            Simanchala Padhi is a passionate actor known for his dynamic screen presence and deep
            emotional performances. From theatre stages to cinematic screens, he brings every
            character to life with authenticity and charisma. His journey is driven by storytelling,
            expression, and the power of performance.
          </p>

          {/* Contact Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="mailto:tusalaa291@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-stone-600 to-stone-800 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              📧 Email Me
            </a>
            <a
              href="tel:+91 88958 53497"
              className="px-6 py-3 bg-gradient-to-r from-stone-700 to-stone-900 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              📞 Call Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Pro}
            alt="Profile"
            className="w-full max-w-[450px] sm:max-w-[600px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] border border-gray-900 rounded-2xl bg-black shadow-xl lg:max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
