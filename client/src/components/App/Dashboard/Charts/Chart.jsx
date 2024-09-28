function Chart({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-400 rounded-xl w-full flex items-center justify-center flex-col">
      <h1 className="text-center text-2xl text-gray-800 font-bold dark:text-gray-200 pt-4">
        {title}
      </h1>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}

export default Chart;
