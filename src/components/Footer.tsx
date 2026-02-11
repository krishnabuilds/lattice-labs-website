import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">L</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Lattice Labs</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Building technology that matters. Empowering the next generation of professionals.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
            <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <span className="text-sm text-muted-foreground">hello@latticelabs.com</span>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
            <span className="text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-border/50 pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lattice Labs. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
