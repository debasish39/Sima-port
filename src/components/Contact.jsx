import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('');
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.access_key = accessKey;

    try {
      const response = await axios.post('https://api.web3forms.com/submit', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Submission failed. Please try again.');
    }

    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="px-6 py-16 text-white ">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-stone-300 text-lg">
          Feel free to reach out via email or phone. I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 border border-gray-600"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 border border-gray-600"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-transparent text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 border border-gray-600"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-stone-600 to-stone-800 text-white font-semibold rounded-lg shadow-md justify-center
                     hover:shadow-lg hover:scale-105 active:scale-95 transform duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-sm text-green-400">{status}</p>
        )}
      </div>
    </section>
  );
}
