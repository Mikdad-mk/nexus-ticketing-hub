import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

const slaRiskTickets = [
  {
    id: "#2319",
    subject: "Payment processing failure",
    customer: "Acme Corp",
    assignee: "John Doe", 
    priority: "high",
    timeRemaining: "2h 15m",
    riskLevel: "critical",
    created: "2025-09-17 08:30",
    slaTarget: "4h"
  },
  {
    id: "#2324",
    subject: "Database connection timeout",
    customer: "TechFlow Ltd",
    assignee: "Sarah Lee",
    priority: "high", 
    timeRemaining: "45m",
    riskLevel: "critical",
    created: "2025-09-17 10:15",
    slaTarget: "2h"
  },
  {
    id: "#2325",
    subject: "Email delivery issues",
    customer: "StartupXYZ",
    assignee: "Michael Wong",
    priority: "medium",
    timeRemaining: "6h 20m",
    riskLevel: "warning",
    created: "2025-09-17 06:40",
    slaTarget: "12h"
  },
  {
    id: "#2326",
    subject: "API integration errors",
    customer: "DevCorp Inc",
    assignee: "John Doe",
    priority: "medium",
    timeRemaining: "4h 10m",
    riskLevel: "warning", 
    created: "2025-09-17 09:50",
    slaTarget: "8h"
  }
];

export default function SLARiskPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h1 className="text-2xl font-bold text-foreground">SLA Breach Risk</h1>
            </div>
            <p className="text-muted-foreground">Tickets at risk of breaching SLA agreements</p>
          </div>
          <Button variant="outline">
            <Clock className="h-4 w-4 mr-2" />
            SLA Settings
          </Button>
        </div>

        {/* Risk Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-destructive/20 bg-destructive-subtle/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium text-destructive">Critical Risk</span>
                  </div>
                  <div className="text-2xl font-bold text-destructive mt-2">8</div>
                      <p className="text-xs text-muted-foreground">Less than 2 hours remaining</p>
                    </div>
                    <TrendingDown className="h-8 w-8 text-destructive/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-warning/20 bg-warning-subtle/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-warning" />
                    <span className="text-sm font-medium text-warning">Warning</span>
                  </div>
                  <div className="text-2xl font-bold text-warning mt-2">15</div>
                  <p className="text-xs text-muted-foreground">2-8 hours remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/20 bg-success-subtle/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-success rounded-full"></div>
                    <span className="text-sm font-medium text-success">On Track</span>
                  </div>
                  <div className="text-2xl font-bold text-success mt-2">234</div>
                  <p className="text-xs text-muted-foreground">More than 8 hours remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* High-Risk Tickets Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>High-Risk Tickets</span>
              <Badge variant="destructive" className="ml-auto">
                {slaRiskTickets.filter(t => t.riskLevel === "critical").length} Critical
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Time Remaining</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slaRiskTickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-surface-subtle/50">
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>
                      <div className="max-w-[200px]">
                        <div className="font-medium text-foreground truncate">
                          {ticket.subject}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          SLA: {ticket.slaTarget}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{ticket.customer}</TableCell>
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
                    <TableCell>
                      <Badge variant={ticket.priority === "high" ? "destructive" : "secondary"}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className={`font-medium ${
                          ticket.riskLevel === "critical" ? "text-destructive" : "text-warning"
                        }`}>
                          {ticket.timeRemaining}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={ticket.riskLevel === "critical" ? "destructive" : "secondary"}
                        className={ticket.riskLevel === "critical" ? "" : "bg-warning-subtle text-warning"}
                      >
                        {ticket.riskLevel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="h-7 px-2">
                          Escalate
                        </Button>
                        <Button size="sm" className="h-7 px-2">
                          Assign
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* SLA Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>SLA Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>SLA performance chart would be displayed here</p>
                <p className="text-sm">Showing breach rates over time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
