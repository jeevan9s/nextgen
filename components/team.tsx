"use client";
import React, { useState } from 'react';

// TypeScript interface for the team member props
interface TeamMember {
  name: string;
  age: number;
  imgSrc: string;
  blurb: string;
  linkedin: string;
}

// Team Member Modal Component with Animation
const TeamMemberModal = ({ isOpen, onClose, name, imgSrc, blurb, linkedin, age }: TeamMember & { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null; // Modal is not visible when isOpen is false

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div
        className="bg-gray-900 text-white p-8 rounded-2xl w-full md:w-3/4 lg:w-1/2 mx-auto relative transition-all duration-500 ease-out transform opacity-0 scale-75"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.75)', opacity: isOpen ? 1 : 0 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
          onClick={onClose}
        >
          Close
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center">
          <img className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6" src={imgSrc} alt={name} />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-gray-400 mt-2">Age: {age}</p>
            <p className="mt-4">{blurb}</p>
            <a
              href={linkedin}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Team Member Card Component with rounded-2xl and larger size
const TeamMemberCard: React.FC<TeamMember> = ({ name, age, imgSrc, blurb, linkedin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card that triggers modal */}
      <div
        className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 mb-6  mx-auto transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-col items-center">
          <img className="w-40 h-40 rounded-full mb-4" src={imgSrc} alt={name} />
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-400">Age: {age}</p>
        </div>
      </div>

      {/* Modal that shows when clicked */}
      <TeamMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        imgSrc={imgSrc}
        blurb={blurb}
        linkedin={linkedin}
        age={age}
      />
    </>
  );
};

// Team Section Component
const Team: React.FC = () => {
  // Sample team data
  const teamMembers: TeamMember[] = [
    {
      name: 'Ishan Gehlaut',
      age: 17,
      imgSrc: 'https://via.placeholder.com/150',
      blurb: 'Ishan is a motivated highschool student with interest in the sciences.',
      linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    {
      name: 'Kavan Abeyratne',
      age: 17,
      imgSrc: 'https://via.placeholder.com/150',
      blurb: '',
      linkedin: 'https://www.linkedin.com/in/janesmith'
    },

  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-10 text-white">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            age={member.age}
            imgSrc={member.imgSrc}
            blurb={member.blurb}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
