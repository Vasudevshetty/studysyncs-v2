import NumberTicker from "@/components/ui/number-ticker";

function Stats({ title, stat }) {
  return (
    <div className="bg-app-light-secondary dark:bg-app-tertiary flex items-center justify-evenly flex-col rounded-xl h-20 w-full md:h-36">
      <h1 className="text-gray-600 dark:text-gray-300 font-semibold text-xs sm:text-xl md:text-2xl lg:text-sm xl:text-2xl p-1 ">
        {title}
      </h1>
      <NumberTicker
        value={stat}
        className="text-2xl font-bold md:text-6xl text-[#007bff] dark:text-[#22baf6]"
      />
    </div>
  );
}

export default Stats;
