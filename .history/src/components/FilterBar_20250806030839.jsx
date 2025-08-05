import { Award, Calendar, Clock, Filter, SortDesc, TrendingUp } from "lucide-react";
import { useState } from "react";


const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState('newest');
  const [activeTab, setActiveTab] = useState('all');

  const filterOptions = [
    { id: 'newest', label: 'Newest', icon: Clock },
    { id: 'active', label: 'Active', icon: TrendingUp },
    { id: 'votes', label: 'Votes', icon: SortDesc },
    { id: 'bounty', label: 'Bounty', icon: Award },
  ];

  const tabs = [
    { id: 'all', label: 'All Questions', count: '12.4k' },
    { id: 'unanswered', label: 'Unanswered', count: '2.1k' },
    { id: 'bounty', label: 'Bounty', count: '156' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="flex space-x-1">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeFilter === option.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <option.icon className="h-4 w-4 mr-1" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Showing 12,456 questions
            </span>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Filtered by: JavaScript, React
              </span>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Clear filters
              </button>
            </div>
          </div>

          <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Last 30 days
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FilterBar;
