import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Plus, Eye, Edit, ThumbsUp, ThumbsDown, Clock, Users } from "lucide-react";

const knowledgeArticles = [
  {
    id: "1",
    title: "Getting Started with API Integration",
    category: "API Documentation", 
    tags: ["API", "Integration", "Developer"],
    author: "John Doe",
    lastUpdated: "2025-09-15",
    views: 1247,
    helpfulVotes: 89,
    notHelpfulVotes: 3,
    status: "published"
  },
  {
    id: "2",
    title: "Troubleshooting Login Issues",
    category: "Authentication",
    tags: ["Login", "SSO", "Troubleshooting"],
    author: "Sarah Lee", 
    lastUpdated: "2025-09-14",
    views: 2156,
    helpfulVotes: 156,
    notHelpfulVotes: 8,
    status: "published"
  },
  {
    id: "3",
    title: "Billing and Payment FAQ",
    category: "Billing",
    tags: ["Billing", "Payments", "FAQ"],
    author: "Michael Wong",
    lastUpdated: "2025-09-13",
    views: 892,
    helpfulVotes: 67,
    notHelpfulVotes: 5,
    status: "published"
  },
  {
    id: "4",
    title: "Advanced Security Configuration",
    category: "Security",
    tags: ["Security", "Configuration", "Admin"],
    author: "Emily Chen",
    lastUpdated: "2025-09-12",
    views: 445,
    helpfulVotes: 34,
    notHelpfulVotes: 2,
    status: "draft"
  }
];

const categories = [
  { name: "API Documentation", articles: 12, views: 5624 },
  { name: "Authentication", articles: 8, views: 3421 },
  { name: "Billing", articles: 15, views: 4892 },
  { name: "Security", articles: 6, views: 2156 },
  { name: "Troubleshooting", articles: 23, views: 8934 },
  { name: "Getting Started", articles: 9, views: 6745 }
];

const KnowledgeBasePage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Knowledge Base</h1>
            </div>
            <p className="text-muted-foreground">Manage articles and help documentation</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              New Article
            </Button>
          </div>
        </div>

        {/* Knowledge Base Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Total Articles</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">73</div>
              <div className="text-xs text-success mt-1">+5 this week</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-chart-2" />
                <span className="text-sm font-medium">Total Views</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">31.2K</div>
              <div className="text-xs text-success mt-1">+12% this month</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <ThumbsUp className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Helpful Rating</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">94%</div>
              <div className="text-xs text-success mt-1">+2% improvement</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">Avg Read Time</span>
              </div>
              <div className="text-2xl font-bold text-foreground mt-2">3.2m</div>
              <div className="text-xs text-muted-foreground mt-1">per article</div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-200 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="space-y-2">
                      <h3 className="font-medium text-foreground">{category.name}</h3>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-primary">{category.articles}</div>
                        <div className="text-xs text-muted-foreground">articles</div>
                        <div className="text-xs text-muted-foreground">{category.views.toLocaleString()} views</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Articles Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Articles</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">All Categories</Button>
              <Button variant="outline" size="sm">Published</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {knowledgeArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
                            {article.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>{article.category}</span>
                            <span>by {article.author}</span>
                            <span>Updated {article.lastUpdated}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {article.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          <Badge 
                            variant={article.status === "published" ? "default" : "secondary"}
                            className={article.status === "published" ? "bg-success text-success-foreground" : ""}
                          >
                            {article.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{article.views.toLocaleString()} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4 text-success" />
                            <span>{article.helpfulVotes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ThumbsDown className="h-4 w-4 text-destructive" />
                            <span>{article.notHelpfulVotes}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
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

export default KnowledgeBasePage;