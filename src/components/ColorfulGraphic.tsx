
import React from 'react';

const ColorfulGraphic = () => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-center justify-center">
      <div className="relative w-48 h-32">
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-80"></div>
        <div className="absolute top-2 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-80"></div>
        <div className="absolute bottom-0 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-80"></div>
        <div className="absolute bottom-0 right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg opacity-80"></div>
      </div>
    </div>
  );
};

export default ColorfulGraphic;
