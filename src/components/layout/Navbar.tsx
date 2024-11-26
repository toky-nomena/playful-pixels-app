import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Users, Server, Settings, FileCode } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";

export function Navbar() {
  return (
    <nav className="border-b bg-card">
      <div className="flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-primary">io.net</div>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/clusters">
              <Server className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/people">
              <Users className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/code">
              <FileCode className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}