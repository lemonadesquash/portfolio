import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';

import { Download } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <section id="home" className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-52">
          <div className="text-center">
            <p className="text-lg mb-2">Hi!</p>

            <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to My Portfolio 🍀
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm Ruth — a frontend developer & tech enthusiast. Passionate
              about turning ideas into interactive and accessible web
              experiences.
              <br />
              Let’s build something awesome together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ruth-resume.pdf"
                download
                className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-500 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Download My Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
