import  { useState } from 'react';
import { 
  MessageSquare, 
  Award, 
  Eye, 
  Star, 
  Bell,
  Target,
  BarChart3,
  MessageCircle
} from 'lucide-react';

const StudentDashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  const stats = {
    reputation: { value: 15420, change: '+234', trend: 'up' },
    questions: { value: 47, change: '+3', trend: 'up' },
    answers: { value: 156, change: '+12', trend: 'up' },
    views: { value: 89234, change: '+1.2k', trend: 'up' },
    followers: { value: 234, change: '+8', trend: 'up' },
    badges: { value: 16, change: '+2', trend: 'up' }
  };

  const recentQuestions = [
    {
      id: 1,
      title: 'How to implement proper error handling in React components?',
      votes: 23,
      answers: 7,
      views: 1547,
      status: 'answered',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'Best practices for state management in large React applications',
      votes: 31,
      answers: 0,
      views: 892,
      status: 'unanswered',
      timeAgo: '3 days ago'
    },
    {
      id: 3,
      title: 'TypeScript generic constraints with conditional types',
      votes: 18,
      answers: 4,
      views: 2341,
      status: 'answered',
      timeAgo: '1 week ago'
    }
  ];

  const recentAnswers = [
    {
      id: 1,
      questionTitle: 'Understanding JavaScript closures and their practical applications',
      votes: 45,
      isAccepted: true,
      timeAgo: '1 hour ago'
    },
    {
      id: 2,
      questionTitle: 'CSS Grid vs Flexbox: When to use which layout method?',
      votes: 32,
      isAccepted: false,
      timeAgo: '2 days ago'
    },
    {
      id: 3,
      questionTitle: 'Optimizing database queries for large datasets',
      votes: 28,
      isAccepted: true,
      timeAgo: '4 days ago'
    }
  ];

  const achievements = [
    {
      title: 'First Answer',
      description: 'Posted your first answer',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      earned: true
    },
    {
      title: 'Popular Question',
      description: 'Question viewed 1000+ times',
      icon: Eye,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      earned: true
    },
    {
      title: 'Great Answer',
      description: 'Answer upvoted 25+ times',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      earned: false
    },
    {
      title: 'Helpful',
      description: 'Received 100+ upvotes',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      earned: false
    }
  ];

  const upcomingGoals = [
    { title: 'Reach 20,000 reputation', progress: 77, target: '20,000' },
    { title: 'Answer 200 questions', progress: 78, target: '200' },
    { title: 'Earn 5 gold badges', progress: 20, target: '5' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Track your progress and community contributions</p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
          {['week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                timeRange === range
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              This {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        {Object.entries(stats).map(([key, stat]) => (
          <div key={key} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600 capitalize">{key}</div>
              <div className={`text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Questions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Recent Questions</h2>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {recentQuestions.map((question) => (
                <div key={question.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                      {question.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      question.status === 'answered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {question.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{question.votes} votes</span>
                    <span>{question.answers} answers</span>
                    <span>{question.views} views</span>
                    <span>{question.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Answers */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Recent Answers</h2>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {recentAnswers.map((answer) => (
                <div key={answer.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                      {answer.questionTitle}
                    </h3>
                    {answer.isAccepted && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                        Accepted
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{answer.votes} votes</span>
                    <span>{answer.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Goals Progress */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2 text-blue-600" />
              Goals Progress
            </h3>
            <div className="space-y-4">
              {upcomingGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{goal.title}</span>
                    <span className="text-sm text-gray-500">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-600" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center p-3 rounded-lg ${
                  achievement.earned ? 'bg-gray-50' : 'bg-gray-25 opacity-60'
                }`}>
                  <div className={`p-2 rounded-lg mr-3 ${achievement.bgColor}`}>
                    <achievement.icon className={`h-4 w-4 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{achievement.title}</div>
                    <div className="text-sm text-gray-500">{achievement.description}</div>
                  </div>
                  {achievement.earned && (
                    <div className="text-green-600">
                      <Award className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
              This Week
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Questions asked</span>
                <span className="font-medium text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Answers posted</span>
                <span className="font-medium text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reputation gained</span>
                <span className="font-medium text-green-600">+234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Profile views</span>
                <span className="font-medium text-gray-900">1.2k</span>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-blue-600" />
              Recent Notifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Your answer was accepted</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">New follower: Mike Johnson</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Your question received 5 new answers</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle className="h-4 w-4 mr-2" />
                Open Messages
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Ask New Question
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Browse Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;