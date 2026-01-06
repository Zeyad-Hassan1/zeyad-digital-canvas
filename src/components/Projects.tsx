const projects = [
  {
    title: "E-Commerce API",
    description: "RESTful API for a complete e-commerce platform with authentication, product management, orders, and payment integration.",
    technologies: ["Laravel", "MySQL", "Redis", "Stripe API"],
    features: ["JWT Auth", "Role-based Access", "Payment Gateway", "Order Tracking"],
    status: "Completed",
  },
  {
    title: "Task Management System",
    description: "A robust task management backend with team collaboration features, real-time notifications, and advanced filtering.",
    technologies: ["Laravel", "PostgreSQL", "Pusher", "Laravel Echo"],
    features: ["Real-time Updates", "Team Workspaces", "File Attachments", "Activity Logs"],
    status: "Completed",
  },
  {
    title: "Booking & Reservation API",
    description: "Scalable booking system for hotels and restaurants with availability management and automated reminders.",
    technologies: ["Laravel", "MySQL", "Queue Jobs", "Twilio"],
    features: ["Calendar Integration", "SMS Notifications", "Multi-tenant", "Analytics"],
    status: "In Progress",
  },
  {
    title: "Blog & CMS Platform",
    description: "Content management system with multi-author support, SEO optimization, and media management.",
    technologies: ["Laravel", "MySQL", "Eloquent ORM", "Blade"],
    features: ["Rich Text Editor", "SEO Tools", "Media Library", "Analytics Dashboard"],
    status: "Completed",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient">My</span> Projects
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A selection of backend projects I have built using Laravel and modern technologies. 
          Each project demonstrates clean architecture, scalable design, and best practices.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group card-gradient border border-border rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    project.status === "Completed" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-accent/20 text-accent"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-border">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  <span className="text-primary">{'// '}</span>technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-secondary text-secondary-foreground text-xs font-mono px-3 py-1.5 rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  <span className="text-accent">{'// '}</span>features
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              </div>
            </article>
          ))}
        </div>

        {/* Code Block */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 text-sm font-mono text-muted-foreground">projects.php</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <p className="text-muted-foreground">{'<?php'}</p>
              <p className="mt-2">
                <span className="text-purple-400">namespace</span>{' '}
                <span className="text-foreground">App\Services;</span>
              </p>
              <p className="mt-4">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-yellow-400">ProjectService</span>
              </p>
              <p>{'{'}</p>
              <p className="ml-4">
                <span className="text-purple-400">public function</span>{' '}
                <span className="text-blue-400">getProjectPhilosophy</span>(): <span className="text-yellow-400">array</span>
              </p>
              <p className="ml-4">{'{'}</p>
              <p className="ml-8">
                <span className="text-purple-400">return</span> [
              </p>
              <p className="ml-12 text-primary">{'"Clean Architecture"'},</p>
              <p className="ml-12 text-primary">{'"SOLID Principles"'},</p>
              <p className="ml-12 text-primary">{'"Test-Driven Development"'},</p>
              <p className="ml-12 text-accent">{'"Scalable & Maintainable Code"'}</p>
              <p className="ml-8">];</p>
              <p className="ml-4">{'}'}</p>
              <p>{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
