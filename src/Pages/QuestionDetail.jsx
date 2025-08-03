import { ArrowUp, ArrowDown, MessageCircle, Bookmark, Share2, Flag, Clock, Eye, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import allquestion from '../../public/data/questions.json'
const QuestionDetail = () => {
  const [userVote, setUserVote] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const question = allquestion[0];

  const answers = [
    {
      id: '1',
      content: `Great question! Error handling in React can be approached in several ways. Here's a comprehensive solution:

1. Use modern error boundaries
2. Use custom hooks for async errors
3. Use a global error context
4. Consistently handle API errors`,
      author: {
        name: 'Michael Rodriguez',
        avatar: '/api/placeholder/48/48',
        reputation: 28934,
        badges: ['TypeScript Expert', 'Top Contributor']
      },
      votes: 45,
      timeAgo: '1 hour ago',
      isAccepted: true
    },
    {
      id: '2',
      content: `I'd like to add to Michael's excellent answer with some practical patterns I use:

- Error Context Pattern
- API Error Handling Hook
- Consistent error logging`,
      author: {
        name: 'Emma Thompson',
        avatar: '/api/placeholder/48/48',
        reputation: 19672,
        badges: ['React Specialist']
      },
      votes: 32,
      timeAgo: '45 minutes ago',
      isAccepted: false
    }
  ];

  const handleVote = (type) => {
    setUserVote(userVote === type ? null : type);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li>/</li>
          <li><a href="#" className="hover:text-blue-600">Questions</a></li>
          <li>/</li>
          <li className="text-gray-900">Error handling in React</li>
        </ol>
      </nav>

      {/* Question */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
        <div className="flex gap-6">
          {/* Vote Section */}
          <div className="flex flex-col items-center space-y-3">
            <button 
              onClick={() => handleVote('up')}
              className={`p-2 rounded-lg transition-colors ${
                userVote === 'up' ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <ArrowUp className="h-6 w-6" />
            </button>
            <span className="text-2xl font-bold text-gray-900">{question?.votes}</span>
            <button 
              onClick={() => handleVote('down')}
              className={`p-2 rounded-lg transition-colors ${
                userVote === 'down' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <ArrowDown className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-gray-100 text-gray-400'
              }`}
            >
              <Bookmark className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{question.title}</h1>
            
            {/* Meta Info */}
            <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Asked {question.timeAgo}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{question.views} views</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>{question.answers} answers</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose max-w-none mb-6">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {question.content}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {question?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
                <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                  <Flag className="h-4 w-4 mr-1" />
                  Flag
                </button>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm text-gray-500">asked by</div>
                  <div className="font-medium text-gray-900">{question?.author?.name}</div>
                  <div className="text-sm text-green-600">{question?.author?.reputation?.toLocaleString()}</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  {question?.author?.name?.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answers */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {question.answers} Answers
        </h2>

        <div className="space-y-6">
          {answers?.map((answer) => (
            <div key={answer.id} className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex gap-6">
                {/* Vote Section */}
                <div className="flex flex-col items-center space-y-3">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowUp className="h-5 w-5 text-gray-400" />
                  </button>
                  <span className="text-xl font-bold text-gray-900">{answer.votes}</span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ArrowDown className="h-5 w-5 text-gray-400" />
                  </button>
                  {answer.isAccepted && (
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {answer.isAccepted && (
                    <div className="flex items-center mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">Accepted Answer</span>
                    </div>
                  )}

                  <div className="prose max-w-none mb-6">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {answer.content}
                    </div>
                  </div>

                  {/* Answer Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                        <Flag className="h-4 w-4 mr-1" />
                        Flag
                      </button>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">answered {answer.timeAgo}</div>
                        <div className="font-medium text-gray-900">{answer.author.name}</div>
                        <div className="text-sm text-green-600">{answer.author.reputation.toLocaleString()}</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-medium">
                        {answer.author.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Answer */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Answer</h3>
        <textarea
          placeholder="Write your answer here..."
          className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            Use Markdown for formatting
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Post Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
