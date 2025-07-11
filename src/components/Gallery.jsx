import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 300, once: false });
  }, []);

  const images = [...Array(8)].map((_, i) => `/gallery/gallery${i + 1}.jpg`);
  const slides = images.map((img) => ({ src: img }));

  const [index, setIndex] = useState(-1); // -1 means lightbox is closed

  return (
    <section id="gallery" className="px-6 py-16 text-white">
      <h2
        className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        data-aos="fade-up"
      >
        Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="w-full h-48"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
               className="rounded-xl object-cover w-full h-full 
             transition-all duration-300 
             hover:scale-105 active:scale-100 focus:scale-105 
             hover:shadow-[3px_3px_18px_white] 
             active:shadow-[3px_3px_20px_white] 
             focus:shadow-[3px_3px_20px_white] 
             focus:outline-none focus:ring-2 focus:ring-stone-400 
             cursor-pointer"
              onClick={() => setIndex(i)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox viewer */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
}
