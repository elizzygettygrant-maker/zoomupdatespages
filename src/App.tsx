import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import OutdatedZoom from "./pages/OutdatedZoom.tsx";
import NotFound from "./pages/NotFound.tsx";
import WindowsOnlyGate from "./components/WindowsOnlyGate";
import { isWindows, logActivity } from "@/lib/activity";

const queryClient = new QueryClient();

const App = () => {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const ok = isWindows();
    setAllowed(ok);
    logActivity(ok ? "visit" : "blocked_non_windows");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/outdated" element={<OutdatedZoom />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {allowed === false && <WindowsOnlyGate />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
