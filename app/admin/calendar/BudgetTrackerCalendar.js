"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BudgetTrackerCalendar() {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const [budget, setBudget] = React.useState([]);

  React.useEffect(() => {
    const fetchBudget = async () => {
        const res = await fetch('/api/budget');
        const data = await res.json();
        setBudget(data);
    }
    fetchBudget();
  }, []);

  const handleSelect = (date) => {
    setDate(date);
    setOpen(true);
  }

  const handleSave = async () => {
    const res = await fetch('/api/budget', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, amount: parseFloat(amount) }),
    });
    const data = await res.json();
    console.log(data.message);
    setOpen(false);
    // Refetch budget data
    const fetchRes = await fetch('/api/budget');
    const fetchData = await fetchRes.json();
    setBudget(fetchData);
  }

  const formatDay = (day) => {
    const dayString = day.toISOString().split('T')[0];
    const dayBudget = budget.find(b => b.date.split('T')[0] === dayString);
    if (dayBudget) {
        return (
            <>
                {day.getDate()}
                <div className="text-xs text-red-500">{dayBudget.amount}</div>
            </>
        )
    }
    return day.getDate();
  }

  return (
    <div className="w-full">
        <h2 className="text-xl font-semibold mb-4">Budget Tracker</h2>
        <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            className="rounded-md border"
            components={{
                DayContent: ({ date }) => formatDay(date)
            }}
        />
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Set Budget for {date?.toLocaleDateString()}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <Button onClick={handleSave}>Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  );
}
