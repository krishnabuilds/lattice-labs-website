import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-16 max-w-2xl text-center"
  >
    {label && (
      <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-medium text-primary">
        {label}
      </span>
    )}
    <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
