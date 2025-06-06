
import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background border-b border-border">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">Home</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Location</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Health News</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </button>
        
        <div className="flex items-center space-x-3 cursor-pointer group">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
            alt="Kathryn" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-foreground">Kathryn</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
