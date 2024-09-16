"use client";
import React, { useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"
// Expandable Card Component with rounded corners and animation
function ExpandableCard({ title, children }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl shadow-md p-6 mb-6 text-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-gray-400">{isExpanded ? "-" : "+"}</button>
      </div>
      <div
        className={`overflow-scroll transition-max-height duration-500 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            isExpanded ? "opacity-100" : "opacity-0"
          } mt-4 text-gray-300`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
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
    <div>
      {/* Floating Navbar */}
  
      <FloatingNav navItems={navItems}/>
      {/* Main Content */}
      <WavyBackground className="max-w-7xl mx-auto text-5xl">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold">
          Next Gen Learning
        </p>
        <p className="text-base md:text-lg mt-4 text-gray-300 font-normal inter-var">
          An incubator designed to provide access to high-cost opportunities for underrepresented groups.
        </p>

        {/* Expandable Cards */}
        <div className="mt-8 space-y-6">
          {/* Card 1: Program Overview */}
          <ExpandableCard title="Program Overview">
            <p className="text-lg">
              This program aims to empower marginalized yet motivated and
              enthusiastic teens by providing access to high-cost incubator
              opportunities at little to no cost. The participants will develop
              crucial STEM and entrepreneurial skills, preparing them to
              independently innovate and launch their own businesses. By
              targeting visible minorities and diverse gender and geographic
              backgrounds, we hope to foster a more inclusive tech and
              entrepreneurship community.
            </p>
          </ExpandableCard>

          {/* Card 2: Mission and Impact */}
          <ExpandableCard title="Mission and Impact">
            <p className="text-lg">
              Our mission is to address the lack of diversity in Canadian
              entrepreneurship by inspiring marginalized youth to enter the
              tech and entrepreneurial sectors. The program's positive impact
              will be amplified by involving diverse mentors who serve as
              exemplary role models, demonstrating that success can come from
              any background. The goal is to spark the entrepreneurial spirit in
              underrepresented groups, empowering them to overcome economic
              barriers and improve their futures.
            </p>
          </ExpandableCard>
        </div>
      </WavyBackground>
    </div>
  );
}
