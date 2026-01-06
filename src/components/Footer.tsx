const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'<'}</span>
            Zeyad Hassan
            <span className="text-primary">{' />'}</span>
            <span className="ml-2">© {currentYear}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            Built with <span className="text-primary">❤</span> & Laravel
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
