import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Users, UserCheck, Mail, Phone, MoreHorizontal, Shield, Clock } from "lucide-react";

const agents = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@company.com",
    role: "Senior Support Agent",
    team: "Technical Support",
    status: "online",
    activeTickets: 8,
    totalResolved: 1247,
    avgResponseTime: "12m",
    satisfactionRating: 4.9,
    joinedDate: "2023-01-15",
    lastActive: "Now",
    skills: ["Technical", "Billing", "API"],
    permissions: ["view_all", "edit_tickets", "escalate"]
  },
  {
    id: "2", 
    name: "Sarah Lee",
    email: "sarah.lee@company.com",
    role: "Support Agent",
    team: "Customer Success",
    status: "online",
    activeTickets: 6,
    totalResolved: 892,
    avgResponseTime: "8m",
    satisfactionRating: 4.8,
    joinedDate: "2023-05-20",
    lastActive: "5 min ago",
    skills: ["Customer Relations", "Onboarding"],
    permissions: ["view_assigned", "edit_tickets"]
  },
  {
    id: "3",
    name: "Michael Wong", 
    email: "michael.wong@company.com",
    role: "Technical Lead",
    team: "Technical Support",
    status: "busy",
    activeTickets: 12,
    totalResolved: 2156,
    avgResponseTime: "15m",
    satisfactionRating: 4.7,
    joinedDate: "2022-08-10",
    lastActive: "1 hour ago",
    skills: ["Technical", "Integrations", "Security"],
    permissions: ["view_all", "edit_tickets", "escalate", "admin"]
  },
  {
    id: "4",
    name: "Emily Chen",
    email: "emily.chen@company.com", 
    role: "Support Agent",
    team: "Billing Support",
    status: "away",
    activeTickets: 4,
    totalResolved: 567,
    avgResponseTime: "10m",
    satisfactionRating: 4.6,
    joinedDate: "2023-11-03",
    lastActive: "2 hours ago",
    skills: ["Billing", "Payments", "Refunds"],
    permissions: ["view_assigned", "edit_tickets"]
  }
];

const teams = [
  { name: "Technical Support", members: 8, averageRating: 4.8, activeTickets: 32 },
  { name: "Customer Success", members: 5, averageRating: 4.7, activeTickets: 18 },
  { name: "Billing Support", members: 4, averageRating: 4.6, activeTickets: 12 },
  { name: "Escalation Team", members: 3, averageRating: 4.9, activeTickets: 8 }
];

export default function AgentsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Agents & Teams</h1>
            <p className="text-muted-foreground">Manage your support team and agent performance</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Permissions
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Agent
            </Button>
          </div>
        </div>

        {/* Team Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {teams.map((team, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-200">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-foreground">{team.name}</h3>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Members</span>
                      <span className="font-medium">{team.members}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg Rating</span>
                      <span className="font-medium">{team.averageRating}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Active Tickets</span>
                      <span className="font-medium">{team.activeTickets}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agent Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <UserCheck className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Online Agents</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">18</div>
              <div className="text-xs text-muted-foreground mt-1">out of 20 total</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Avg Response Time</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">11m</div>
              <div className="text-xs text-success mt-1">-2m from last week</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Team Satisfaction</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">4.8</div>
              <div className="text-xs text-success mt-1">+0.1 this month</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Active Workload</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">70</div>
              <div className="text-xs text-muted-foreground mt-1">total active tickets</div>
            </CardContent>
          </Card>
        </div>

        {/* Agents Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Support Agents</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search agents..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">All Teams</Button>
              <Button variant="outline" size="sm">Online</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Agent</TableHead>
                  <TableHead>Team & Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Active Tickets</TableHead>
                  <TableHead>Resolved</TableHead>
                  <TableHead>Avg Response</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Skills</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agents.map((agent) => (
                  <TableRow key={agent.id} className="hover:bg-surface-subtle/50">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="" />
                            <AvatarFallback>
                              {agent.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-0 -right-0 w-3 h-3 rounded-full border-2 border-background ${
                            agent.status === "online" ? "bg-success" :
                            agent.status === "busy" ? "bg-warning" :
                            "bg-muted"
                          }`}></div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{agent.name}</div>
                          <div className="text-xs text-muted-foreground">{agent.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{agent.team}</div>
                        <div className="text-xs text-muted-foreground">{agent.role}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary"
                        className={
                          agent.status === "online" ? "bg-success-subtle text-success" :
                          agent.status === "busy" ? "bg-warning-subtle text-warning" :
                          "bg-muted text-muted-foreground"
                        }
                      >
                        {agent.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{agent.activeTickets}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{agent.totalResolved.toLocaleString()}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium">{agent.avgResponseTime}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">{agent.satisfactionRating}</span>
                        <span className="text-xs text-muted-foreground">⭐</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {agent.skills.slice(0, 2).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {agent.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{agent.skills.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
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
}
