import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { Input } from "@/components/ui/input";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-card fixed top-0 right-0 left-0 z-50">
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
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setOpen(true)}
          >
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <ThemeSwitcher />
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search profiles..." />
        <CommandList>
          <CommandEmpty>No profiles found.</CommandEmpty>
          <CommandGroup heading="Profiles">
            <CommandItem onSelect={() => {
              console.log("Selected John Doe");
              setOpen(false);
            }}>
              John Doe
            </CommandItem>
            <CommandItem onSelect={() => {
              console.log("Selected Jane Smith");
              setOpen(false);
            }}>
              Jane Smith
            </CommandItem>
            <CommandItem onSelect={() => {
              console.log("Selected Bob Johnson");
              setOpen(false);
            }}>
              Bob Johnson
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </nav>
  );
}