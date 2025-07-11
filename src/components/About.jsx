import React from 'react';

export default function About() {
  return (
    <section id="about" className="px-6 py-16 text-stone-300">
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">About Me</h2>

        <p className="text-lg leading-relaxed text-justify">
          I am <strong>Simanchala Padhi</strong>, a dedicated Odia serial actor from <strong>Ganjam, Berhampur</strong> with years of experience in the entertainment industry. Trained in classical acting, I bring authenticity, depth, and expression to every role.
          <br /><br />
          Over the years, I've had the honor of portraying a variety of characters across renowned Odia serials:
        </p>

        <ul className="mt-4 text-justify list-disc pl-6 space-y-2 text-base">
          <li><strong>ରହିଛି ରହିବି ତୋରି ପାଇଁ</strong> (2018–2019) — Lead Role as <em>Gittu</em></li>
          <li><strong>କେମିତି କହିବି କହ</strong> (2020–2021) — Comedy Role in <em>Fakir Mohan (FM)</em></li>
          <li><strong>ସାଥିରେ</strong> (2023–2024) — Lead Role as <em>Laxmi Kanta Babu</em></li>
          <li><strong>କେଦାର ଗୌରୀ</strong> (2024–2025) — Role of <em>Raju</em></li>
          <li><strong>All Rounder</strong> (Guest Appearances, Tarang Channel)</li>
          <li><strong>ତାରିଣୀ ଆଖିର ତାରା</strong> — Guest Role</li>
          <li>Collaborated with notable directors like <strong>Rohit Bageria</strong></li>
        </ul>

        <p className="mt-6 text-lg leading-relaxed text-justify">
          These roles have allowed me to connect deeply with audiences and showcase the rich storytelling of Odia culture. With every appearance, I strive to entertain, inspire, and bring meaningful characters to life.
          <br /><br />
          My journey is a continuous pursuit of excellence, fueled by the love of performance and storytelling.
        </p>

        <div className="mt-8 text-sm text-stone-400 text-justify">
          📍 <strong>Hometown:</strong> Ganjam, Berhampur, Odisha <br />
          📅 <strong>Acting Career Since:</strong> 2018 <br />
          🌐 <strong>Portfolio:</strong> www.simanchalapadhi.com (example)
        </div>
      </div>
    </section>
  );
}
