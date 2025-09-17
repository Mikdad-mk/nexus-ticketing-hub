import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUp, MessageSquare, Clock, AlertCircle } from "lucide-react";

const escalatedTickets = [
  {
    id: "#2315",
    subject: "Critical system outage - Production down",
    customer: "Enterprise Corp",
    escalatedBy: "John Doe",
    escalatedTo: "Senior Engineer",
    escalationLevel: "Level 3",
    escalationReason: "Technical complexity",
    escalatedAt: "2025-09-17 14:30",
    timeInEscalation: "6h 30m",
    priority: "critical",
    status: "in-progress"
  },
  {
    id: "#2318",
    subject: "Data corruption in customer database",
    customer: "DataFlow Inc",
    escalatedBy: "Sarah Lee", 
    escalatedTo: "Technical Lead",
    escalationLevel: "Level 2",
    escalationReason: "Data integrity issue",
    escalatedAt: "2025-09-17 12:15",
    timeInEscalation: "8h 45m",
    priority: "high",
    status: "investigating"
  },
  {
    id: "#2317",
    subject: "Billing discrepancy - Overcharge dispute",
    customer: "Acme Corp",
    escalatedBy: "Michael Wong",
    escalatedTo: "Billing Manager",
    escalationLevel: "Level 1",
    escalationReason: "Management approval needed",
    escalatedAt: "2025-09-17 10:00",
    timeInEscalation: "11h",
    priority: "high", 
    status: "pending-approval"
  },
  {
    id: "#2316",
    subject: "Security vulnerability report",
    customer: "SecureTech Ltd",
    escalatedBy: "Sarah Lee",
    escalatedTo: "Security Team",
    escalationLevel: "Level 2",
    escalationReason: "Security implications",
    escalatedAt: "2025-09-16 16:45",
    timeInEscalation: "1d 4h",
    priority: "high",
    status: "resolved"
  }
];

export default function EscalationsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <ArrowUp className="h-6 w-6 text-warning" />
              <h1 className="text-2xl font-bold text-foreground">Escalated Tickets</h1>
            </div>
            <p className="text-muted-foreground">High-priority tickets requiring specialized attention</p>
          </div>
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Escalation Guidelines
          </Button>
        </div>

        {/* Escalation Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-destructive/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Level 3 - Critical</span>
                  <div className="text-2xl font-bold text-destructive mt-1">3</div>
                </div>
                <AlertCircle className="h-8 w-8 text-destructive/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-warning/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Level 2 - High</span>
                  <div className="text-2xl font-bold text-warning mt-1">8</div>
                </div>
                <ArrowUp className="h-8 w-8 text-warning/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Level 1 - Standard</span>
                  <div className="text-2xl font-bold text-primary mt-1">12</div>
                </div>
                <MessageSquare className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Avg Resolution</span>
                  <div className="text-2xl font-bold text-success mt-1">18h</div>
                </div>
                <Clock className="h-8 w-8 text-success/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Escalation Queue */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <ArrowUp className="h-5 w-5 text-warning" />
                <span>Active Escalations</span>
                <Badge variant="secondary">{escalatedTickets.length} tickets</Badge>
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Level 3</Button>
                <Button variant="outline" size="sm">Level 2</Button>
                <Button variant="outline" size="sm">Level 1</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Escalation Path</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Time in Escalation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {escalatedTickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-surface-subtle/50">
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>
                      <div className="max-w-[250px]">
                        <div className="font-medium text-foreground truncate">
                          {ticket.subject}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Reason: {ticket.escalationReason}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{ticket.customer}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-xs">
                              {ticket.escalatedBy.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <ArrowUp className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm font-medium">{ticket.escalatedTo}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          By: {ticket.escalatedBy}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          ticket.escalationLevel === "Level 3" ? "destructive" :
                          ticket.escalationLevel === "Level 2" ? "secondary" :
                          "outline"
                        }
                        className={
                          ticket.escalationLevel === "Level 2" ? "bg-warning-subtle text-warning" : ""
                        }
                      >
                        {ticket.escalationLevel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{ticket.timeInEscalation}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={ticket.status === "resolved" ? "default" : "secondary"}
                        className={
                          ticket.status === "resolved" ? "bg-success-subtle text-success" :
                          ticket.status === "in-progress" ? "bg-primary-subtle text-primary" :
                          "bg-warning-subtle text-warning"
                        }
                      >
                        {ticket.status.replace("-", " ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="h-7 px-2">
                          View
                        </Button>
                        {ticket.status !== "resolved" && (
                          <Button size="sm" className="h-7 px-2">
                            Update
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Escalation Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Escalation Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Level 1</Badge>
                  <span className="font-medium">Standard Escalation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Customer requests manager, billing issues, policy questions
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-warning-subtle text-warning">Level 2</Badge>
                  <span className="font-medium">Technical Escalation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Complex technical issues, data problems, integration failures
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="destructive">Level 3</Badge>
                  <span className="font-medium">Critical Escalation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  System outages, security issues, major data loss
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
