
import React from 'react';

const TransactionCard = () => {
  const transactions = [
    {
      id: '1',
      name: 'Kathryn Murphy',
      amount: 300,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Karthik',
      amount: 300,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Apparna',
      amount: 300,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Transactions</h3>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors">
          See All
        </button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={transaction.avatar} 
                alt={transaction.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium text-foreground">{transaction.name}</span>
            </div>
            <span className="text-green-500 font-medium">+${transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionCard;
