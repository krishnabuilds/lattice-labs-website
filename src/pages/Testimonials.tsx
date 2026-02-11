import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Software Engineer, now at a Fortune 500",
    text: "Lattice Labs gave me what college couldn't—real project experience with real stakes. The mentorship I received here directly shaped my technical confidence and career trajectory.",
  },
  {
    name: "Priya Nair",
    role: "Product Designer",
    text: "The work culture here is genuinely collaborative. I wasn't treated as an intern—I was part of the team, contributing to design decisions that impacted actual users.",
  },
  {
    name: "Daniel Osei",
    role: "Data Analyst",
    text: "Transitioning into tech felt daunting until I joined Lattice Labs. The structured learning paths and supportive leadership helped me build skills I use every single day.",
  },
  {
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    text: "What sets Lattice Labs apart is the balance between autonomy and guidance. I owned features end-to-end while having senior engineers available whenever I needed direction.",
  },
  {
    name: "Rahul Sharma",
    role: "Cloud Infrastructure Engineer",
    text: "The exposure to enterprise-grade systems and DevOps practices here was invaluable. I went from scripting basics to managing production deployments in months.",
  },
  {
    name: "Amara Johnson",
    role: "QA Engineer",
    text: "Lattice Labs invests in its people. The certification support, weekly learning sessions, and genuine care for professional growth make it unlike any place I've worked.",
  },
];

const Testimonials = () => (
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
            Testimonials
          </span>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Hear from our <span className="text-gradient">people.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Real stories from professionals who grew their careers at Lattice Labs.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card flex flex-col p-6 transition-all hover:border-primary/20"
            >
              <Quote className="mb-4 h-5 w-5 text-primary/40" />
              <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
