import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Natural Look Hayward | Custom Hair Replacement & Restoration</title>
        <meta name="description" content="Discover Natural Look — Hayward's trusted non-surgical hair replacement studio for men and women. Personalized, natural results for every client." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://naturallookhayward.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Natural Look Hayward | Custom Hair Replacement & Restoration" />
        <meta property="og:description" content="Discover Natural Look — Hayward's trusted non-surgical hair replacement studio for men and women. Personalized, natural results for every client." />
        <meta property="og:url" content="https://naturallookhayward.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Natural Look Hayward | Custom Hair Replacement & Restoration" />
        <meta name="twitter:description" content="Discover Natural Look — Hayward's trusted non-surgical hair replacement studio for men and women." />
        <meta name="twitter:image" content="https://naturallookhayward.com/og-image.jpg" />
        
        {/* Structured Data - LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Natural Look",
            "description": "Premium non-surgical hair replacement studio in Hayward, CA",
            "founder": {
              "@type": "Person",
              "name": "Loly Cronin"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hayward",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "url": "https://naturallookhayward.com",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "sameAs": []
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Process />
        <Footer />
      </div>
    </>
  );
};

export default Index;
