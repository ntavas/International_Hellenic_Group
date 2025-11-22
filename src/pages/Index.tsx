import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Videos />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
