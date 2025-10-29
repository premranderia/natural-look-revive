import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials | Natural Look Reviews</title>
        <meta name="description" content="Read what our satisfied clients say about Natural Look hair replacement services. Real reviews from real people who trust us with their confidence." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;
