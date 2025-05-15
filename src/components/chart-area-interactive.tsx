"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared//ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared//ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/shared//ui/toggle-group"
import { useIsMobile } from "@/shared/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", lectures: 222, practicals: 150 },
  { date: "2024-04-02", lectures: 97, practicals: 180 },
  { date: "2024-04-03", lectures: 167, practicals: 120 },
  { date: "2024-04-04", lectures: 242, practicals: 260 },
  { date: "2024-04-05", lectures: 373, practicals: 290 },
  { date: "2024-04-06", lectures: 301, practicals: 340 },
  { date: "2024-04-07", lectures: 245, practicals: 180 },
  { date: "2024-04-08", lectures: 409, practicals: 320 },
  { date: "2024-04-09", lectures: 59, practicals: 110 },
  { date: "2024-04-10", lectures: 261, practicals: 190 },
  { date: "2024-04-11", lectures: 327, practicals: 350 },
  { date: "2024-04-12", lectures: 292, practicals: 210 },
  { date: "2024-04-13", lectures: 342, practicals: 380 },
  { date: "2024-04-14", lectures: 137, practicals: 220 },
  { date: "2024-04-15", lectures: 120, practicals: 170 },
  { date: "2024-04-16", lectures: 138, practicals: 190 },
  { date: "2024-04-17", lectures: 446, practicals: 360 },
  { date: "2024-04-18", lectures: 364, practicals: 410 },
  { date: "2024-04-19", lectures: 243, practicals: 180 },
  { date: "2024-04-20", lectures: 89, practicals: 150 },
  { date: "2024-04-21", lectures: 137, practicals: 200 },
  { date: "2024-04-22", lectures: 224, practicals: 170 },
  { date: "2024-04-23", lectures: 138, practicals: 230 },
  { date: "2024-04-24", lectures: 387, practicals: 290 },
  { date: "2024-04-25", lectures: 215, practicals: 250 },
  { date: "2024-04-26", lectures: 75, practicals: 130 },
  { date: "2024-04-27", lectures: 383, practicals: 420 },
  { date: "2024-04-28", lectures: 122, practicals: 180 },
  { date: "2024-04-29", lectures: 315, practicals: 240 },
  { date: "2024-04-30", lectures: 454, practicals: 380 },
  { date: "2024-05-01", lectures: 165, practicals: 220 },
  { date: "2024-05-02", lectures: 293, practicals: 310 },
  { date: "2024-05-03", lectures: 247, practicals: 190 },
  { date: "2024-05-04", lectures: 385, practicals: 420 },
  { date: "2024-05-05", lectures: 481, practicals: 390 },
  { date: "2024-05-06", lectures: 498, practicals: 520 },
  { date: "2024-05-07", lectures: 388, practicals: 300 },
  { date: "2024-05-08", lectures: 149, practicals: 210 },
  { date: "2024-05-09", lectures: 227, practicals: 180 },
  { date: "2024-05-10", lectures: 293, practicals: 330 },
  { date: "2024-05-11", lectures: 335, practicals: 270 },
  { date: "2024-05-12", lectures: 197, practicals: 240 },
  { date: "2024-05-13", lectures: 197, practicals: 160 },
  { date: "2024-05-14", lectures: 448, practicals: 490 },
  { date: "2024-05-15", lectures: 473, practicals: 380 },
  { date: "2024-05-16", lectures: 338, practicals: 400 },
  { date: "2024-05-17", lectures: 499, practicals: 420 },
  { date: "2024-05-18", lectures: 315, practicals: 350 },
  { date: "2024-05-19", lectures: 235, practicals: 180 },
  { date: "2024-05-20", lectures: 177, practicals: 230 },
  { date: "2024-05-21", lectures: 82, practicals: 140 },
  { date: "2024-05-22", lectures: 81, practicals: 120 },
  { date: "2024-05-23", lectures: 252, practicals: 290 },
  { date: "2024-05-24", lectures: 294, practicals: 220 },
  { date: "2024-05-25", lectures: 201, practicals: 250 },
  { date: "2024-05-26", lectures: 213, practicals: 170 },
  { date: "2024-05-27", lectures: 420, practicals: 460 },
  { date: "2024-05-28", lectures: 233, practicals: 190 },
  { date: "2024-05-29", lectures: 78, practicals: 130 },
  { date: "2024-05-30", lectures: 340, practicals: 280 },
  { date: "2024-05-31", lectures: 178, practicals: 230 },
  { date: "2024-06-01", lectures: 178, practicals: 200 },
  { date: "2024-06-02", lectures: 470, practicals: 410 },
  { date: "2024-06-03", lectures: 103, practicals: 160 },
  { date: "2024-06-04", lectures: 439, practicals: 380 },
  { date: "2024-06-05", lectures: 88, practicals: 140 },
  { date: "2024-06-06", lectures: 294, practicals: 250 },
  { date: "2024-06-07", lectures: 323, practicals: 370 },
  { date: "2024-06-08", lectures: 385, practicals: 320 },
  { date: "2024-06-09", lectures: 438, practicals: 480 },
  { date: "2024-06-10", lectures: 155, practicals: 200 },
  { date: "2024-06-11", lectures: 92, practicals: 150 },
  { date: "2024-06-12", lectures: 492, practicals: 420 },
  { date: "2024-06-13", lectures: 81, practicals: 130 },
  { date: "2024-06-14", lectures: 426, practicals: 380 },
  { date: "2024-06-15", lectures: 307, practicals: 350 },
  { date: "2024-06-16", lectures: 371, practicals: 310 },
  { date: "2024-06-17", lectures: 475, practicals: 520 },
  { date: "2024-06-18", lectures: 107, practicals: 170 },
  { date: "2024-06-19", lectures: 341, practicals: 290 },
  { date: "2024-06-20", lectures: 408, practicals: 450 },
  { date: "2024-06-21", lectures: 169, practicals: 210 },
  { date: "2024-06-22", lectures: 317, practicals: 270 },
  { date: "2024-06-23", lectures: 480, practicals: 530 },
  { date: "2024-06-24", lectures: 132, practicals: 180 },
  { date: "2024-06-25", lectures: 141, practicals: 190 },
  { date: "2024-06-26", lectures: 434, practicals: 380 },
  { date: "2024-06-27", lectures: 448, practicals: 490 },
  { date: "2024-06-28", lectures: 149, practicals: 200 },
  { date: "2024-06-29", lectures: 103, practicals: 160 },
  { date: "2024-06-30", lectures: 446, practicals: 400 },
]

