'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Ticket,
  Users,
  UserCheck,
  BookOpen,
  Settings,
  HelpCircle,
  MessageSquare,
  TrendingUp,
  AlertTriangle,
  FileText,
  Zap,
  Search,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mainNavItems = [
  { title: "Overview", url: "/", icon: BarChart3 },
  { title: "Tickets", url: "/tickets", icon: Ticket },
];

const ticketSubItems = [
  { title: "All / My Queue", url: "/tickets" },
  { title: "SLA Breach Risk", url: "/tickets/sla-risk" },
  { title: "Escalations", url: "/tickets/escalations" },
];

const peopleItems = [
  { title: "Clients", url: "/clients", icon: Users },
  { title: "Agents & Teams", url: "/agents", icon: UserCheck },
];

const knowledgeItems = [
  { title: "Knowledge Base", url: "/knowledge", icon: BookOpen },
  { title: "Integrations", url: "/integrations", icon: Zap },
];

const analyticsItems = [
  { title: "SLA Compliance", url: "/analytics/sla", icon: TrendingUp },
  { title: "CSAT & NPS", url: "/analytics/satisfaction", icon: MessageSquare },
  { title: "Workload Analytics", url: "/analytics/workload", icon: BarChart3 },
  { title: "Reports", url: "/analytics/reports", icon: FileText },
];

const supportItems = [
  { title: "Feedback", url: "/support/feedback", icon: MessageSquare },
  { title: "Help & Support", url: "/support/help", icon: HelpCircle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = usePathname();
  const currentPath = pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (path: string) =>
    isActive(path) 
      ? "bg-primary text-primary-foreground hover:bg-primary/90 font-medium" 
      : "hover:bg-muted/60 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent className="bg-surface border-r border-border">
        {/* Logo & Search */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Ticket className="h-4 w-4 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-foreground">TicketHub</h1>
              </div>
            )}
          </div>
          
          {!collapsed && (
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search anything"
                className="pl-9 h-9 bg-background"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                ⌘K
              </kbd>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Tickets" && !collapsed && currentPath.startsWith("/tickets") && (
                    <div className="ml-6 mt-1 space-y-1">
                      {ticketSubItems.map((subItem) => (
                        <SidebarMenuButton key={subItem.title} asChild>
                          <Link 
                            href={subItem.url} 
                            className={`text-sm ${getNavClass(subItem.url)}`}
                          >
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* People */}
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            People
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {peopleItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Knowledge & Tools */}
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Knowledge & Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {knowledgeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Analytics & Insights */}
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Analytics & Insights
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support */}
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Profile */}
        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                AH
              </AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Achmad Hakim
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  achmadhakim@example.com
                </p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}