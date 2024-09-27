import { user } from "@/constants";
import TypingAnimation from "../../ui/typing-animation";
import Stats from "./Stats";
import User from "./User";

function Dashboard() {
  return (
    <section className="p-2">
      <div className="flex bg-white rounded-xl p-2 lg:flex-row flex-col">
        <div className="flex-1 flex flex-col">
          <div className="text-gray-400 text-2xl py-3 px-5 gap-2 items-center">
            Good Morning,{" "}
            <TypingAnimation
              className="text-gray-800 text-3xl font-bold"
              text={user.name}
            />
          </div>
          <div className="flex justify-evenly gap-3 p-2 px-3 items-center flex-row">
            <Stats title="Bookmark" stat={user.bookmarks.length} />
            <Stats title="Downloads" stat={user.downloads.length} />
            <Stats title="Friends" stat={user.friends.length} />
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-col sm:flex-row gap-4">
          <div className="flex items-center justify-center gap-2 flex-col bg-gray-300 rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48">
            <h1 className="text-1xl md:text-3xl lg:text-4xl">Sem</h1>
            <p className="sm:text-5xl md:text-6xl text-3xl">
              <span className="sm:text-7xl md:text-8xl text-5xl font-bold text-gray-800">
                {user.semester}
              </span>
              /8
            </p>
          </div>
          <User user={user} />
        </div>
      </div>
      <div className="flex">
        
      </div>
    </section>
  );
}

export default Dashboard;
