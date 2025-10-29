import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Results | Natural Look Hair Systems</title>
        <meta name="description" content="See real before-and-after transformations from Natural Look clients. Over 35 years of experience creating natural, undetectable hair systems." />
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
