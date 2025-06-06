
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';

const BookingsChart = () => {
  const data = [
    { day: 'Day 1', served: 70, bookings: 75 },
    { day: 'Day 2', served: 85, bookings: 80 },
    { day: 'Day 3', served: 65, bookings: 70 },
    { day: 'Day 4', served: 78, bookings: 82 },
    { day: 'Day 5', served: 68, bookings: 73 },
    { day: 'Day 6', served: 82, bookings: 85 },
    { day: 'Day 7', served: 75, bookings: 80 },
    { day: 'Day 8', served: 88, bookings: 90 },
    { day: 'Day 9', served: 72, bookings: 78 },
    { day: 'Day 10', served: 85, bookings: 88 }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Bookings</h3>
        <button className="p-1 hover:bg-accent rounded transition-colors">
          <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            <Bar 
              dataKey="served" 
              fill="#3b82f6" 
              name="Served"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="bookings" 
              fill="#93c5fd" 
              name="Bookings"
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BookingsChart;
