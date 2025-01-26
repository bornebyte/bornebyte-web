"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


const chartConfig = {
    count: {
        label: "Count",
        color: "#2563eb",
    },
}

export function ChartComponent({chartData}) {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                 <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="#2563eb" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
