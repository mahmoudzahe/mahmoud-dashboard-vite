
import React from 'react';
import Navbar from '../components/Navbar';
import TransactionCard from '../components/TransactionCard';
import CircularProgress from '../components/CircularProgress';
import EmployeeSchedule from '../components/EmployeeSchedule';
import BookingsChart from '../components/BookingsChart';
import ColorfulGraphic from '../components/ColorfulGraphic';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <TransactionCard />
            <ColorfulGraphic />
          </div>
          
          {/* Middle Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CircularProgress 
                value={50} 
                maxValue={100} 
                title="Total No of Appointments" 
                color="#3b82f6"
              />
              <CircularProgress 
                value={10} 
                maxValue={50} 
                title="Appointments Served" 
                color="#10b981"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CircularProgress 
                value={38} 
                maxValue={50} 
                title="Appointments Pending" 
                color="#f59e0b"
              />
              <CircularProgress 
                value={2} 
                maxValue={10} 
                title="Cancelled Appointment" 
                color="#ef4444"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <EmployeeSchedule />
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-6">
          <BookingsChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
