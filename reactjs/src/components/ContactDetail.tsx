import { FaGithub, FaLinkedin, FaPhoneVolume } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactDetail = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form handling logic here
  };

  return (
    <div className="max-w-7xl mx-auto h-full px-4 pt-12 pb-6 flex flex-col md:flex-row gap-8">

      {/* Left Column: Contact Info */}
      <div className="flex-[30%]">
        <div className="mb-8">
          <h3 className="text-blue-500 text-xl font-bold mb-5">Contact Details:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-blue-500">
              <IoMdMail aria-hidden="true" />
              <a href="mailto:mareebsheikh92@gmail.com" className="text-gray-800 hover:text-blue-600 transition-colors" >
                mareebsheikh92@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-blue-500">
              <FaPhoneVolume aria-hidden="true" />
              <a href="tel:+923472844259" className="text-gray-800 hover:text-blue-600 transition-colors" >
                +92 347 2844259
              </a>
            </li>
            <li className="flex items-center gap-3 text-blue-500">
              <FaLocationDot aria-hidden="true" />
              <span className="text-gray-800">Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-blue-500 text-xl font-bold mb-5">Follow Me:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-blue-500">
              <FaGithub aria-hidden="true" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors" >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3 text-blue-500">
              <FaLinkedin aria-hidden="true" />
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors" >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3 text-blue-500">
              <FaXTwitter aria-hidden="true" />
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition-colors" >
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-[70%]">
        <h3 className="text-blue-500 text-xl font-bold mb-5">Get in Touch with Me</h3>
        <p className="text-gray-800 mb-6">
          Have a question or want to discuss your project? Feel free to reach out using the contact form below.
          I'll respond within 24 hours!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-[50%]">
              <label htmlFor="name" className="block w-full mb-1">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                aria-required="true"
                className="w-full rounded-md outline-0 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-blue-500 px-4 py-2"
              />
            </div>
            <div className="flex-[50%]">
              <label htmlFor="email" className="block w-full mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                className="w-full rounded-md outline-0 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-blue-500 px-4 py-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block w-full mb-1">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter subject of message"
              required
              aria-required="true"
              className="w-full rounded-md outline-0 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-blue-500 px-4 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block w-full mb-1">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Write your message here..."
              required
              aria-required="true"
              className="w-full rounded-md outline-0 ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-blue-500 px-4 py-2 resize-none"
            />
          </div>

          <button
            type="submit"
            aria-label="Send message"
            className="text-blue-500 border border-blue-500 rounded-md px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetail;
