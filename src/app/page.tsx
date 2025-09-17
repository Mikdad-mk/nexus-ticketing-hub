import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { TicketTable } from "@/components/dashboard/TicketTable";
import { 
  Ticket, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  Calendar
} from "lucide-react";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Welcome Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👋</span>
            <h1 className="text-2xl font-bold text-foreground">Hello, Achmad Hakim</h1>
          </div>
          <p className="text-muted-foreground">
            Here are the latest insights from your customer interactions.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Current Tickets"
            value="3,484"
            change={71}
            changeType="positive"
            icon={<Ticket className="h-4 w-4" />}
          />
          <MetricCard
            title="Daily Avg. Resolution"
            value="486"
            change={2}
            changeType="positive"
            icon={<Clock className="h-4 w-4" />}
          />
          <MetricCard
            title="SLA Compliance Rate"
            value="92%"
            change={-13}
            changeType="negative"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <MetricCard
            title="Customer Satisfaction"
            value="4.8"
            change={8}
            changeType="positive"
            icon={<MessageSquare className="h-4 w-4" />}
          />
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartCard />
          <ActivityFeed />
        </div>

        {/* Tickets Table */}
        <div className="grid grid-cols-1">
          <TicketTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
