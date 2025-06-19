import React from 'react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section id="about" className="py-[4rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">✨ About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-96 mx-auto bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Hi! I'm Ruth Sitanggang from Indonesia. I've been fascinated with
              computers since I was 13. My interest in programming started from
              playing games — I just had to know how they were made!
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Currently, I'm focusing on improving my skills in web development,
              especially using TypeScript. I really enjoy the process of
              learning and solving problems. My goal is to become a full-stack
              developer and build fun, helpful apps that make people’s lives
              easier.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🌐</div>
                <h4 className="font-semibold mb-1">Languages</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  JavaScript, TypeScript
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🖥️</div>
                <h4 className="font-semibold mb-1">Front End</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  React JS, Vue JS, React Native, HTML & CSS, Apollo Client,
                  Leaflet
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-semibold mb-1">Back End</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Node JS, Express, Sequelize, PostgreSQL, GraphQL, Apollo
                  Server, MongoDB, Redis, Rest API
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold mb-1">State Management</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Redux, Pinia, TanStack Query (React Query for data fetching &
                  caching)
                </p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-semibold mb-1">Styling/UI Frameworks</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  CSS (Vanilla/Pure CSS), Tailwind CSS, shadcn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
