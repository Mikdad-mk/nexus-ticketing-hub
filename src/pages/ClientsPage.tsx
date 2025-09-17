import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Building2, Mail, Phone, MoreHorizontal, TrendingUp } from "lucide-react";

const clients = [
  {
    id: "1",
    name: "Acme Corporation",
    industry: "Technology",
    plan: "Enterprise",
    contacts: [
      { name: "John Smith", role: "IT Director", email: "john@acme.com" },
      { name: "Sarah Wilson", role: "Operations Manager", email: "sarah@acme.com" }
    ],
    openTickets: 12,
    resolvedTickets: 189,
    satisfactionScore: 4.8,
    contractValue: "$125,000",
    joinedDate: "2023-03-15",
    lastActivity: "2 hours ago",
    status: "active"
  },
  {
    id: "2", 
    name: "TechFlow Industries",
    industry: "Manufacturing",
    plan: "Professional",
    contacts: [
      { name: "Michael Chen", role: "CTO", email: "michael@techflow.com" }
    ],
    openTickets: 5,
    resolvedTickets: 67,
    satisfactionScore: 4.6,
    contractValue: "$75,000",
    joinedDate: "2023-07-22",
    lastActivity: "1 day ago",
    status: "active"
  },
  {
    id: "3",
    name: "DataCorp Solutions",
    industry: "Finance",
    plan: "Enterprise",
    contacts: [
      { name: "Lisa Rodriguez", role: "VP Technology", email: "lisa@datacorp.com" },
      { name: "Mark Johnson", role: "Security Lead", email: "mark@datacorp.com" }
    ],
    openTickets: 8,
    resolvedTickets: 203,
    satisfactionScore: 4.9,
    contractValue: "$200,000",
    joinedDate: "2022-11-08",
    lastActivity: "4 hours ago",
    status: "active"
  },
  {
    id: "4",
    name: "StartupXYZ",
    industry: "SaaS",
    plan: "Starter",
    contacts: [
      { name: "Alex Kumar", role: "Founder", email: "alex@startupxyz.com" }
    ],
    openTickets: 3,
    resolvedTickets: 28,
    satisfactionScore: 4.7,
    contractValue: "$15,000",
    joinedDate: "2024-01-12",
    lastActivity: "3 days ago",
    status: "trial"
  }
];

const ClientsPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Clients</h1>
            <p className="text-muted-foreground">Manage your customer relationships and accounts</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Total Clients</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">47</div>
              <div className="flex items-center space-x-1 text-xs mt-1">
                <TrendingUp className="h-3 w-3 text-success" />
                <span className="text-success">+12% this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Active Clients</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">42</div>
              <div className="text-xs text-muted-foreground mt-1">89% retention rate</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-warning rounded-full"></div>
                <span className="text-sm font-medium">Trial Clients</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">5</div>
              <div className="text-xs text-muted-foreground mt-1">Converting at 80%</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Avg Satisfaction</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">4.7</div>
              <div className="text-xs text-muted-foreground mt-1">Based on 234 reviews</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Client Directory</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Export</Button>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search clients..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">All Plans</Button>
              <Button variant="outline" size="sm">Enterprise</Button>
              <Button variant="outline" size="sm">Active</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clients.map((client) => (
                <Card key={client.id} className="hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="space-y-2">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{client.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{client.industry}</span>
                              <Badge variant={client.plan === "Enterprise" ? "default" : "secondary"}>
                                {client.plan}
                              </Badge>
                              <Badge variant={client.status === "active" ? "default" : "secondary"}
                                     className={client.status === "active" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground"}>
                                {client.status}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            {client.contacts.slice(0, 2).map((contact, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm">
                                <Mail className="h-3 w-3 text-muted-foreground" />
                                <span className="font-medium">{contact.name}</span>
                                <span className="text-muted-foreground">({contact.role})</span>
                                <span className="text-muted-foreground">{contact.email}</span>
                              </div>
                            ))}
                            {client.contacts.length > 2 && (
                              <div className="text-sm text-muted-foreground">
                                +{client.contacts.length - 2} more contacts
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-lg font-bold text-foreground">{client.contractValue}</div>
                        <div className="text-sm text-muted-foreground">Annual contract</div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-foreground">{client.openTickets}</div>
                          <div className="text-xs text-muted-foreground">Open Tickets</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-foreground">{client.resolvedTickets}</div>
                          <div className="text-xs text-muted-foreground">Resolved</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-foreground">{client.satisfactionScore}</div>
                          <div className="text-xs text-muted-foreground">Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{client.lastActivity}</div>
                          <div className="text-xs text-muted-foreground">Last Activity</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClientsPage;