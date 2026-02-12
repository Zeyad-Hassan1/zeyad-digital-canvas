const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-gradient">Get In</span> Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-12">
            Interested in working together? Feel free to reach out. 
            I am always open to discussing new projects and opportunities.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <a 
              href="tel:+201125828181"
              className="card-gradient border border-border rounded-2xl p-8 hover-lift hover-glow group block"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
              <p className="font-mono text-primary text-lg">+20 112 582 8181</p>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:zeyadh556@gmail.com"
              className="card-gradient border border-border rounded-2xl p-8 hover-lift hover-glow group block"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="font-mono text-primary text-lg">Contact Me</p>
            </a>

            {/* Location Card */}
            <div className="card-gradient border border-border rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
              <p className="font-mono text-primary text-lg">Cairo, Egypt</p>
            </div>

            {/* Availability Card */}
            <div className="card-gradient border border-border rounded-2xl p-8 hover-lift">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Availability</h3>
              <p className="font-mono text-primary text-lg">Open to Opportunities</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/201125828181"
              className="inline-block bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg hover-lift hover-glow text-lg"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
