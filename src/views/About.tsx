import React from 'react';
import Reveal from '../components/Reveal';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({isDarkMode}) => {
  return (
    <section id="about" className="pt-8 pb-4 md:py-[4rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <Reveal delay={0}>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">✨ About Me </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <Reveal delay={150}>
             <div className="w-80 h-96 mx-auto bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
              </div>
            </Reveal>
            <Reveal delay={300}>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Hi! I'm Ruth Sitanggang from Indonesia. I've been fascinated with
              computers since I was 13. My interest in programming started from
              playing games, I just had to know how they were made!
            </p>
            </Reveal>
            <Reveal delay={450}>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Currently, I'm focusing on improving my skills in web development,
              especially using TypeScript. I really enjoy the process of
              learning and solving problems. My goal is to become a full-stack
              developer and build fun, helpful apps that make people’s lives
              easier.
              </p>
            </Reveal>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8">
              <Reveal delay={150}>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-semibold mb-1">Languages</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  JavaScript, TypeScript
                </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🖥️</div>
                <h4 className="font-semibold mb-1">Front End</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  React JS, Vue JS, React Native, HTML & CSS, Apollo Client,
                  Leaflet
                </p>
                </div>
              </Reveal>
              <Reveal delay={250}>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-semibold mb-1">Back End</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  Node JS, Express, Sequelize, PostgreSQL, GraphQL, Apollo
                  Server, MongoDB, Redis, Rest API
                </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold mb-1">State Management</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  Redux, Pinia, TanStack Query (React Query for data fetching &
                  caching)
                </p>
                </div>
              </Reveal>
              <Reveal delay={350}>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-semibold mb-1">Styling/UI Frameworks</h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  CSS (Vanilla/Pure CSS), Tailwind CSS, shadcn
                </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default About;
