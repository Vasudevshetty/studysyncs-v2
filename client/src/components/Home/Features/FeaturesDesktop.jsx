import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { featuresData } from "../Data/FeaturesData";
import { AiOutlineArrowRight } from "react-icons/ai";

function Features() {
  const [visibleSection, setVisibleSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <div className="lg:hidden">
        <h1>Features</h1>
      </div>

      <div className="lg:flex  flex-col  hidden">
        <h1 className="text-5xl  font-bold pl-10 uppercase tracking-widest mb-5">
          Features
        </h1>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Content Section */}
          <div className="flex-1 pl-4 lg:pl-10 bg-yellow-300 m-5 lg:m-10 rounded-lg dark:bg-gray-800 dark:text-white">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`w-full  space-y-4 h-screen flex flex-col justify-center transition-opacity duration-700 ${
                  visibleSection === index ? "opacity-100" : "opacity-0"
                }`}
                ref={(el) => (sectionsRef.current[index] = el)}
                data-index={index}
              >
                <h1 className="text-3xl  uppercase tracking-wider font-bold">
                  {feature.title}
                </h1>
                <h3 className="text-4xl  leading-snug">{feature.heading}</h3>
                <p className="text-base tracking-wide leading-relaxed ">
                  {feature.description}
                </p>
                <button className="mt-4 bg-white text-black font-bold py-2 px-6  dark:bg-gray-400 w-[40%] dark:text-white rounded shadow flex items-center">
                  {feature.title} <AiOutlineArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-1">
            <div className="sticky top-0 h-screen">
              <img
                src="/bg.jpg"
                className="h-screen w-full object-cover"
                alt="Background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
