import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Process | Natural Look Hair Replacement</title>
        <meta name="description" content="Learn how Natural Look creates your perfect custom hair system. From consultation to installation, discover our 3-step professional process." />
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
