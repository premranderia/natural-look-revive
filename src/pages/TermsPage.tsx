import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Natural Look Hayward</title>
        <meta name="description" content="Terms and conditions for Natural Look hair replacement services in Hayward, CA. Read our service policies and guidelines." />
        <link rel="canonical" href="https://naturallookhayward.com/terms" />
        <meta property="og:title" content="Terms & Conditions | Natural Look Hayward" />
        <meta property="og:description" content="Terms and conditions for Natural Look hair replacement services in Hayward, CA." />
        <meta property="og:url" content="https://naturallookhayward.com/terms" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-custom px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms & Conditions</h1>
            
            <div className="max-w-4xl mx-auto space-y-8 text-foreground/80">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Services</h2>
                <p>Natural Look provides custom hair replacement systems and related services. All services are provided by appointment only and are subject to availability.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Consultation</h2>
                <p>Initial consultations are complimentary and do not obligate you to purchase any services or products. During the consultation, we will assess your needs and recommend appropriate solutions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Custom Orders</h2>
                <p>Custom hair systems typically require 6-8 weeks for creation. A deposit of 50% is required when placing a custom order. The remaining balance is due upon delivery and installation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Cancellation Policy</h2>
                <p>Appointments must be cancelled at least 24 hours in advance. Custom orders cannot be cancelled once production has begun. Deposits are non-refundable after production starts.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Maintenance</h2>
                <p>Regular maintenance is recommended every 4-6 weeks to ensure optimal appearance and longevity of your hair system. Maintenance packages are available at discounted rates.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Product Warranty</h2>
                <p>Hair systems come with a manufacturer's warranty covering defects in materials and workmanship. Normal wear and tear, damage from improper care, or modifications made by third parties are not covered.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Returns & Exchanges</h2>
                <p>Due to the custom nature of our products, returns are not accepted. We work closely with each client to ensure satisfaction before finalizing orders.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Liability</h2>
                <p>Natural Look is not liable for any allergic reactions or skin sensitivities. Clients are encouraged to disclose any known sensitivities during consultation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Photography</h2>
                <p>We may request to photograph your results for portfolio purposes. Your consent is always obtained, and you may decline or request anonymity.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Changes to Terms</h2>
                <p>Natural Look reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
              </section>

              <section className="pt-8 border-t border-border">
                <p className="text-sm">Last updated: January 2025</p>
                <p className="text-sm mt-4">For questions regarding these terms, please contact us at naturallookinc@gmail.com or (510) 784-9999.</p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
