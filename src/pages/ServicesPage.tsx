import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Hair Replacement Services | Natural Look Hayward</title>
        <meta name="description" content="Explore our professional services — from custom hair systems to maintenance, repair, and styling. Confidence begins here." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Hair Replacement Services | Natural Look Hayward" />
        <meta property="og:description" content="Explore our professional services — from custom hair systems to maintenance, repair, and styling. Confidence begins here." />
        <meta property="og:url" content="https://naturallookhayward.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Replacement Services | Natural Look Hayward" />
        <meta name="twitter:description" content="Explore our professional services — from custom hair systems to maintenance, repair, and styling." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
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
