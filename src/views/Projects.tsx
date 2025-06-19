import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectItem {
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
  tech: string;
}

interface ProjectProps {
  isDarkMode: boolean;
}

const Project: React.FC<ProjectProps> = ({}) => {
  const projects: ProjectItem[] = [
    {
      title: 'Astronomy News',
      category: 'Web App',
      image: '/assets/astronomy-news.png',
      color: 'bg-blue-100',
      description:
        'A place for you to find the latest news about Astronomy all around the world!',
      tech: 'Tech stack: Vue, Express JS, Redux, 3rd party API for server-side, CSS',
    },
    {
      title: 'Cyberscape',
      category: 'Web App',
      image: '/assets/cyberscape.png',
      color: 'bg-pink-100',
      description:
        'NFT Virtual Gallery – Final team project during bootcamp. I was responsible for the frontend development',
      tech: 'Tech stack: React, Tailwind, Express JS, PostgreSQL, CSS',
    },
    {
      title: 'Notes App',
      category: 'Web App',
      image: '/assets/notes-app.png',
      color: 'bg-gray-100',
      description: 'Personal Notes App',
      tech: 'Tech stack: React',
    },
    {
      title: 'Uniqlone (Uniqlo Clone)',
      category: 'Web & Mobile Apps',
      image: '/assets/uniqlone.png',
      color: 'bg-orange-100',
      description: 'Clone for Uniqlo Store',
      tech: 'Tech stack: React, React Native, Redux, Express JS, Apollo Server, PostgreSQL, CSS',
    },
    {
      title: "Yae's Autobiography",
      category: 'Web Design',
      image: '/assets/yae-autobiography.png',
      color: 'bg-purple-100',
      description: 'Yae Miko, a character from the game Genshin Impact',
      tech: 'Tech stack: HTML & CSS',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="project" className="py-[3.5rem] relative">
      <div className="max-w-5xl mx-auto px-[1rem] h-[60rem] my-4">
        <div className="text-center mb-[2rem]">
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold">
            👩🏻‍💻 My Projects
          </h2>
          <p className="text-[1.125rem] text-gray-600 dark:text-gray-400 mt-[1rem]">
            Here’s a collection of projects I’ve built — from personal
            experiments to team collaborations.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full px-[1rem] flex-shrink-0">
                <div
                  className={`${project.color} p-[1.5rem] rounded-2xl shadow-lg h-[40rem]`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[28rem] rounded-[0.5rem] object-fill"
                  />
                  <h3 className="text-[1.25rem] font-semibold mb-[0.5rem]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-[1rem]">{project.category}</p>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <p className="text-sm text-gray-500 mt-[1rem] italic">
                    {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-800 p-[0.75rem] rounded-full shadow-md hover:bg-gray-500 dark:hover:bg-gray-700 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 dark:bg-gray-800 p-[0.75rem] rounded-full shadow-md hover:bg-gray-500 dark:hover:bg-gray-700 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
