import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/your-username", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              SD<span className="text-primary">.</span>
            </a>
            <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-1 sm:gap-2 mt-2 text-sm text-muted-foreground">
              <span>© {currentYear} Swarup Das. All rights reserved.</span>
              <span className="hidden sm:inline text-muted-foreground/40">•</span>
              <span className="flex items-center justify-center gap-1">
                Built with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" />
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};