const chartConfig = {
  lectures: {
    label: "Лекции",
    color: "var(--primary)",
  },
  practicals: {
    label: "Практические",
    color: "var(--secondary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") daysToSubtract = 30
    else if (timeRange === "7d") daysToSubtract = 7
    
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Активность студентов</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Статистика за последние 3 месяца
          </span>
          <span className="@[540px]/card:hidden">Последние 3 месяца</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">3 месяца</ToggleGroupItem>
            <ToggleGroupItem value="30d">30 дней</ToggleGroupItem>
            <ToggleGroupItem value="7d">7 дней</ToggleGroupItem>
          </ToggleGroup>
          
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 @[767px]/card:hidden"
              size="sm"
              aria-label="Выберите период"
            >
              <SelectValue placeholder="3 месяца" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d">3 месяца</SelectItem>
              <SelectItem value="30d">30 дней</SelectItem>
              <SelectItem value="7d">7 дней</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillLectures" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPracticals" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--secondary)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => 
                new Date(value).toLocaleDateString("ru-RU", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => 
                    new Date(value).toLocaleDateString("ru-RU", {
                      month: "long",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />
            
            <Area
              dataKey="practicals"
              type="natural"
              fill="url(#fillPracticals)"
              stroke="var(--secondary)"
              stackId="a"
            />
            <Area
              dataKey="lectures"
              type="natural"
              fill="url(#fillLectures)"
              stroke="var(--primary)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}