import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import Index from "./pages/Index";
import People from "./pages/People";
import Clusters from "./pages/Clusters";
import Code from "./pages/Code";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navbar />
            <Sidebar />
            <main className="ml-[200px] p-8">
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;