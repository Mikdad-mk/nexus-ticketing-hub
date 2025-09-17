import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SatisfactionPage = () => (
  <DashboardLayout>
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Customer Satisfaction</h1>
      <Card><CardContent className="p-6"><p>CSAT and NPS analytics</p></CardContent></Card>
    </div>
  </DashboardLayout>
);

export default SatisfactionPage;