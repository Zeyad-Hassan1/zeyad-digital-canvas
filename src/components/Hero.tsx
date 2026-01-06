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

        {/* CTA */}
        <div className="mt-12 animate-fade-in-up-delay-3">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover-lift hover-glow"
          >
            Get In Touch
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
