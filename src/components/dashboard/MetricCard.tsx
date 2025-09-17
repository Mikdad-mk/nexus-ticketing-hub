import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  changeType: "positive" | "negative";
  icon?: React.ReactNode;
}

export function MetricCard({ title, value, change, changeType, icon }: MetricCardProps) {
  return (
    <Card className="hover:shadow-card transition-all duration-200 hover:translate-y-[-2px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center space-x-1 text-xs">
          {changeType === "positive" ? (
            <TrendingUp className="h-3 w-3 text-success" />
          ) : (
            <TrendingDown className="h-3 w-3 text-destructive" />
          )}
          <span
            className={
              changeType === "positive" ? "text-success" : "text-destructive"
            }
          >
            {changeType === "positive" ? "+" : ""}{change}%
          </span>
          <span className="text-muted-foreground">vs last week</span>
        </div>
      </CardContent>
    </Card>
  );
}