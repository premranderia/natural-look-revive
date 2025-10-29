import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Book a Consultation at Natural Look</title>
        <meta name="description" content="Schedule your free consultation or request a phone call. Serving Hayward and the Bay Area since 2005." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/contact" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us | Book a Consultation at Natural Look" />
        <meta property="og:description" content="Schedule your free consultation or request a phone call. Serving Hayward and the Bay Area since 2005." />
        <meta property="og:url" content="https://naturallookhayward.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Book a Consultation at Natural Look" />
        <meta name="twitter:description" content="Schedule your free consultation or request a phone call. Serving Hayward and the Bay Area since 2005." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
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
