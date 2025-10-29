import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Process | Natural Look Hair Replacement Studio</title>
        <meta name="description" content="See how we craft your perfect hair system in three steps — consultation, custom design, and expert installation." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/process" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Our Process | Natural Look Hair Replacement Studio" />
        <meta property="og:description" content="See how we craft your perfect hair system in three steps — consultation, custom design, and expert installation." />
        <meta property="og:url" content="https://naturallookhayward.com/process" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Process | Natural Look Hair Replacement Studio" />
        <meta name="twitter:description" content="See how we craft your perfect hair system in three steps — consultation, custom design, and expert installation." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Process />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProcessPage;
