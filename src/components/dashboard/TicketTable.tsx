import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, MoreHorizontal, Clock } from "lucide-react";

interface Ticket {
  id: string;
  subject: string;
  priority: "high" | "medium" | "low";
  assignedTo: {
    name: string;
    avatar?: string;
  };
  status: "in-review" | "delivered" | "in-progress";
  createdDate: string;
  slaTime: string;
}

const tickets: Ticket[] = [
  {
    id: "#2319",
    subject: "Payment failed on invoice",
    priority: "high",
    assignedTo: { name: "John Doe" },
    status: "in-review",
    createdDate: "2025-08-18",
    slaTime: "2h left",
  },
  {
    id: "#2320",
    subject: "Login issue",
    priority: "medium",
    assignedTo: { name: "Sarah Lee" },
    status: "delivered",
    createdDate: "2025-08-19",
    slaTime: "1h left",
  },
  {
    id: "#2321",
    subject: "Feature request export",
    priority: "low",
    assignedTo: { name: "John Doe" },
    status: "in-progress",
    createdDate: "2025-08-19",
    slaTime: "1d left",
  },
  {
    id: "#2322",
    subject: "Contract renewal issue",
    priority: "medium",
    assignedTo: { name: "Michael Wong" },
    status: "in-progress",
    createdDate: "2025-08-20",
    slaTime: "9h left",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive";
    case "medium":
      return "secondary";
    case "low":
      return "outline";
    default:
      return "secondary";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-success-subtle text-success border-success/20";
    case "in-progress":
      return "bg-warning-subtle text-warning border-warning/20";
    case "in-review":
      return "bg-primary-subtle text-primary border-primary/20";
    default:
      return "bg-secondary";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "in-review":
      return "In Review";
    case "delivered":
      return "Delivered";
    case "in-progress":
      return "In Progress";
    default:
      return status;
  }
};

export function TicketTable() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base font-semibold">SLA Monitoring</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8 px-3">
              <Filter className="h-3 w-3 mr-1" />
              Filter
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Ticket"
            className="pl-9 h-9"
          />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-xs font-medium text-muted-foreground">Ticket ID</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Subject</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Priority</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Assigned To</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Status</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">Created Date</TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground">SLA Due</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id} className="border-border hover:bg-surface-subtle/50">
                <TableCell className="font-medium text-sm">{ticket.id}</TableCell>
                <TableCell className="text-sm text-foreground max-w-[200px] truncate">
                  {ticket.subject}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={getPriorityColor(ticket.priority)}
                    className="text-xs capitalize"
                  >
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={ticket.assignedTo.avatar} />
                      <AvatarFallback className="text-xs">
                        {ticket.assignedTo.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{ticket.assignedTo.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={`text-xs ${getStatusColor(ticket.status)}`}>
                    {getStatusText(ticket.status)}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {ticket.createdDate}
                </TableCell>
                <TableCell className="text-sm font-medium">
                  {ticket.slaTime}
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
  );
}