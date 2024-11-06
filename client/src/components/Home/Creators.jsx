import TypingAnimation from "./TypingAnimation";
// import XShape from "./XShape";

const ContactSection = () => {
  return (
    <div className="flex items-center justify-center  p-4 sm:p-0">
      <div className="bg-secondary-blue  h-52 sm:h-[48vh]  w-full max-w-lg lg:max-w-5xl rounded-3xl p-6 sm:p-8 shadow-lg relative ">
        {/* <div className="hidden sm:block absolute bottom-[7rem]">
          <XShape />
        </div> */}
        <div className="flex flex-col sm:gap-8">
          <h1 className="text-white flex gap-2 text-xl sm:text-4xl font-semibold mt-4 tracking-wide items-center justify-center text-center">
            Get in touch with{" "}
            <span className="text-primary-yellow text-3xl sm:text-5xl font-segoe-script font-bolder">
              <TypingAnimation
                text="Creators.."
                typingSpeed={200}
                pauseTime={1000}
              />
            </span>
          </h1>
          <div className="flex items-center bg-secondary-blue mt-6 rounded-full overflow-hidden mx-auto w-11/12 sm:w-3/5">
            <input
              type="email"
              placeholder="Enter email..."
              className="px-4 py-2 bg-transparent opacity-50 text-white placeholder-white focus:outline-none w-full text-lg"
            />
            <button className="bg-primary-blue text-white font-semibold px-4 py-2 rounded-full">
              Get Updates
            </button>
          </div>
        </div>

        {/* <div className="hidden sm:block absolute -right-6 bottom-52">
          <XShape />
        </div> */}
      </div>
    </div>
  );
};

export default ContactSection;
