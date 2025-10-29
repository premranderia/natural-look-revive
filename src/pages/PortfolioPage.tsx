import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Real Client Results | Natural Look Hayward</title>
        <meta name="description" content="View before-and-after photos from real clients who regained confidence with our natural hair systems." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/portfolio" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Real Client Results | Natural Look Hayward" />
        <meta property="og:description" content="View before-and-after photos from real clients who regained confidence with our natural hair systems." />
        <meta property="og:url" content="https://naturallookhayward.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Client Results | Natural Look Hayward" />
        <meta name="twitter:description" content="View before-and-after photos from real clients who regained confidence with our natural hair systems." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Portfolio />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
