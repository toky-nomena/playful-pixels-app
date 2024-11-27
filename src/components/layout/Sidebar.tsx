import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Users, Server, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <div className="h-screen w-[200px] border-r bg-card fixed left-0 top-0 pt-16">
      <div className="flex flex-col space-y-2 p-4">
        <Link to="/" className="w-full">
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <Home className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
        <Link to="/clusters" className="w-full">
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <Server className="mr-2 h-5 w-5" />
            Clusters
          </Button>
        </Link>
        <Link to="/people" className="w-full">
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <Users className="mr-2 h-5 w-5" />
            People
          </Button>
        </Link>
        <Link to="/code" className="w-full">
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <FileCode className="mr-2 h-5 w-5" />
            Code
          </Button>
        </Link>
      </div>
    </div>
  );
}