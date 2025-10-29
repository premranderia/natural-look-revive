import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Meet Loly Cronin | Natural Look</title>
        <meta name="description" content="Meet Loly Cronin, hair replacement specialist with over 35 years of experience in San Francisco. Learn about Natural Look's commitment to restoring confidence." />
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
