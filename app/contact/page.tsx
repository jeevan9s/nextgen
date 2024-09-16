"use client";
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const Speakers = () => {
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Team",
          link: "/team",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Get Involved",
          link: "/contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];
  return (
    <div className="max-w-7xl mx-auto p-8 text-white bg-gray-900">
      <FloatingNav navItems={navItems}/>
      <div className="bg-gray-800 text-white p-12 mt-[100px] rounded-2xl text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Inspire the Next Generation of Innovators</h1>
        <p className="text-lg mb-8">
          We are actively seeking passionate speakers to join our program and share their expertise with the next wave of innovators. If you’re a leader in technology, entrepreneurship, or any forward-thinking field, we want you to help inspire tomorrow’s change-makers.
        </p>
        <Link href={"#form"}>
        <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition">
          Apply to Speak
        </button>
        </Link>
      </div>

      {/* About the Program */}
      <section className="my-12">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-6">About Our Program</h2>
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Our program is an immersive online experience designed to empower high school students from across the country. Through interactive sessions, workshops, and networking opportunities, students develop essential skills in leadership, innovation, and entrepreneurship. 
            We believe that hearing directly from industry professionals and experienced leaders like you will broaden their horizons and ignite their potential.
          </p>
        </div>
      </section>

      {/* Speaker Benefits */}
      <section className="my-12">
        <h2 className="text-4xl font-bold text-center mb-6">Why Speak at Our Program?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Inspire the Future</h3>
            <p>
              Share your journey, insights, and lessons learned with the next generation of innovators. Your experience can shape the minds of future entrepreneurs and leaders.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Expand Your Network</h3>
            <p>
              Connect with other thought leaders, educators, and professionals who are passionate about shaping the future of innovation and technology. Build long-lasting connections with a community of like-minded individuals.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Empower Young Leaders</h3>
            <p>
              Help students unlock their potential by providing them with the tools and inspiration they need to make a difference in the world. Your contribution can directly impact their career trajectories.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="my-12 bg-gray-800 text-white p-12 rounded-2xl text-center shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
        <p className="text-lg mb-8">
          If you’re a trailblazer in technology, business, education, or innovation, we’d love to have you share your expertise. Help us guide the next generation of entrepreneurs and leaders. Your insights can shape the future.
        </p>

      </section>

      {/* Application Section */}
      <section className="my-12">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg" id='form'>
          <h2 className="text-4xl font-bold text-center mb-6">Speaker Application</h2>
          <p className="text-lg text-center mb-8 max-w-4xl mx-auto">
            Interested in speaking at our upcoming sessions? Apply now by filling out the form below. Our team will review your application and get in touch with you shortly.
          </p>
          <div className="max-w-xl mx-auto bg-gray-700 p-8 rounded-2xl shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white" placeholder="John Doe" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white" placeholder="you@example.com" />
              </div>
              <div className="mb-6">
                <label htmlFor="linkedin" className="block text-lg font-medium mb-2">LinkedIn Profile</label>
                <input type="url" id="linkedin" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Why Would You Like to Speak?</label>
                <textarea id="message" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white" rows={4} placeholder="Share your reason for wanting to speak at our program"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;
