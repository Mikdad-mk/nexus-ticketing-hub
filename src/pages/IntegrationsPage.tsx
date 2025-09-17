import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Zap, Plus, Settings, CheckCircle, AlertCircle, Pause, ExternalLink } from "lucide-react";

const integrations = [
  {
    id: "1",
    name: "Slack",
    description: "Send ticket notifications and updates to Slack channels",
    category: "Communication",
    status: "connected",
    icon: "💬",
    connectedDate: "2025-08-15",
    lastSync: "2 minutes ago",
    config: {
      channels: 3,
      webhooks: 2
    }
  },
  {
    id: "2", 
    name: "Zendesk",
    description: "Import tickets and customer data from Zendesk",
    category: "CRM",
    status: "connected",
    icon: "🎫",
    connectedDate: "2025-07-22",
    lastSync: "1 hour ago",
    config: {
      tickets: 1247,
      contacts: 892
    }
  },
  {
    id: "3",
    name: "Stripe",
    description: "Sync billing information and subscription data",
    category: "Billing",
    status: "connected", 
    icon: "💳",
    connectedDate: "2025-06-10",
    lastSync: "15 minutes ago",
    config: {
      customers: 156,
      subscriptions: 134
    }
  },
  {
    id: "4",
    name: "GitHub",
    description: "Link tickets to GitHub issues and pull requests",
    category: "Development",
    status: "paused",
    icon: "🐙",
    connectedDate: "2025-09-01",
    lastSync: "2 days ago",
    config: {
      repositories: 5,
      issues: 23
    }
  },
  {
    id: "5",
    name: "Jira",
    description: "Create and sync issues between support tickets and Jira",
    category: "Project Management",
    status: "error",
    icon: "📋",
    connectedDate: "2025-08-28",
    lastSync: "Failed",
    config: {
      projects: 0,
      issues: 0
    }
  },
  {
    id: "6",
    name: "Microsoft Teams",
    description: "Collaborate on tickets with your team in Microsoft Teams",
    category: "Communication", 
    status: "available",
    icon: "👥",
    connectedDate: null,
    lastSync: null,
    config: null
  }
];

const IntegrationsPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-success text-success-foreground";
      case "paused":
        return "bg-warning text-warning-foreground";
      case "error":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4" />;
      case "paused":
        return <Pause className="h-4 w-4" />;
      case "error":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Integrations</h1>
            </div>
            <p className="text-muted-foreground">Connect your favorite tools and services</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              Browse Integrations
            </Button>
          </div>
        </div>

        {/* Integration Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Connected</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">3</div>
              <div className="text-xs text-muted-foreground mt-1">Active integrations</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Pause className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">Paused</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">1</div>
              <div className="text-xs text-muted-foreground mt-1">Temporarily disabled</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium">Errors</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">1</div>
              <div className="text-xs text-muted-foreground mt-1">Needs attention</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Available</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">50+</div>
              <div className="text-xs text-muted-foreground mt-1">Ready to connect</div>
            </CardContent>
          </Card>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <Card key={integration.id} className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{integration.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground">{integration.name}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {integration.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge className={getStatusColor(integration.status)}>
                      {getStatusIcon(integration.status)}
                      <span className="ml-1 capitalize">{integration.status}</span>
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>

                  {/* Configuration Info */}
                  {integration.config && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(integration.config).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                      {integration.lastSync && (
                        <div className="text-xs text-muted-foreground">
                          Last sync: {integration.lastSync}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    {integration.status === "available" ? (
                      <Button size="sm" className="flex-1">
                        <Zap className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    ) : (
                      <div className="flex items-center space-x-2 w-full">
                        <Switch 
                          checked={integration.status === "connected"} 
                          disabled={integration.status === "error"}
                        />
                        <span className="text-sm text-muted-foreground flex-1">
                          {integration.status === "connected" ? "Enabled" : 
                           integration.status === "paused" ? "Paused" : "Error"}
                        </span>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Integrations */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: "Discord", icon: "🎮", category: "Communication" },
                { name: "Salesforce", icon: "☁️", category: "CRM" },
                { name: "HubSpot", icon: "🧲", category: "Marketing" },
                { name: "Webhooks", icon: "🔗", category: "Custom" }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-200 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="space-y-2">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Learn More
                      </Button>
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

export default IntegrationsPage;