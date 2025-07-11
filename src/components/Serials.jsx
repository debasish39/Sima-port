import React from 'react';
import Rahichi from './rahichi.png'
import Sathire from './Sathire.png'
import KedarGouri from './KedarGouri.png'
import FM from './FM.png'
import Tarini from './Tarini akhire tara.png'
import All from './All.png'
export default function Serials() {
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
    video: 'https://www.youtube.com/watch?v=example5',
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
  }
];

  return (
    <section id="projects" className="px-6 py-16 text-white ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">My Serials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serials.map((serial, idx) => (
            <a
              key={idx}
              href={serial.video}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={serial.thumbnail}
                alt={serial.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{serial.title}</h3>
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
