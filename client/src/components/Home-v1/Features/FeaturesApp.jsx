// import { useState, useEffect } from "react";
// import { featuresData } from "../Data/FeaturesData";
// import { AiOutlineArrowRight } from "react-icons/ai";

// function Features() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const delay = 2000; // Time delay for auto-slide

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, delay);

//     return () => clearInterval(interval);
//   }, []);

//   // Function to manually navigate via dots
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center px-4 py-6 bg-yellow-300">
//       <h1 className="text-3xl font-bold text-center mb-5">Features</h1>

//       {/* Feature content */}
//       <div className="flex flex-col space-y-6 w-full max-w-lg">
//         <div
//           className="rounded-lg dark:bg-gray-800 dark:text-white p-5 transition-all duration-500 ease-in-out"
//           key={currentIndex}
//         >
//           <h1 className="text-xl uppercase tracking-wider font-semibold">
//             {featuresData[currentIndex].title}
//           </h1>
//           <h3 className="text-2xl leading-snug">
//             {featuresData[currentIndex].heading}
//           </h3>
//           <p className="text-sm tracking-wide leading-relaxed mb-4">
//             {featuresData[currentIndex].description}
//           </p>
//           <button className="bg-white text-black font-bold py-2 px-4 rounded shadow flex items-center justify-center">
//             {featuresData[currentIndex].title}
//             <AiOutlineArrowRight className="ml-2" />
//           </button>
//         </div>
//       </div>

//       {/* Dots for navigation */}
//       <div className="flex justify-center space-x-2 mt-5">
//         {featuresData.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${
//               currentIndex === index ? "bg-black/20" : "bg-white"
//             }`}
//             onClick={() => handleDotClick(index)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Features;
import { useState, useEffect } from "react";
import { featuresData } from "../Data/FeaturesData";
import { AiOutlineArrowRight } from "react-icons/ai";

function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 3000; 
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); 
      }, 500);
    }, delay);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to manually navigate via dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setFade(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-6 bg-yellow-300">
      <h1 className="text-3xl font-bold text-center mb-5">Features</h1>

      <div
        className={`flex flex-col space-y-6 w-full max-w-lg transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="rounded-lg dark:bg-gray-800 dark:text-white p-5"
          key={currentIndex}
        >
          <h1 className="text-lg uppercase tracking-wider font-semibold">
            {featuresData[currentIndex].title}
          </h1>
          <h3 className="text-xl leading-snug">
            {featuresData[currentIndex].heading}
          </h3>
          <p className="text-sm tracking-wide leading-relaxed mb-4">
            {featuresData[currentIndex].description}
          </p>
          <button className="bg-white text-black font-bold py-2 px-6 rounded shadow flex items-center justify-center hover:bg-gray-300 transition-all duration-300 ease-in-out">
            {featuresData[currentIndex].title}
            <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-3 mt-6">
        {featuresData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-transform duration-300 ${
              currentIndex === index ? "bg-black/50  scale-110" : "bg-gray-50"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Features;
