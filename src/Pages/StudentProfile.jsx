import React, { useState } from 'react';
import { MapPin, Calendar, Link as LinkIcon, Award, MessageSquare, Eye, Star, Edit, Settings, Mail, Github, Twitter } from 'lucide-react';
import profileData from '../../public/data/ProfileData/profileData.json';
const StudentProfile = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const profile = profileData;

    const recentActivity = profileData?.recentActivity;

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'questions', label: 'Questions', count: profile.stats.questions },
        { id: 'answers', label: 'Answers', count: profile.stats.answers },
        { id: 'tags', label: 'Tags' },
        { id: 'badges', label: 'Badges' },
        { id: 'activity', label: 'Activity' }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-blue-600">Home</a></li>
                    <li>/</li>
                    <li><a href="#" className="hover:text-blue-600">Users</a></li>
                    <li>/</li>
                    <li className="text-gray-900">{profile.name}</li>
                </ol>
            </nav>

            {/* Profile Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Avatar and Basic Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
                            {profile.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Profile
                        </button>
                    </div>

                    {/* Profile Details */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile.name}</h1>
                                <p className="text-xl text-gray-600 mb-2">{profile.title}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {profile.location}
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        Joined {profile.joinDate}
                                    </div>
                                    <div className="flex items-center">
                                        <LinkIcon className="h-4 w-4 mr-1" />
                                        <a href={profile.website} className="text-blue-600 hover:underline">
                                            {profile.website}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <Settings className="h-5 w-5" />
                            </button>
                        </div>

                        <p className="text-gray-700 mb-6">{profile.bio}</p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4 mb-6">
                            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                                <Mail className="h-4 w-4 mr-1" />
                                Email
                            </a>
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                                <Github className="h-4 w-4 mr-1" />
                                GitHub
                            </a>
                            <a href="#" className="flex items-center text-gray-600 hover:text-blue-400 transition-colors">
                                <Twitter className="h-4 w-4 mr-1" />
                                Twitter
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{profile.stats.reputation.toLocaleString()}</div>
                                <div className="text-sm text-gray-500">Reputation</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{profile.stats.questions}</div>
                                <div className="text-sm text-gray-500">Questions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{profile.stats.answers}</div>
                                <div className="text-sm text-gray-500">Answers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{profile.stats.views.toLocaleString()}</div>
                                <div className="text-sm text-gray-500">Profile Views</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{profile.stats.followers}</div>
                                <div className="text-sm text-gray-500">Followers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{profile.stats.following}</div>
                                <div className="text-sm text-gray-500">Following</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg border border-gray-200 mb-8">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-8 px-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {tab.label}
                                {tab.count && (
                                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                                        {tab.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="p-8">
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Top Tags */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Tags</h3>
                                <div className="space-y-3">
                                    {profile.topTags.map((tag) => (
                                        <div key={tag.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                                                    {tag.name}
                                                </span>
                                                <span className="ml-3 text-sm text-gray-600">
                                                    {tag.posts} posts
                                                </span>
                                            </div>
                                            <div className="text-lg font-semibold text-gray-900">
                                                {tag.score}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Badges */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Badges</h3>
                                <div className="space-y-3">
                                    {profile.badges.map((badge, index) => (
                                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${badge.type === 'gold' ? 'bg-yellow-100' :
                                                    badge.type === 'silver' ? 'bg-gray-100' : 'bg-orange-100'
                                                }`}>
                                                <Award className={`h-4 w-4 ${badge.type === 'gold' ? 'text-yellow-600' :
                                                        badge.type === 'silver' ? 'text-gray-600' : 'text-orange-600'
                                                    }`} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">{badge.name}</div>
                                                <div className="text-sm text-gray-500">{badge.count} earned</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'activity' && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center">
                                            <div className={`p-2 rounded-lg mr-3 ${activity.type === 'answer' ? 'bg-green-100' : 'bg-blue-100'
                                                }`}>
                                                <MessageSquare className={`h-4 w-4 ${activity.type === 'answer' ? 'text-green-600' : 'text-blue-600'
                                                    }`} />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900">{activity.title}</div>
                                                <div className="text-sm text-gray-500">{activity.timeAgo}</div>
                                            </div>
                                        </div>
                                        <div className="text-green-600 font-medium">{activity.points}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
