import { ArrowDown, ArrowUp, Bookmark, Clock, Eye, MessageCircle } from "lucide-react";

const QuestionCard = ({question}) => {
  console.log(question);
  
  const {
    title,
    
  } = question;

  const tagColors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-yellow-100 text-yellow-800',
    'bg-pink-100 text-pink-800',
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex gap-4">
        {/* Vote Section */}
        <div className="flex flex-col items-center space-y-2 min-w-0">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ArrowUp className="h-5 w-5 text-gray-400 hover:text-green-600" />
          </button>
          <span className={`text-lg font-medium ${votes > 0 ? 'text-green-600' : votes < 0 ? 'text-red-600' : 'text-gray-500'}`}>
            {votes}
          </span>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ArrowDown className="h-5 w-5 text-gray-400 hover:text-red-600" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center space-y-3 min-w-0">
          <div className={`px-3 py-2 rounded-lg text-center ${isAnswered ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
            <div className="text-lg font-semibold">{answers}</div>
            <div className="text-xs">answers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center text-gray-500">
              <Eye className="h-3 w-3 mr-1" />
              <span className="text-xs">{views}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2 pr-4">
              {title}
              {isBounty && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                  +50 bounty
                </span>
              )}
            </h3>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <Bookmark className="h-4 w-4 text-gray-400 hover:text-blue-600" />
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`px-2 py-1 rounded text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${
                  tagColors[index % tagColors.length]
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>asked {timeAgo}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-3 w-3 mr-1" />
                <span>{answers} answers</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xs text-white font-medium">
                {author.name.charAt(0)}
              </div>
              <span className="font-medium text-gray-700">{author.name}</span>
              <span className="text-green-600 font-medium">{author.reputation.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
