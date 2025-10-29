import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Natural Look | Founded by Loly Cronin</title>
        <meta name="description" content="Learn about Loly Cronin, founder of Natural Look, with over 30 years of experience in the hair replacement industry." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Natural Look | Founded by Loly Cronin" />
        <meta property="og:description" content="Learn about Loly Cronin, founder of Natural Look, with over 30 years of experience in the hair replacement industry." />
        <meta property="og:url" content="https://naturallookhayward.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Natural Look | Founded by Loly Cronin" />
        <meta name="twitter:description" content="Learn about Loly Cronin, founder of Natural Look, with over 30 years of experience." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <AboutUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
