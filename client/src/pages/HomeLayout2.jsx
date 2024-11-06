import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import Testimony from "@/components/Home/Testimony";

function HomeLayout2() {
  return (
    <div className="bg-custom-black">
      <Hero />
      <Stats />
      <Features />
      <Testimony />
      <Footer />
    </div>
  );
}

export default HomeLayout2;
