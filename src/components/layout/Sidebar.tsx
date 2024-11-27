import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Home,
  Users,
  Server,
  FileCode,
  Settings,
  LifeBuoy,
  Package,
  UserCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ className, collapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("pb-12 w-64", collapsed && "w-16", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 hidden md:flex"
        onClick={onToggle}
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mb-2 flex h-16 items-center px-4">
            <Link to="/" className="flex items-center">
              <h2 className={cn("text-lg font-semibold tracking-tight", 
                collapsed && "hidden")}>io.net</h2>
              {collapsed && <Server className="h-6 w-6" />}
            </Link>
          </div>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className={cn("w-full justify-start", collapsed && "justify-center")}
              onClick={() => setOpen(true)}
            >
              <UserCircle className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Profile</span>}
            </Button>
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                className={cn("w-full justify-start", collapsed && "justify-center")}
              >
                <Home className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Home</span>}
              </Button>
            </Link>
            <Link to="/clusters">
              <Button
                variant={location.pathname === "/clusters" ? "secondary" : "ghost"}
                className={cn("w-full justify-start", collapsed && "justify-center")}
              >
                <Server className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Clusters</span>}
              </Button>
            </Link>
            <Link to="/people">
              <Button
                variant={location.pathname === "/people" ? "secondary" : "ghost"}
                className={cn("w-full justify-start", collapsed && "justify-center")}
              >
                <Users className="h-4 w-4" />
                {!collapsed && <span className="ml-2">People</span>}
              </Button>
            </Link>
            <Link to="/code">
              <Button
                variant={location.pathname === "/code" ? "secondary" : "ghost"}
                className={cn("w-full justify-start", collapsed && "justify-center")}
              >
                <FileCode className="h-4 w-4" />
                {!collapsed && <span className="ml-2">Code</span>}
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className={cn("mb-2 px-4 text-lg font-semibold tracking-tight",
            collapsed && "hidden")}>
            Overview
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className={cn("w-full justify-start", 
              collapsed && "justify-center")}>
              <LayoutDashboard className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Dashboard</span>}
            </Button>
            <Button variant="ghost" className={cn("w-full justify-start",
              collapsed && "justify-center")}>
              <Package className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Projects</span>}
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className={cn("mb-2 px-4 text-lg font-semibold tracking-tight",
            collapsed && "hidden")}>
            Settings
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className={cn("w-full justify-start",
              collapsed && "justify-center")}>
              <Settings className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Settings</span>}
            </Button>
            <Button variant="ghost" className={cn("w-full justify-start",
              collapsed && "justify-center")}>
              <LifeBuoy className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Support</span>}
            </Button>
          </div>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search</CommandItem>
            <CommandItem>Notifications</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}