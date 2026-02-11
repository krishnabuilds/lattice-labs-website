import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const tracks = [
  {
    icon: GraduationCap,
    title: "Students & Graduates",
    description: "Gain structured, hands-on experience on real projects. Work alongside senior engineers and build a portfolio that matters.",
    roles: ["Software Engineering Associate", "Data Analytics Intern", "Product Design Fellow"],
  },
  {
    icon: Briefcase,
    title: "Early-Career Professionals",
    description: "Accelerate your trajectory with meaningful responsibilities, technical mentorship, and cross-functional exposure.",
    roles: ["Junior Full-Stack Developer", "QA Engineer", "Cloud Infrastructure Associate"],
  },
  {
    icon: RefreshCw,
    title: "Career Transitioners",
    description: "Bringing experience from another field? We value diverse perspectives and provide the support to help you thrive in tech.",
    roles: ["Technical Project Coordinator", "Business Analyst", "Solutions Consultant"],
  },
];

const perks = [
  "Mentorship from senior technologists",
  "Work on real client projects",
  "Structured learning pathways",
  "Flexible work arrangements",
  "Professional certification support",
  "Collaborative, inclusive culture",
];

const Careers = () => (
  <div className="min-h-screen pt-16">
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Careers
          </span>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Grow with <span className="text-gradient">real work.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            At Lattice Labs, careers are built through contribution. We offer structured opportunities for people at every stage—where your work has impact from day one.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Tracks */}
    <section className="section-padding border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Career Tracks"
          title="Find your path"
          description="We've designed career tracks for different stages—each with clear growth, real responsibility, and support."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card flex flex-col p-8 transition-all hover:border-primary/20"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <track.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{track.title}</h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">{track.description}</p>
              <div className="mt-auto space-y-2 border-t border-border/50 pt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Sample Roles</p>
                {track.roles.map((role) => (
                  <div key={role} className="flex items-center gap-2 text-sm text-foreground">
                    <ArrowRight className="h-3 w-3 text-primary" />
                    {role}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Perks */}
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Why Lattice Labs"
          title="What you'll get"
          description="Beyond a role—an environment designed for professional acceleration."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, i) => (
            <motion.div
              key={perk}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 px-5 py-4"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground">{perk}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Apply Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
