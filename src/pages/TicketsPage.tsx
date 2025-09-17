import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Plus, MoreHorizontal, Clock, AlertTriangle } from "lucide-react";

const tickets = [
  {
    id: "#2319",
    subject: "Payment failed on invoice",
    priority: "high",
    status: "open",
    assignee: "John Doe",
    customer: "Acme Corp",
    created: "2025-09-17",
    updated: "2h ago",
    tags: ["billing", "urgent"]
  },
  {
    id: "#2320", 
    subject: "Login issue with SSO",
    priority: "medium",
    status: "in-progress",
    assignee: "Sarah Lee",
    customer: "TechStart Inc",
    created: "2025-09-17",
    updated: "4h ago",
    tags: ["authentication", "sso"]
  },
  {
    id: "#2321",
    subject: "Feature request: Export functionality",
    priority: "low",
    status: "pending",
    assignee: "John Doe",
    customer: "DataFlow Ltd",
    created: "2025-09-16",
    updated: "1d ago",
    tags: ["feature", "export"]
  },
  {
    id: "#2322",
    subject: "Contract renewal assistance",
    priority: "medium",
    status: "open",
    assignee: "Michael Wong",
    customer: "Enterprise Co",
    created: "2025-09-16",
    updated: "2d ago",
    tags: ["contract", "renewal"]
  },
  {
    id: "#2323",
    subject: "API rate limit exceeded",
    priority: "high",
    status: "escalated",
    assignee: "Sarah Lee",
    customer: "DevCorp",
    created: "2025-09-15",
    updated: "3d ago",
    tags: ["api", "rate-limit"]
  }
];

const TicketsPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">All Tickets</h1>
            <p className="text-muted-foreground">Manage and track all customer support tickets</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Ticket
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span className="text-sm font-medium">Open</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">127</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-sm font-medium">In Progress</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">89</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Resolved</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">342</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium">Escalated</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">15</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Ticket Queue</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search tickets..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">My Queue</Button>
              <Button variant="outline" size="sm">Unassigned</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-surface-subtle/50">
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{ticket.subject}</div>
                        <div className="flex space-x-1 mt-1">
                          {ticket.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={ticket.priority === "high" ? "destructive" : ticket.priority === "medium" ? "secondary" : "outline"}
                        className="capitalize"
                      >
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          ticket.status === "open" ? "bg-destructive-subtle text-destructive" :
                          ticket.status === "in-progress" ? "bg-warning-subtle text-warning" :
                          ticket.status === "escalated" ? "bg-destructive text-destructive-foreground" :
                          "bg-muted text-muted-foreground"
                        }
                      >
                        {ticket.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {ticket.assignee.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{ticket.assignee}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{ticket.customer}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{ticket.updated}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TicketsPage;