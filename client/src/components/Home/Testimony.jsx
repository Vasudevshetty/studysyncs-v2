import { useState, useEffect } from "react";
import userData from "../../constants/testimonyData";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const itemsPerPage = 3;

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsToShow = window.innerWidth >= 1024 ? itemsPerPage : 1;
  const totalPages = Math.ceil(userData.length / itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset to the first page on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonials = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevTestimonials = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const goToIndex = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="w-full px-4 py-12 sm:py-16 lg:py-20 text-white">
      <div>
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold tracking-widest relative">
          <span className="before:content-[''] before:absolute before:border-t-2 before:border-primary-yellow 
            before:w-16 sm:before:w-64 before:left-2 sm:before:left-72 before:top-1/2 
            before:transform before:-translate-y-1/2 before:transition-opacity before:duration-500 before:opacity-100 
            hover:before:opacity-50
          
            after:content-[''] after:absolute after:border-t-2 after:border-primary-yellow 
            after:w-16 sm:after:w-64 after:top-1/2 after:right-2 sm:after:right-72 
            after:transform after:-translate-y-1/2 after:transition-opacity after:duration-500 after:opacity-100 
            hover:after:opacity-50"
          >
            Testimonials
          </span>
        </h1>
      </div>

      <div className="flex items-center justify-center mt-12">
        <button
          onClick={prevTestimonials}
          className="text-white bg-gray-700/70 p-2 h-12 w-12 text-4xl flex items-center justify-center rounded-full hover:bg-gray-800 transition-all duration-300 mr-6"
        >
          &lt;
        </button>

        <SwitchTransition>
          <CSSTransition
            key={currentIndex}
            timeout={500}
            classNames="slide"
            onExited={handleAnimationEnd}
          >
            <div className="flex justify-center lg:justify-between space-x-4 lg:space-x-6 px-4 sm:px-8 lg:px-0">
              {userData
                .slice(currentIndex * itemsToShow, (currentIndex + 1) * itemsToShow)
                .map((user, index) => (
                  <div
                    key={index}
                    className="sm:h-[28rem] sm:w-[25rem] border border-primary-blue bg-primary-blue/40 rounded-tl-[3rem] rounded-tr-3xl rounded-bl-md rounded-b-[3rem] p-6 flex flex-col justify-center items-center shadow-lg"
                  >
                    <img
                      src={user.profilePic}
                      alt={`${user.name}'s profile`}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div className="text-center text-lg font-semibold mb-4">
                      {user.name}
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed text-center">
                      {user.review}
                    </p>
                    <div className="text-sm text-gray-100 mt-2">
                      {user.branch}
                    </div>
                  </div>
                ))}
            </div>
          </CSSTransition>
        </SwitchTransition>

        <button
          onClick={nextTestimonials}
          className="text-white bg-gray-700/70 p-2 h-12 w-12 text-4xl flex items-center justify-center rounded-full hover:bg-gray-800 transition-all duration-300 ml-6"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary-yellow" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
