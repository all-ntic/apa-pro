import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "btn-hero text-white font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300",
      secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40 font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300",
      ghost: "text-white hover:bg-white/10 font-medium px-6 py-3 rounded-lg transition-all duration-300",
    };

    return (
      <Button
        className={cn(variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

HeroButton.displayName = "HeroButton";

export { HeroButton };