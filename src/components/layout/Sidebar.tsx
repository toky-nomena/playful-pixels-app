import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Users, Server, FileCode } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <div className={cn("pb-12 h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link to="/" className="flex items-center pl-2 mb-8">
            <h2 className="text-lg font-semibold tracking-tight text-primary">
              io.net
            </h2>
          </Link>
          <div className="space-y-1">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/clusters">
              <Button
                variant={location.pathname === "/clusters" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Server className="mr-2 h-4 w-4" />
                Clusters
              </Button>
            </Link>
            <Link to="/people">
              <Button
                variant={location.pathname === "/people" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Users className="mr-2 h-4 w-4" />
                People
              </Button>
            </Link>
            <Link to="/code">
              <Button
                variant={location.pathname === "/code" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <FileCode className="mr-2 h-4 w-4" />
                Code
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}