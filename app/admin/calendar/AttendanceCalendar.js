"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button";

export function AttendanceCalendar() {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [attendance, setAttendance] = React.useState([]);

  React.useEffect(() => {
    const fetchAttendance = async () => {
        const res = await fetch('/api/attendance');
        const data = await res.json();
        setAttendance(data);
    }
    fetchAttendance();
  }, []);

  const handleSelect = (date) => {
    setDate(date);
    setOpen(true);
  }

  const handleSave = async () => {
    const res = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, status }),
    });
    const data = await res.json();
    console.log(data.message);
    setOpen(false);
    // Refetch attendance data
    const fetchRes = await fetch('/api/attendance');
    const fetchData = await fetchRes.json();
    setAttendance(fetchData);
  }

  const getDayClassName = (day) => {
    const dayString = day.toISOString().split('T')[0];
    const dayAttendance = attendance.find(a => a.date.split('T')[0] === dayString);
    if (dayAttendance) {
        return `day-${dayAttendance.status}`;
    }
    return '';
  }

  return (
    <div className="w-full">
        <h2 className="text-xl font-semibold mb-4">Attendance</h2>
        <style>{`
            .day-present { background-color: #86efac; }
            .day-absent { background-color: #fca5a5; }
            .day-holiday { background-color: #93c5fd; }
            .day-event { background-color: #fde047; }
            .day-exam { background-color: #d8b4fe; }
        `}</style>
        <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            className="rounded-md border"
            classNames={{
                day: (day) => getDayClassName(day)
            }}
        />
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Set Attendance for {date?.toLocaleDateString()}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Select onValueChange={setStatus}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="present">Present</SelectItem>
                            <SelectItem value="absent">Absent</SelectItem>
                            <SelectItem value="holiday">Holiday</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="exam">Exam</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleSave}>Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  );
}
