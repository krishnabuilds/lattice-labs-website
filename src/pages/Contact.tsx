import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
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
              Contact
            </span>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Let's <span className="text-gradient">connect.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Have a question, a project idea, or interested in joining us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card space-y-6 p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
                  <Input required placeholder="Your name" className="bg-background/50 border-border/50" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <Input required type="email" placeholder="you@example.com" className="bg-background/50 border-border/50" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Subject</label>
                <Input required placeholder="How can we help?" className="bg-background/50 border-border/50" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <Textarea required rows={5} placeholder="Tell us more..." className="bg-background/50 border-border/50 resize-none" />
              </div>
              <Button variant="hero" type="submit" disabled={loading} className="w-full sm:w-auto">
                {loading ? "Sending..." : "Send Message"} <Send className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">hello@latticelabs.com</p>
            </div>
            <div className="glass-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">Remote-first, with teams across the globe.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
