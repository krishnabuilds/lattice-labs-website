import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Purpose-Driven", description: "Every project we take on must create tangible value for people and organizations." },
  { icon: Eye, title: "Transparency", description: "Open communication, honest feedback, and clear expectations drive our work culture." },
  { icon: Heart, title: "People First", description: "We invest in growth—ours, our clients', and the professionals who work alongside us." },
  { icon: Zap, title: "Relentless Quality", description: "Good enough isn't. We hold ourselves to the highest standards in everything we deliver." },
];

const About = () => (
  <div className="min-h-screen pt-16">
    {/* Hero */}
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Technology with <span className="text-gradient">purpose.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Lattice Labs was founded on a simple belief: the best technology is built by empowered people. We combine deep technical expertise with a commitment to developing talent that shapes the future.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Our Mission</h3>
          <p className="text-lg text-foreground leading-relaxed">
            To deliver impactful technology solutions while creating an environment where aspiring professionals gain real-world experience, mentorship, and the confidence to lead.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8"
        >
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Our Vision</h3>
          <p className="text-lg text-foreground leading-relaxed">
            To be the bridge between academic learning and industry excellence—a company where cutting-edge work and human development are one and the same.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Our Values"
          title="What guides every decision"
          description="These principles aren't aspirational—they're operational. They shape how we hire, build, and deliver."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card group p-6 text-center transition-all hover:border-primary/20"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
