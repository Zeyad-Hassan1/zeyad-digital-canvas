const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center px-6">
        {/* Terminal-like header */}
        <div className="inline-block mb-8 animate-fade-in-up">
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-destructive" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> whoami
            </p>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up-delay-1">
          <span className="text-foreground">Zeyad</span>{' '}
          <span className="text-gradient">Hassan</span>
        </h1>

        {/* Title */}
        <div className="animate-fade-in-up-delay-2">
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-2">
            Backend Developer
          </p>
          <p className="font-mono text-primary text-lg md:text-xl">
            Laravel Specialist
          </p>
        </div>

        {/* Location */}
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground animate-fade-in-up-delay-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Cairo, Egypt</span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          {/* Glass Button - View Projects */}
          <a 
            href="#projects" 
            className="group relative px-8 py-4 rounded-xl font-semibold text-foreground border border-primary/30 backdrop-blur-md bg-primary/10 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(165_60%_42%/0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Projects
            </span>
          </a>

          {/* Solid Button - Get in Touch */}
          <a 
            href="#contact" 
            className="group relative px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_hsl(165_60%_42%/0.4)] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
