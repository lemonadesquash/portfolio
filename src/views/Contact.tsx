import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

const Contact: React.FC<ContactProps> = ({}) => {
  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setFormData({ name: '', email: '', message: '' });
  // };

  return (
    <section id="contact" className="py-[10rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">📩 Contact Me!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Let's discuss your project and how I can help bring your ideas to
            life.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-12"> */}
        <div className="flex justify-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's talk about everything!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Don't like forms? Send me an email. 📬
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-[0.5rem] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    ruth.damayanti.sitanggang@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-[0.5rem] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/ruth-damayanti-sitanggang/"
                  target="blank"
                >
                  <img
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                    alt="https://www.linkedin.com/in/ruth-damayanti-sitanggang/"
                    height="30"
                    width="40"
                  />
                </a>
                <a
                  href="https://github.com/lemonadesquash"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                    alt="GitHub - lemonadesquash"
                    height="30"
                    width="40"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[0.5rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[0.5rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-[0.5rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-[0.5rem] hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
