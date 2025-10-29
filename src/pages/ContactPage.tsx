import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Book a Consultation | Natural Look</title>
        <meta name="description" content="Contact Natural Look in San Francisco to book your hair replacement consultation. Call us or fill out our contact form to get started today." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
