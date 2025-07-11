import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Rahichi from './rahichi.png';
import Sathire from './Sathire.png';
import KedarGouri from './KedarGouri.png';
import FM from './FM.png';
import Tarini from './Tarini akhi ra tara.png';
import All from './All.png';

export default function Serials() {
  useEffect(() => {
    AOS.init({ duration: 300, once:false});
  }, []);

  const serials = [
    {
      title: 'କେଦାର ଗୌରୀ',
      role: 'Supporting Role (Raju)',
      year: '2024–2025',
      video: 'https://youtu.be/m1HpcJHvB10?si=pqWI1GRdsq5AKkY2',
      thumbnail: KedarGouri,
    },
    {
      title: 'ସାଥିରେ',
      role: 'Lead Role (Laxmi Kanta Babu)',
      year: '2023–2024',
      video: 'https://youtu.be/bxGz_Uy1J0A?si=Y-j8NtKtGIwvX7L1',
      thumbnail: Sathire,
    },
    {
      title: 'ଫକିର ମୋହନ (FM)',
      role: 'Main Comedian',
      year: '2020–2021',
      video: 'https://youtube.com/@disgusting-pd4yp?si=nAhtA4dilBnUeTRs',
      thumbnail: FM,
    },
    {
      title: 'ତାରିଣୀ ଆଖିର ତାରା',
      role: 'Guest Appearance',
      year: '2020',
      video: 'https://youtu.be/gucgJrAta-E?si=AQk9IyjK82D_mvY6',
      thumbnail: Tarini,
    },
    {
      title: 'ରହିଚି ରହିବି ତୋରି ପାଇଁ',
      role: 'Lead Role (Gittu)',
      year: '2018–2019',
      video: 'https://youtu.be/AS1nEavRHz8?si=CppTyUE0WABPdAjg',
      thumbnail: Rahichi,
    },
    {
      title: 'All Rounder',
      role: 'Guest Roles – Tarang Channel',
      year: 'Various',
      video: 'https://youtube.com/@disgusting-pd4yp?si=UXoK8HbzcqxWjQCN',
      thumbnail: All,
    },
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
        >
          My Serials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serials.map((serial, idx) => (
           <a
  key={idx}
  href={serial.video}
  target="_blank"
  rel="noopener noreferrer"
  data-aos="zoom-in-up"
  data-aos-delay={idx * 100}
  className="bg-stone-800 rounded-xl overflow-hidden shadow-xl 
             hover:shadow-2xl active:shadow-2xl 
             transition-all duration-300 
             hover:scale-[1.03] active:scale-[1.03] 
             focus:outline-none focus:ring-2 focus:ring-stone-500"
>
  <img
    src={serial.thumbnail}
    alt={serial.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
    <h3 className="text-lg sm:text-xl font-semibold mb-1">{serial.title}</h3>
    <p className="text-sm text-stone-300">
      {serial.role} – {serial.year}
    </p>
  </div>
</a>

          ))}
        </div>
      </div>
    </section>
  );
}
