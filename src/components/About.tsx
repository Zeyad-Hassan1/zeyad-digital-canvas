const About = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient">About</span> Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="card-gradient border border-border rounded-2xl p-8 hover-lift">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center animate-pulse-glow">
              <span className="text-5xl font-bold text-primary">ZH</span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Zeyad Hassan</h3>
              <p className="text-primary font-mono mb-4">Backend Developer</p>
              
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>21 Years Old</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{'// '}</span>developer.bio
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                I am a passionate <span className="text-primary font-semibold">Backend Developer</span> specializing 
                in building robust and scalable web applications using <span className="text-primary font-semibold">Laravel</span>.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{'// '}</span>developer.focus
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                My expertise lies in creating clean, efficient, and maintainable code. I love solving 
                complex problems and building APIs that power modern web applications.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">{'// '}</span>developer.philosophy
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                I believe in writing code that not only works but is also readable, testable, and 
                follows best practices. Clean architecture is my passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
