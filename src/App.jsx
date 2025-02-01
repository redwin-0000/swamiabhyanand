import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Footer from "./components/Footer";
import FullScreenImageSlider from "./components/ImageSlider";
import RightSidePopup from "./components/RightSidePopup";
import Section_2 from "./components/Section_2";
import Section_3 from "./components/Section_3";
import Section_4 from "./components/Section_4";
import Section_5 from "./components/Section_5";
import Section_6 from "./components/Section_6";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-yellow-50 w-full min-h-screen">
      {/* Top Header */}
      <header className="bg-orange-500 w-full h-12 flex justify-between items-center px-6 text-white text-sm md:text-base">
        <span>Email: swamiabhyanand@gmail.com</span>
        <span>Call Now! 8881810100</span>
      </header>

      {/* Main Header */}
      <nav className="container mx-auto w-full flex justify-between items-center px-6 sm:px-10 md:px-12 py-4 relative z-50">
        {/* Logo & Mobile Menu Button */}
        <div className="flex  justify-between items-center w-full lg:w-auto">
          <img
            src="https://swamiabhyanand.com/images/cropped-logo.png"
            alt="Logo"
            className="rounded-full w-12 h-12"
          />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-6 text-sm sm:text-base fixed lg:static top-0 left-0 w-60 h-96 lg:h-auto bg-amber-50 lg:bg-transparent shadow-lg lg:shadow-none flex-col lg:flex-row items-center justify-center transition-transform duration-500 ease-in-out transform rounded ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {[
            "Home",
            "About",
            "Blog",
            "Gallery",
            "Donate",
            "Event",
            "E-Books",
            "Contact us",
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-400 px-4 py-4 lg:py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <section className="bg-amber-50 relative z-10">
        {/* FullScreenImageSlider content should shift when the menu opens */}
        <FullScreenImageSlider />
      </section>

      {/* Sections below */}
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <RightSidePopup />
      <Footer />
    </div>
  );
}

export default App;
