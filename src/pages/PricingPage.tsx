import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing & Plans | Natural Look Hair Replacement</title>
        <meta name="description" content="Explore Natural Look hair replacement pricing options. From basic maintenance to premium custom systems, find the perfect plan for your needs." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Pricing />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
