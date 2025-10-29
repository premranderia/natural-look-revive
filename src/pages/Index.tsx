import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Natural Look | Professional Hair Replacement San Francisco</title>
        <meta name="description" content="Natural Look offers premium non-surgical hair replacement services in San Francisco. Custom hair systems, expert styling, and 35+ years of experience restoring confidence." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Process />
        <Footer />
      </div>
    </>
  );
};

export default Index;
