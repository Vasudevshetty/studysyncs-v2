function Stats() {
  return (
    <div className="text-white flex  sm:flex-row items-center justify-center gap-6 sm:gap-12 p-4">
      <div className="border border-primary-blue sm:border-2 lg:border-4 rounded-2xl bg-primary-blue/40 h-24 sm:h-40 w-40 sm:w-72 flex items-center justify-center">
        <h1 className="flex flex-col text-xl sm:text-4xl font-bold items-center">
          50+<span className="text-sm sm:text-3xl">users</span>
        </h1>
      </div>
      <div className="border border-primary-blue sm:border-2 lg:border-4 rounded-2xl bg-primary-blue/40 h-24 sm:h-40 w-40 sm:w-72 flex items-center justify-center">
        <h1 className="flex flex-col text-xl sm:text-4xl font-bold items-center">
          100+<span className="text-sm sm:text-3xl">Resources</span>
        </h1>
      </div>
      <div className="border border-primary-blue sm:border-2 lg:border-4 rounded-2xl bg-primary-blue/40 h-24 sm:h-40 w-40 sm:w-72 flex items-center justify-center">
        <h1 className="flex flex-col text-xl sm:text-4xl font-bold items-center">
          100+<span className="text-sm sm:text-3xl">Downloads</span>
        </h1>
      </div>
    </div>
  );
}

export default Stats;
