import React, { useState } from 'react';
import './index.css';
import { BackgroundLines } from "./components/ui/BackgroundLines";
import { FloatingDock } from "./components/ui/floating-dock";
import { Carousel, Card } from "./components/ui/apple-cards-carousel";
import { CustomCursor } from "./components/ui/CustomCursor";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconMail,
  IconBrandLeetcode,
  IconWriting,
} from "@tabler/icons-react";
import { Cover } from "./components/ui/cover";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import { IconCloud } from "./components/ui/icon-cloud";
import { ContactForm } from './components/ui/ContactForm';
import { BackgroundBeams } from "./components/ui/background-beams";
import project1Image from './assets/image.png';
import project2Image from './assets/ems.png';
import { GitHubStats } from './components/ui/GitHubStats';

function App() {
  const [isGitHubStatsOpen, setIsGitHubStatsOpen] = useState(false);
  
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Leetcode",
      icon: <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://leetcode.com/u/beekntr/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: null,
      onClick: (e) => {
        e.preventDefault();
        setIsGitHubStatsOpen(true);
      }
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/kshitijsinghbhati/",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/KshitijSin24788",
    },
   
    {
      title: "Mail Us",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:hello@kshitijsinghbhati.in",
    },
    {
      title: "Contact Me",
      icon: <IconWriting className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
  ];

  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Project Description
              </span>{" "}
              Description of your project goes here...
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Project screenshot"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        ))}
      </>
    );
  };

  const data = [
    {
      category: "Project 1",
      title: "E-Sports Club Registration",
      src: project1Image,
      githubLink: "https://github.com/beekntr/Perfect-Pixels",
      websiteLink: "https://esportsclub.me",
      content: <DummyContent />,
    },
    {
      category: "Project 2",
      title: "Employee Management System",
      src: project2Image,
      githubLink: "https://github.com/beekntr/EmployeeManagement-System",
      websiteLink: "https://ems.kshitijsinghbhati.com",
      content: <DummyContent />,
    },
    // Add more projects as needed
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      <CustomCursor />
      <div id="home" className="relative h-[30rem] sm:h-[40rem] md:h-screen bg-white dark:bg-neutral-950">
        <BackgroundLines className="absolute inset-0 flex items-center justify-center w-full flex-col px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 w-full max-w-4xl mx-auto">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight leading-tight sm:leading-snug md:leading-normal">
              HEY THERE, I'M, <br className="hidden sm:block" /> KSHITIJ SINGH BHATI.
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-400 text-center px-4 mt-2 sm:mt-4">
              STUDENT | SOFTWARE DEVELOPER | CYBER SECURITY ENTHUSIAST
            </p>
          </div>
        </BackgroundLines>
      </div>
      
      <div className="relative dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div id="projects" className="relative py-10 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-6 sm:mb-10">
              My Projects
            </h2>
            <Carousel items={cards} />
          </div>
        </div>

        <div className="relative py-10 sm:py-16 md:py-20">
          <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-center mt-6 relative z-20 py-4 sm:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Building amazing websites <br /> at <Cover>warp speed</Cover>
            </h1>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={links}
          desktopClassName="shadow-2xl"
          mobileClassName="shadow-2xl"
        />
      </div>
      
      <footer className="h-auto flex flex-col items-center justify-center relative dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="relative z-10 mb-4 pt-10 sm:pt-16 md:pt-20">
          <TextHoverEffect 
            text="TOOLS" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold"
          />
        </div>
        
        <div className="relative z-10 mb-10 sm:mb-16 md:mb-20">
          <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-4 sm:px-10 md:px-20 pb-10 sm:pb-16 md:pb-20 pt-4">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-neutral-950"></div>

        <div id="contact" className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 w-full h-full">
            <BackgroundBeams />
          </div>

          <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center px-4 sm:px-6 pb-16 sm:pb-24 md:pb-32">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-200">
                Contact Me
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400">
                Let's discuss your project
              </p>
            </div>
            <div className="w-full flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </footer>

      <GitHubStats 
        isOpen={isGitHubStatsOpen}
        onClose={() => setIsGitHubStatsOpen(false)}
        username="beekntr"
      />
    </div>
  );  
}

export default App;
