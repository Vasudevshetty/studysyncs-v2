import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
// import Testimony from "@/components/Home/Testimony";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr />
      <Features />
      {/* <Testimony /> */}
      <Footer />
    </>
  );
}

export default HomeLayout;
