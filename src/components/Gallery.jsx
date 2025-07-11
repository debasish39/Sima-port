import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function Gallery() {
  const images = [...Array(8)].map((_, i) => `/gallery/gallery${i + 1}.jpg`);
  const slides = images.map((img) => ({ src: img }));

  const [index, setIndex] = useState(-1); // -1 means lightbox is closed

  return (
    <section id="gallery" className="px-6 py-16 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="rounded-xl object-cover w-full h-48 hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
            onClick={() => setIndex(i)}
          />
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
