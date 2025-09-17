import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Calendar } from "lucide-react";

const chartData = [
  { day: "Sun", value: 320 },
  { day: "Mon", value: 420 },
  { day: "Tue", value: 584 },
  { day: "Wed", value: 410 },
  { day: "Thu", value: 375 },
  { day: "Fri", value: 290 },
  { day: "Sat", value: 180 },
];

export function ChartCard() {
  const maxValue = Math.max(...chartData.map(d => d.value));
  const totalTickets = 4790;
  const changePercent = 8;

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-base font-semibold">Ticket Volume Trend</CardTitle>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-foreground">{totalTickets.toLocaleString()}</div>
              <Badge variant="secondary" className="bg-success-subtle text-success border-success/20">
                +{changePercent}% vs last week
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8 px-3">
              <Calendar className="h-3 w-3 mr-1" />
              Last week
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between space-x-2">
          {chartData.map((item, index) => (
            <div key={item.day} className="flex flex-col items-center space-y-2 flex-1">
              <div className="relative w-full flex items-end justify-center">
                <div
                  className={`w-8 rounded-t-sm transition-all duration-300 hover:opacity-80 ${
                    index === 2 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-surface-subtle border border-border'
                  }`}
                  style={{
                    height: `${(item.value / maxValue) * 200}px`,
                  }}
                >
                  {index === 2 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                      Tue • {item.value}
                    </div>
                  )}
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {item.day}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-sm bg-primary"></div>
              <span>Peak day</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-sm bg-surface-subtle border border-border"></div>
              <span>Regular</span>
            </div>
          </div>
          <div>Daily average: 486 tickets</div>
        </div>
      </CardContent>
    </Card>
  );
}