import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing & Plans | Natural Look Hair Replacement</title>
        <meta name="description" content="Transparent pricing for custom hair systems, maintenance, and installation. Book your consultation today." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/pricing" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Pricing & Plans | Natural Look Hair Replacement" />
        <meta property="og:description" content="Transparent pricing for custom hair systems, maintenance, and installation. Book your consultation today." />
        <meta property="og:url" content="https://naturallookhayward.com/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing & Plans | Natural Look Hair Replacement" />
        <meta name="twitter:description" content="Transparent pricing for custom hair systems, maintenance, and installation." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
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
