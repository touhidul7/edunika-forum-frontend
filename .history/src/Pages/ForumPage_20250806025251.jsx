import FilterBar from "../components/FilterBar";
import ActivityFeed from "../components/ActivityFeed";
import StatsWidget from "../components/StatsWidget";
import QuestionList from "../components/Question/QuestionList";
import { useAuth } from "../Auth/context/AuthContext";

const ForumPage = () => {
  // load data form authcontext
  const {posts} = useAuth();
  return (
    <>
      <FilterBar />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Questions
              </h1>
              <p className="text-gray-600">
                Find answers to your programming questions and help others learn.
              </p>
            </div>
            <QuestionList />

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center space-x-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`px-4 py-2 text-sm font-medium border rounded-lg ${
                    num === 1
                      ? "text-white bg-blue-600 border-blue-600"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="px-4 py-2 text-sm text-gray-500">...</span>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                12
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            <StatsWidget />
            <ActivityFeed />

            {/* Featured Tags */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Featured Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "javascript",
                  "react",
                  "python",
                  "css",
                  "node.js",
                  "typescript",
                  "html",
                  "vue.js",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
