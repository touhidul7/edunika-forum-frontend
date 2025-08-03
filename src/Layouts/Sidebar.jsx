import { BookOpen, Clock, Home, Star, Tag, TrendingUp, Users } from "lucide-react";


const Sidebar = ({ isOpen, onClose }) => {
  const navigationItems = [
    { icon: Home, label: 'Home', active: true, count: null },
    { icon: TrendingUp, label: 'Trending', active: false, count: null },
    { icon: BookOpen, label: 'Questions', active: false, count: '2.4k' },
    { icon: Users, label: 'Users', active: false, count: '890' },
    { icon: Tag, label: 'Tags', active: false, count: null },
  ];

  const categories = [
    { name: 'JavaScript', count: 1247, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'React', count: 892, color: 'bg-blue-100 text-blue-800' },
    { name: 'Python', count: 1543, color: 'bg-green-100 text-green-800' },
    { name: 'CSS', count: 687, color: 'bg-purple-100 text-purple-800' },
    { name: 'Node.js', count: 425, color: 'bg-emerald-100 text-emerald-800' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-4 lg:pt-6">
          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-1">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 ${
                      item.active
                        ? 'text-blue-600'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>
                  {item.count && (
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {item.count}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Popular Tags */}
          <div className="px-4 py-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Popular Tags
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${category.color}`}
                  >
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500">{category.count}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-4 py-6 border-t border-gray-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600">Reputation</span>
                </div>
                <span className="text-sm font-medium text-gray-900">2,547</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-sm text-gray-600">This Week</span>
                </div>
                <span className="text-sm font-medium text-gray-900">+127</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
