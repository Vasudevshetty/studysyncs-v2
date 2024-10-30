// import Features from "@/components/Home/Features";
import Footer from "@/components/Home-v1/Footer";
import Hero from "@/components/Home-v1/Hero";
import Navbar from "@/components/Home-v1/Navbar";
import Testimony from "@/components/Home-v1/Testimony";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <Testimony />
      <Footer />
    </div>
  );
}

export default HomeLayout;
