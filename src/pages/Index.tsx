import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Users, Lightbulb, TrendingUp, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Code, title: "Technology Solutions", description: "We build digital products that solve real problems, using modern stacks and proven engineering practices." },
  { icon: Users, title: "People-First Culture", description: "Our teams grow together. We invest in mentorship, collaboration, and structured career development." },
  { icon: Lightbulb, title: "Innovation Lab", description: "Experimentation drives progress. We encourage bold ideas and give them room to become reality." },
  { icon: TrendingUp, title: "Career Growth", description: "From early-career to leadership—clear paths, real responsibilities, and tangible impact." },
  { icon: Shield, title: "Trust & Quality", description: "Every product we ship meets the highest standards of reliability, security, and performance." },
  { icon: Globe, title: "Global Perspective", description: "We work across industries and geographies, bringing diverse thinking to every engagement." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "120+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Industries Served" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative flex min-h-[90vh] items-center section-padding pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Technology · People · Impact
          </span>
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Building the future,{" "}
            <span className="text-gradient">one line at a time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Lattice Labs delivers technology solutions that create real-world impact—while nurturing the next generation of professionals through hands-on experience and mentorship.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/careers">
                Explore Careers <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border/50 bg-card/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center border-r border-border/50 px-6 py-10 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
          >
            <span className="text-3xl font-bold text-gradient">{stat.value}</span>
            <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="What We Do"
          title="Technology that drives progress"
          description="We combine engineering excellence with a culture of continuous learning to deliver solutions that matter."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card group p-6 transition-all hover:border-primary/20"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card relative overflow-hidden p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-primary/[0.03]" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Ready to build something meaningful?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Whether you're looking for technology solutions or your next career move, we'd love to connect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/careers">View Open Roles</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
