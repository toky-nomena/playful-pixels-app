import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Navbar() {
  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 ml-[200px]">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-primary">io.net</div>
        </Link>
        <div className="flex-1 px-4">
          <Input 
            type="search" 
            placeholder="Search..." 
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select profile" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john">John Doe</SelectItem>
              <SelectItem value="jane">Jane Smith</SelectItem>
              <SelectItem value="bob">Bob Johnson</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}