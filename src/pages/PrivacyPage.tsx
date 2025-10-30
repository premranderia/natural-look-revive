import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Natural Look Hayward</title>
        <meta name="description" content="Privacy policy for Natural Look. Learn how we protect and handle your personal information at our Hayward hair replacement studio." />
        <link rel="canonical" href="https://naturallookhayward.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Natural Look Hayward" />
        <meta property="og:description" content="Privacy policy for Natural Look hair replacement services in Hayward, CA." />
        <meta property="og:url" content="https://naturallookhayward.com/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-custom px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
            
            <div className="max-w-4xl mx-auto space-y-8 text-foreground/80">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Name, email address, phone number</li>
                  <li>Appointment preferences and service history</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Photos and measurements for custom hair system creation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process appointments and custom orders</li>
                  <li>Send appointment reminders and service updates</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Create custom hair systems tailored to your specifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information Sharing</h2>
                <p>We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>With hair system manufacturers to fulfill custom orders</li>
                  <li>With service providers who assist in our business operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Photography and Portfolio</h2>
                <p>Before-and-after photos are taken only with your written consent. You have the right to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Decline to be photographed</li>
                  <li>Request that your photos remain confidential</li>
                  <li>Request anonymity if photos are used publicly</li>
                  <li>Request removal of your photos from our portfolio at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to provide services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookies and Tracking</h2>
                <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to Privacy Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website.</p>
              </section>

              <section className="pt-8 border-t border-border">
                <p className="text-sm">Last updated: January 2025</p>
                <p className="text-sm mt-4">For privacy-related questions or to exercise your rights, please contact us at naturallookinc@gmail.com or (510) 784-9999.</p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
