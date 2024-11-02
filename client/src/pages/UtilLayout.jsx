function UtilLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-white flex justify-around w-2/3">
        <div className="w-1/2 h-fit p-1 ">
          <h1 className=" text-lg sm:text-3xl px-8 ">StudySyncs</h1>
        </div>
        <div className="text-white bg-secondary-blue w-full  rounded-tr-3xl box   " />
      </div>

      <div className="w-2/3  h-[75vh] bg-gradient-to-b from-secondary-blue to-custom-black rounded-tl-3xl">
        {children}
      </div>
    </div>
  );
}

export default UtilLayout;
