import { subjects } from "@/constants/user";

function Subjects() {
  return (
    <div className="p-2 lg:w-[40%] xl:w-[30%] flex flex-col bg-app-light-secondary dark:bg-app-secondary rounded-xl">
      <h1 className="w-full text-2xl text-center font-bold text-black dark:text-white p-2">
        Subjects
      </h1>
      <div className="flex-1 flex flex-col gap-3 p-2">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex w-full rounded-xl gap-2 bg-app-light-tertiary dark:bg-app-tertiary p-2 items-center overflow-y-auto"
          >
            <span
              className={`max-sm:text-xs h-12 min-w-12 sm:h-16 sm:min-w-16 flex items-center justify-center ${subject.color} text-white rounded-full uppercase font-bold`}
            >
              {subject.slug}
            </span>

            <div className="flex-1 flex items-center">
              <h1 className="text-xs lg:text-sm xl:text-lg flex-1 pr-1 dark:text-white">
                {subject.name}
              </h1>
              <div className="flex flex-col items-center justify-center w-[25%] bg-gray-800 rounded-xl p-1 text-white">
                <span className="text-xs">Credits</span>
                <span className="p-1 h-6 w-6 flex items-center justify-center text-white text-xl">
                  {subject.credit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;
