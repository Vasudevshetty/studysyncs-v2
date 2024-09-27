// import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
// import Testimony from "@/components/Home/Testimony";
import { ThemeProvider } from "@/components/context/ThemeContext";

function HomeLayout() {

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        {/* <Features />
      <Testimony /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default HomeLayout;
