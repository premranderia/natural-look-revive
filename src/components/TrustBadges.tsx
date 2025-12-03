import { motion } from "framer-motion";
import { Shield, Award, Heart, Clock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Clock,
      title: "35+ Years Established",
      description: "Serving Hayward since 1988",
    },
    {
      icon: Shield,
      title: "Licensed Professionals",
      description: "Certified hair specialists",
    },
    {
      icon: Heart,
      title: "Client Satisfaction",
      description: "100% satisfaction guarantee",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handcrafted hair systems",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover-shadow h-full">
                  <div className="flex justify-center mb-3">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-full blur-lg"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
