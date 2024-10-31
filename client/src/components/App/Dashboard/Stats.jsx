import NumberTicker from "@/components/ui/number-ticker";

function Stats({ title, stat }) {
  return (
    <div className="bg-gray-300 dark:bg-app-tertiary flex items-center justify-evenly flex-col rounded-xl h-20 w-full md:h-32">
      <h1 className="text-gray-600 dark:text-gray-300 font-semibold text-xs sm:text-xl md:text-2xl lg:text-sm xl:text-2xl p-1 ">
        {title}
      </h1>
      <NumberTicker
        value={stat}
        className="text-2xl font-bold md:text-6xl text-gray-800 dark:text-white"
      />
    </div>
  );
}

export default Stats;
