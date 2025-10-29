import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Hair Replacement Services | Natural Look San Francisco</title>
        <meta name="description" content="Professional hair replacement services in San Francisco. Natural Look Systems and non-surgical hair solutions with expert styling and maintenance." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Services />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
