import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SimpleTypewriter from "./ui/SimpleTypewriter";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a hair system last?",
      answer: "With proper care and maintenance, a high-quality hair system typically lasts 6-12 months. Regular maintenance appointments every 4-6 weeks help ensure your system looks natural and lasts as long as possible.",
    },
    {
      question: "Will people be able to tell I'm wearing a hair system?",
      answer: "No. Our custom hair systems are designed to be completely undetectable. We match your natural hair color, texture, and density, and use advanced attachment methods that create a seamless, natural-looking hairline.",
    },
    {
      question: "Can I swim, exercise, and shower with a hair system?",
      answer: "Yes! Once properly attached, you can live your life normally. You can swim, exercise, shower, and even sleep with your hair system. We use secure attachment methods that are waterproof and sweat-resistant.",
    },
    {
      question: "How much does a custom hair system cost?",
      answer: "Investment varies based on your specific needs, the type of system, and maintenance requirements. During your free consultation, we'll provide a detailed quote tailored to your situation. We offer financing options to make the investment manageable.",
    },
    {
      question: "What's the process for getting started?",
      answer: "Simply book a free consultation. We'll discuss your goals, evaluate your hair loss, take precise measurements, and design a custom solution. Once your system is crafted (typically 4-6 weeks), you'll return for styling and installation.",
    },
    {
      question: "Is the hair system comfortable to wear?",
      answer: "Absolutely. Modern hair systems are lightweight, breathable, and designed for all-day comfort. Most clients forget they're wearing one! The base materials we use are thin, flexible, and allow your scalp to breathe naturally.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <SimpleTypewriter text="Frequently Asked Questions" className="text-4xl md:text-5xl font-bold text-foreground mb-4" />
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contact us for a free consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
