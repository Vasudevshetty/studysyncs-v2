import userData from "@/constants/testimonyData";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group"; // Import for transition effects

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const nextTestimonials = () => {
    if (isAnimating) return; // Prevent action if animating
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= userData.length ? 0 : prevIndex + 3
    );
  };

  const prevTestimonials = () => {
    if (isAnimating) return; // Prevent action if animating
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0
        ? userData.length - (userData.length % 3)
        : prevIndex - 3
    );
  };

  // Handle animation end event
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevTestimonials}
          className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          &lt;
        </button>
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <button
          onClick={nextTestimonials}
          className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          &gt;
        </button>
      </div>

      <div
        className="flex overflow-hidden transition-transform duration-500"
        ref={sliderRef}
      >
        <CSSTransition
          in={!isAnimating}
          timeout={500}
          classNames="slide"
          onExited={handleAnimationEnd}
          unmountOnExit
        >
          <div className="flex space-x-4">
            {userData
              .slice(currentIndex, currentIndex + 3)
              .map((user, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 p-4 bg-white rounded-lg shadow-md transition-transform duration-300"
                >
                  <img
                    src={user.profilePic}
                    alt={`${user.name}'s profile`}
                    className="w-16 h-16 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center">
                    {user.name}
                  </h3>
                  <p className="text-sm text-center text-gray-500">
                    {user.branch}
                  </p>
                  <p className="mt-4 text-center text-gray-700">
                    {user.review}
                  </p>
                </div>
              ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Testimony;
