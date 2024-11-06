const XShape = () => {
  return (
    <div className="relative w-72 -left-6 flex items-center justify-center  ">
      {/* First line rotated at 45 degrees */}
      <div className="absolute w-full h-[2px] bg-white/50 rotate-45 "></div>
      {/* Second line rotated at -45 degrees */}
      <div className="absolute w-full h-[2px] bg-white/50  -rotate-135"></div>
    </div>
  );
};

export default XShape;
