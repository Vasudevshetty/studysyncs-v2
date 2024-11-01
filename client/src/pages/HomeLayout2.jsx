import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";

function HomeLayout2() {
  return (
    <div className="bg-custom-black">
      <Hero />
      <Stats />
      <Features />
    </div>
  );
}

export default HomeLayout2;
