
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
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CircularProgress 
                value={85} 
                maxValue={100} 
                title="Total Appointments" 
                color="#3b82f6" 
              />
              <CircularProgress 
                value={92} 
                maxValue={100} 
                title="Patient Satisfaction" 
                color="#10b981" 
              />
            </div>
            
            <BookingsChart />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TransactionCard />
              <ColorfulGraphic />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <EmployeeSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
