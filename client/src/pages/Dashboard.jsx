import LineChartRecharts from "@/components/LineChart";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import PieChartRecharts from "@/components/PieChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";

function Dashboard() {
  return (
    <section className="w-screen h-[90vh] flex max-md:flex-col max-md:h-[180vh]">
      <aside className="h-full w-[25vw] max-lg:w-[30vw] max-md:h-[15%] max-md:w-full max-md:flex-row bg-red-50 flex flex-col items-center justify-between">
        <div className="h-[40%] w-full max-md:h-full max-md:w-[30%] items-center flex justify-center bg-pink-800">
          <Avatar className="h-[80%] w-[55%] max-md:w-[70%] aspect-square">
            <AvatarImage src="https://github.com/Vasudevshetty.png" />
            <AvatarFallback>
              {"Vasudev Shetty"
                .trim()
                .split(" ")
                .splice(0, 2)
                .map((word) => word[0].toUpperCase())
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="h-[10%] w-full max-md:h-full max-md:w-[20%] bg-green-50 flex items-center flex-col justify-center max-sm:text-xs">
          <h1>Vasudev Shetty</h1>
          <span>8088779709</span>
        </div>
        <div className="h-[10%] w-full max-md:h-full max-md:w-[20%] bg-violet-50 flex items-center flex-col justify-center max-sm:text-xs">
          <h1>SJCE, JSSSTU</h1>
          <span>CSE, SEM-4</span>
        </div>
        <div className="h-[40%] bg-orange-200 w-full max-md:h-full max-md:w-[30%] flex items-center flex-col"></div>
      </aside>

      <div className="w-[75vw] h-full max-md:w-full max-md:h-[85%]">
        <div className="w-full h-[50%] flex px-4 py-5 bg-red-200 max-md:h-[65%] max-md:grid">
          <div className="h-full w-[33%] max-md:w-full max-md:col-span-2">
            <LineChartRecharts />
          </div>
          <div className="h-full w-[33%] flex items-center justify-center max-md:w-full">
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={80}
              gaugePrimaryColor="rgb(79 70 229)"
              gaugeSecondaryColor="rgb(0, 0, 0, 0.1)"
            />
          </div>
          <div className="h-full w-[33%] max-md:w-full">
            <PieChartRecharts />
          </div>
        </div>
        <Tabs
          defaultValue="downloads"
          className="h-[50%] w-full max-md:h-[35%]"
        >
          <TabsList className="bg-green-300 h-[15%] flex items-center px-4 m-0">
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>
          <TabsContent
            value="downloads"
            className="bg-green-100 h-[85%] m-0 p-1"
          >
            Downloads will be here
          </TabsContent>
          <TabsContent
            value="bookmarks"
            className="bg-green-100 h-[85%] p-1 m-0"
          >
            Bookmarks will be here
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Dashboard;
