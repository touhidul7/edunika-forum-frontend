import { useState } from "react";
import { Plus, X, HelpCircle, BookOpen, Code, AlertCircle } from "lucide-react";

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { id: "programming", name: "Programming", icon: Code },
    { id: "web-development", name: "Web Development", icon: BookOpen },
    { id: "mobile", name: "Mobile Development", icon: Plus },
    { id: "database", name: "Database", icon: HelpCircle },
    { id: "devops", name: "DevOps", icon: AlertCircle },
  ];

  const popularTags = [
    "javascript",
    "react",
    "typescript",
    "python",
    "css",
    "html",
    "node.js",
    "vue.js",
    "angular",
    "php",
    "java",
    "c#",
  ];

  const addTag = (tag) => {
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && currentTag.trim()) {
      e.preventDefault();
      addTag(currentTag.trim());
    }
  };

  return (
    <div className=" mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Questions
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-900">Ask Question</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ask a Question
            </h1>
            <p className="text-gray-600 mb-8">
              Get help from the community by asking a clear, detailed question.
            </p>

            <form className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Question Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What's your programming question? Be specific."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Be specific and imagine you're asking a question to another
                  person.
                </p>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <category.icon className="h-5 w-5 mb-2" />
                      <div className="font-medium">{category.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Question Details *
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Provide all the details someone would need to answer your question. Include any code, error messages, or steps you've already tried."
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Use Markdown for formatting. Include code examples, error
                  messages, and what you've tried.
                </p>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (up to 5)
                </label>

                {/* Current Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-2 hover:text-blue-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Tag Input */}
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add tags (press Enter to add)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={tags.length >= 5}
                />

                {/* Popular Tags */}
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Popular tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => addTag(tag)}
                        disabled={tags.includes(tag) || tags.length >= 5}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <button
                  type="button"
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Save as Draft
                </button>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Preview
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Post Question
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tips */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
              How to ask a good question
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Make your title specific and descriptive
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Include relevant code examples
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Explain what you've already tried
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Use proper tags to categorize your question
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Be respectful and patient
              </li>
            </ul>
          </div>

          {/* Similar Questions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Similar Questions
            </h3>
            <div className="space-y-3">
              {[
                "React Error Boundaries best practices",
                "TypeScript error handling patterns",
                "Async error handling in React hooks",
              ].map((question, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {question}
                </a>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              Community Guidelines
            </h3>
            <p className="text-sm text-yellow-700">
              Please ensure your question follows our community guidelines. Be
              respectful, provide context, and help others learn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
