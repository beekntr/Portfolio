import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandGithub, IconGitFork, IconStar, IconUsers, IconCode } from '@tabler/icons-react';

export const GitHubStats = ({ isOpen, onClose, username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      if (isOpen) {
        setLoading(true);
        try {
          const userResponse = await fetch(`https://api.github.com/users/${username}`);
          const userData = await userResponse.json();
          
          const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
          const reposData = await reposResponse.json();
          
          // Calculate total stars and forks
          const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
          
          setUserData({ ...userData, totalStars, totalForks, reposCount: reposData.length });
        } catch (error) {
          console.error('Error fetching GitHub data:', error);
        }
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [isOpen, username]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl max-w-4xl w-full overflow-y-auto max-h-[90vh]"
        >
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <img
                    src={userData?.avatar_url}
                    alt="Profile"
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                      {userData?.name || username}
                    </h2>
                    <a
                      href={userData?.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
                    >
                      <IconBrandGithub className="w-4 h-4" />
                      {userData?.login}
                    </a>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  ✕
                </button>
              </div>

              {/* Bio and Location */}
              {userData?.bio && (
                <p className="text-neutral-600 dark:text-neutral-300">
                  {userData.bio}
                </p>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                  icon={<IconBrandGithub className="w-5 h-5" />}
                  label="Repositories"
                  value={userData?.public_repos}
                />
                <StatCard
                  icon={<IconUsers className="w-5 h-5" />}
                  label="Followers"
                  value={userData?.followers}
                />
                <StatCard
                  icon={<IconStar className="w-5 h-5" />}
                  label="Total Stars"
                  value={userData?.totalStars}
                />
                <StatCard
                  icon={<IconGitFork className="w-5 h-5" />}
                  label="Total Forks"
                  value={userData?.totalForks}
                />
              </div>

              {/* GitHub Stats Cards */}
              <div className="space-y-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&include_all_commits=true&count_private=true`}
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                />
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=0d1117`}
                  alt="GitHub Streak Stats"
                  className="w-full rounded-lg"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&langs_count=8`}
                  alt="Most Used Languages"
                  className="w-full rounded-lg"
                />
                <img 
                  src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=darkhub&no-frame=true&row=1&column=6`}
                  alt="GitHub Trophies"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Contribution Graph */}
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true`}
                alt="Contribution Graph"
                className="w-full rounded-lg"
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-gray-50 dark:bg-neutral-700/50 p-4 rounded-lg">
    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
      {icon}
      <span>{label}</span>
    </div>
    <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mt-1">
      {value?.toLocaleString() || 0}
    </p>
  </div>
); 