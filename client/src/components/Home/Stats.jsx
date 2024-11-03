function Stats() {
  return (
    <div className="text-white flex  sm:flex-row items-center justify-center gap-6 sm:gap-12 p-4">
      <div className="border border-primary-blue sm:border-2 lg:border-4 rounded-2xl bg-primary-blue/50 h-24 sm:h-32 w-40 sm:w-52 flex items-center justify-center">
        <h1 className="flex flex-col text-xl sm:text-2xl font-bold">
          50+<span className="text-sm sm:text-base">users</span>
        </h1>
      </div>
      <div className="border border-primary-blue sm:border-2 lg:border-4 rounded-2xl bg-primary-blue/50 h-24 sm:h-32 w-40 sm:w-52 flex items-center justify-center">
        <h1 className="flex flex-col text-xl sm:text-2xl font-bold items-center justify-center">
          1000+<span className="text-sm sm:text-base">Resources</span>
        </h1>
      </div>
      <div className="border border-primary-blue sm:border-2 lg:border-4 rounded-2xl bg-primary-blue/50 h-24 sm:h-32 w-40 sm:w-52 flex items-center justify-center">
        <h1 className="flex flex-col text-xl sm:text-2xl font-bold items-center justify-center">
          100+<span className="text-sm sm:text-base">Downloads</span>
        </h1>
      </div>
    </div>
  );
}

export default Stats;
