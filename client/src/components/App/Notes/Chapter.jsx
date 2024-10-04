import { FaFilePdf } from "react-icons/fa";
import ResourceOptions from "./ResourceOptions";

function Chapter({ chapter }) {
  return (
    <div className="flex flex-col gap-4 p-2 rounded-xl h-full w-full bg-gray-300">
      <h1 className="text-xl sm:text-3xl font-bold text-black mb-2">
        {chapter.name}
      </h1>
      <div className="flex flex-col gap-4 overflow-y-auto p-2 h-full">
        {chapter.modules.map((mod, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-lg transition-shadow duration-300"
          >
            <h2 className="text-sm w-full sm:text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="p-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                {index + 1}
              </span>
              {mod.name}
            </h2>
            <div className="flex flex-col gap-2 h-full">
              {mod.resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 border rounded-xl border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-1 flex items-center gap-2 cursor-pointer">
                    <span className="text-red-400 text-2xl">
                      <FaFilePdf />
                    </span>
                    <h3 className="text-blue-600 font-medium flex flex-col">
                      <span className="text-sm xl:text-lg">
                        {resource.name}
                      </span>
                      <span className="text-[12px] text-gray-500">
                        {resource.size}
                      </span>
                    </h3>
                  </div>
                  <ResourceOptions />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chapter;
