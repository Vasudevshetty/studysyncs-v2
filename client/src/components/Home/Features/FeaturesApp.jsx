import { featuresData } from "../Data/FeaturesData";
import { AiOutlineArrowRight } from "react-icons/ai"; // Import the arrow icon

function Features() {
  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-5">Features</h1>

      <div className="flex flex-col space-y-6">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="bg-yellow-300 rounded-lg dark:bg-gray-800 dark:text-white p-5"
          >
            <h1 className="text-xl uppercase tracking-wider font-semibold">
              {feature.title}
            </h1>
            <h3 className="text-2xl leading-snug">{feature.heading}</h3>
            <p className="text-sm tracking-wide leading-relaxed mb-4">
              {feature.description}
            </p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded shadow flex items-center justify-center">
              {feature.title} <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
