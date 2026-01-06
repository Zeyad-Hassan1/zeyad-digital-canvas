import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  return (
    <a
      href="#top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-md flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(165_60%_42%/0.5)] group"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
    </a>
  );
};

export default BackToTop;
