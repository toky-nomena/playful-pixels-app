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

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <div className="border-t">
                <div className="bg-background">
                  <div className="grid lg:grid-cols-5">
                    <Sidebar 
                      className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`} 
                      onToggle={() => setSidebarOpen(!sidebarOpen)}
                    />
                    <div className={`col-span-5 ${sidebarOpen ? 'lg:col-span-4' : 'lg:col-span-5'} lg:border-l`}>
                      <div className="flex justify-between items-center p-4 border-b">
                        <button
                          onClick={() => setSidebarOpen(!sidebarOpen)}
                          className="p-2 hover:bg-accent rounded-md lg:hidden"
                        >
                          ☰
                        </button>
                        <ThemeSwitcher />
                      </div>
                      <div className="h-full px-4 py-6 lg:px-8">
                        <Toaster />
                        <Sonner />
                        <Routes>
                          <Route path="/" element={<Index />} />
                          <Route path="/people" element={<People />} />
                          <Route path="/clusters" element={<Clusters />} />
                          <Route path="/code" element={<Code />} />
                        </Routes>
                      </div>
                    </div>
                  </div>
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