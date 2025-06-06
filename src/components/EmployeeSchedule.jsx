
import React from 'react';

const EmployeeSchedule = () => {
  const scheduleItems = [
    {
      id: '1',
      name: 'Omkar',
      date: 'Saturday, April 19',
      time: '9:00-6:45',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Krishna',
      date: 'Sunday, April 19',
      time: '9:00-4:30',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Ramu',
      date: 'Monday, April 19',
      time: '9:00-6:45',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '4',
      name: 'Prasad',
      date: 'Tuesday, April 19',
      time: '9:00-7:45',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Employee Schedule</h3>
        <button className="p-1 hover:bg-accent rounded transition-colors">
          <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-4">
        {scheduleItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={item.avatar} 
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.date}</div>
              </div>
            </div>
            <div className="bg-accent px-3 py-1 rounded-full text-sm font-medium text-foreground">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeSchedule;
