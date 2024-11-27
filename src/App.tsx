import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "./components/layout/Sidebar";
import Index from "./pages/Index";
import People from "./pages/People";
import Clusters from "./pages/Clusters";
import Code from "./pages/Code";
import { useState } from "react";
import { ThemeSwitcher } from "./components/theme/ThemeSwitcher";
import { Button } from "./components/ui/button";
import { Menu } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <div className="flex min-h-screen">
                <Sidebar 
                  className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                    transition-transform duration-200 ease-in-out
                    fixed inset-y-0 z-50 md:relative md:translate-x-0`}
                  collapsed={!sidebarOpen}
                  onToggle={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="flex-1">
                  <div className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                    <div className="flex-1" />
                    <ThemeSwitcher />
                  </div>
                  <main className="flex-1 space-y-4 p-4 md:p-8">
                    <Toaster />
                    <Sonner />
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/people" element={<People />} />
                      <Route path="/clusters" element={<Clusters />} />
                      <Route path="/code" element={<Code />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;