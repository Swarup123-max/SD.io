import { Button } from "@/components/Button";
import Roboimage from "@/components/Roboimage.jsx";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Express",
  "Python",
  "Go",
  "REST APIs",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQL",
  "Microservices",
  "Docker",
  "AWS",
  "Git",
  "React",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 lg:pt-24 pb-4">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Background Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center my-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          
          {/* Left Column */}
          <div className="space-y-2.5">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full glass text-[11px] text-primary">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Full-Stack & Backend Engineer
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                Architecting <span className="text-primary glow-text">backend</span>
                <br />
                systems with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-xs md:text-xs lg:text-sm text-muted-foreground max-w-md animate-fade-in animation-delay-200 leading-relaxed">
                Hi, I'm Swarup — a Computer Science Engineer and full-stack web developer. I design and build scalable backend architectures, high-performance APIs, microservices, and modern web applications across multiple tech stacks.
              </p>
            </div>

            {/* Equal sized CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 animate-fade-in animation-delay-300 pt-1">
              <a href="#contact">
                <Button size="sm" className="h-8 text-xs px-3.5">
                  Contact Me <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
                </Button>
              </a>
              
              <a href="/cv.pdf" download className="inline-block">
                <AnimatedBorderButton className="h-8 text-xs px-3.5 py-0 flex items-center justify-center">
                  <Download className="w-3.5 h-3.5 mr-1" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 animate-fade-in animation-delay-400 pt-0.5">
              <span className="text-[11px] text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-1 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-[180px] sm:max-w-[210px] lg:max-w-[240px] mx-auto">
              <div
                className="absolute inset-0 
                rounded-2xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-md animate-pulse"
              />
              <div className="relative glass rounded-xl p-1 glow-border">
                <img
                  src="/projects/profile-photo.png"
                  alt="Swarup"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />

                <div className="absolute bottom-2 right-2 glass rounded-md px-2 py-1 animate-float z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-medium">
                      Available for hire
                    </span>
                  </div>
                </div>

                <div className="absolute top-2 left-2 glass rounded-md px-2 py-1 animate-float animation-delay-500 z-10">
                  <div className="text-xs font-bold text-primary">Full-Stack</div>
                  <div className="text-[9px] text-muted-foreground">
                    Architect
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-4 animate-fade-in animation-delay-600">
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground/80 mb-1 text-center">
            Technologies & Tools
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-10 md:w-16
              bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-10 md:w-16
              bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-2.5 py-0.5">
                  <span className="text-xs font-medium text-muted-foreground/60 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative pt-1 text-center animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[8px] uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
};