import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto px-4 bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle*/}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* NavBar */}
    
        {/* Main Content */}
    
        {/* Footer */}
    </div>
  );
}
