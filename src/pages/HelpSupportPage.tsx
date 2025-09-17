import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

const HelpSupportPage = () => (
  <DashboardLayout>
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Help & Support</h1>
      <Card><CardContent className="p-6"><p>Documentation and support resources</p></CardContent></Card>
    </div>
  </DashboardLayout>
);

export default HelpSupportPage;