import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

const FeedbackPage = () => (
  <DashboardLayout>
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-bold mb-4">Customer Feedback</h1>
      <Card><CardContent className="p-6"><p>Customer feedback and suggestions</p></CardContent></Card>
    </div>
  </DashboardLayout>
);

export default FeedbackPage;