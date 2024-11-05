import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import featuresData from "../../constants/featuresData"; // Adjust the path as necessary

function Features() {
  return (
    <div className="text-white mt-8 flex flex-col  ">
      {/* Title */}
      <div>
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold tracking-widest relative">
          <span
            className="before:content-[''] before:absolute before:border-t-2 before:border-primary-yellow 
            before:w-20 sm:before:w-64 before:left-4 sm:before:left-72 before:top-1/2 
            before:transform before:-translate-y-1/2 before:transition-opacity before:duration-500 before:opacity-100 
            hover:before:opacity-50
          
            after:content-[''] after:absolute after:border-t-2 after:border-primary-yellow 
            after:w-20 sm:after:w-64 after:top-1/2 after:right-6 sm:after:right-72 
            after:transform after:-translate-y-1/2 after:transition-opacity after:duration-500 after:opacity-100 
            hover:after:opacity-50"
          >
            Features
          </span>
        </h1>
      </div>

      {/* Feature Sections */}
      <div className="">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-around items-center rounded-lg shadow-md mt-8  px-10 p-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse "
            }`}
          >
            {/* Image Section */}
            <img
              src={feature.imgSrc}
              className={`w-full md:w-1/3 lg:w-1/3 h-auto md:h-48 lg:h-56 object-cover rounded-lg ${feature.imgClass}`}
              alt={feature.title}
            />

            {/* Text Section */}
            <div
              className={`flex flex-col justify-start gap-4 text-center md:text-left max-w-lg p-6  ${feature.textClass}`}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">
                {feature.title}
              </h1>
              {feature.description && (
                <p className="text-gray-100/50 text-sm md:text-base lg:text-lg leading-relaxed">
                  {feature.description}
                </p>
              )}
              <Link
                to={feature.linkPath}
                className={`flex justify-center md:justify-start items-center gap-2 font-semibold text-sm md:text-base p-2 px-4 rounded-3xl transition-all duration-300 shadow-md w-40 ${
                  feature.isComingSoon
                    ? "bg-primary-yellow text-gray-700/90 hover:bg-yellow-600 rounded-xl"
                    : "bg-primary-blue text-white hover:bg-blue-600"
                }`}
              >
                {feature.linkText} {!feature.isComingSoon && <FiArrowRight />}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
