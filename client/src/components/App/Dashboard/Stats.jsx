import NumberTicker from "@/components/ui/number-ticker";

function Stats({ title, stat }) {
  return (
    <div className="bg-blue-200 flex items-center justify-evenly flex-col rounded-xl h-20 w-full md:h-32">
      <h1 className="text-gray-600 font-semibold text-xs sm:text-xl md:text-2xl lg:text-sm p-1 ">
        {title}
      </h1>
      <NumberTicker
        value={stat}
        className="text-2xl font-bold md:text-6xl text-gray-800"
      />
    </div>
  );
}

export default Stats;
