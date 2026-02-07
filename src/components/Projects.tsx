const projects = [
  {
  title: "MiniShop",
  description: "A Laravel-based mini e-commerce application with product management, cart functionality, and basic order flow.",
  technologies: ["Laravel", "MySQL", "Blade", "Bootstrap"],
  features: ["Product Management", "Shopping Cart", "Order Flow", "MVC Architecture"],
  status: "Completed",
},
{
  title: "Todo App",
  description: "A task management application built with Laravel that allows users to create, update, and manage daily tasks efficiently.",
  technologies: ["Laravel", "MySQL", "Blade"],
  features: ["CRUD Operations", "Task Status Management", "Clean UI", "MVC Structure"],
  status: "Completed",
},
{
  title: "Blog Platform",
  description: "A Laravel blog system with post management, user-friendly interface, and structured content handling.",
  technologies: ["Laravel", "MySQL", "Blade"],
  features: ["Post Management", "CRUD System", "MVC Pattern", "Responsive Layout"],
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
