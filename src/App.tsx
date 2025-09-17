import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TicketsPage from "./pages/TicketsPage";
import SLARiskPage from "./pages/SLARiskPage";
import EscalationsPage from "./pages/EscalationsPage";
import ClientsPage from "./pages/ClientsPage";
import AgentsPage from "./pages/AgentsPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import IntegrationsPage from "./pages/IntegrationsPage";
import SLACompliancePage from "./pages/SLACompliancePage";
import SatisfactionPage from "./pages/SatisfactionPage";
import WorkloadAnalyticsPage from "./pages/WorkloadAnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import FeedbackPage from "./pages/FeedbackPage";
import HelpSupportPage from "./pages/HelpSupportPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/tickets/sla-risk" element={<SLARiskPage />} />
          <Route path="/tickets/escalations" element={<EscalationsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/knowledge" element={<KnowledgeBasePage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/analytics/sla" element={<SLACompliancePage />} />
          <Route path="/analytics/satisfaction" element={<SatisfactionPage />} />
          <Route path="/analytics/workload" element={<WorkloadAnalyticsPage />} />
          <Route path="/analytics/reports" element={<ReportsPage />} />
          <Route path="/support/feedback" element={<FeedbackPage />} />
          <Route path="/support/help" element={<HelpSupportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
