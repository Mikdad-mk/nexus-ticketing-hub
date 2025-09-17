import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

const ReportsPage = () => (
  <DashboardLayout>
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <Card><CardContent className="p-6"><p>Custom reports and data exports</p></CardContent></Card>
    </div>
  </DashboardLayout>
);

export default ReportsPage;