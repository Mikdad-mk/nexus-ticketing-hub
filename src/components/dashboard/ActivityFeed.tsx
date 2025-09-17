import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Ticket, 
  UserPlus, 
  UserCheck, 
  AlertTriangle, 
  FileText, 
  Star,
  Search
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: "ticket_updated" | "client_added" | "agent_reassigned" | "sla_breach" | "knowledge_base" | "feedback";
  title: string;
  description: string;
  time: string;
  priority?: "high" | "medium" | "low";
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "ticket_updated",
    title: "Ticket Updated",
    description: "Ticket #2319 SLA updated",
    time: "11:20 AM",
  },
  {
    id: "2",
    type: "client_added",
    title: "New Client Added",
    description: "PT. Alpha Indonesia registered",
    time: "11:16 AM",
  },
  {
    id: "3",
    type: "agent_reassigned",
    title: "Agent Reassigned",
    description: "Ticket #2322 moved to Michael Wong",
    time: "11:00 AM",
  },
  {
    id: "4",
    type: "sla_breach",
    title: "SLA Breach Risk",
    description: "Ticket #2320 - Login Issue",
    time: "10:45 AM",
    priority: "high",
  },
  {
    id: "5",
    type: "knowledge_base",
    title: "Knowledge Base",
    description: "New article published: Login Troubleshooting",
    time: "10:30 AM",
  },
  {
    id: "6",
    type: "feedback",
    title: "Customer Feedback",
    description: "Great support response, thanks Sarah!",
    time: "10:30 AM",
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "ticket_updated":
      return <Ticket className="h-4 w-4 text-primary" />;
    case "client_added":
      return <UserPlus className="h-4 w-4 text-success" />;
    case "agent_reassigned":
      return <UserCheck className="h-4 w-4 text-chart-5" />;
    case "sla_breach":
      return <AlertTriangle className="h-4 w-4 text-warning" />;
    case "knowledge_base":
      return <FileText className="h-4 w-4 text-chart-2" />;
    case "feedback":
      return <Star className="h-4 w-4 text-warning" />;
    default:
      return <Ticket className="h-4 w-4" />;
  }
};

export function ActivityFeed() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Latest Updates</CardTitle>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              Today
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-2">
              Yesterday
            </Button>
            <Button variant="outline" size="sm" className="h-8 px-2">
              This week
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search activities"
            className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          8 new activities today
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 group">
            <div className="mt-0.5">{getActivityIcon(activity.type)}</div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
              {activity.priority && (
                <Badge
                  variant={activity.priority === "high" ? "destructive" : "secondary"}
                  className="h-5 text-xs"
                >
                  {activity.priority}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}