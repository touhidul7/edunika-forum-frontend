import { Award, Eye, MessageSquare, Users } from "lucide-react";


const StatsWidget = () => {
  const stats = [
    {
      label: 'Total Questions',
      value: '12,456',
      change: '+234',
      changeType: 'increase',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Active Users',
      value: '8,932',
      change: '+156',
      changeType: 'increase',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Total Views',
      value: '2.4M',
      change: '+12%',
      changeType: 'increase',
      icon: Eye,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Bounties',
      value: '1,234',
      change: '+45',
      changeType: 'increase',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Community Stats
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${stat.bgColor} mb-2`}
              >
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-xs text-green-600 font-medium">
                {stat.change} this week
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsWidget;
