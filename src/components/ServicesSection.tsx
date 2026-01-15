import { Code, Lightbulb, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
  },
  {
    icon: Lightbulb,
    title: "Digital Innovation",
    description: "Transform your business with cutting-edge digital strategies and emerging technologies.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Expert guidance to optimize your technology infrastructure and drive operational excellence.",
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture and migration services for modern, agile businesses.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We deliver comprehensive technology solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay-${Math.min(index + 1, 3)}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
