import type { Repository } from "@/lib/github"
import { ExternalLink, Star, GitBranch } from "lucide-react"

type ProjectsProps = {
  repositories?: Repository[]
}

export default function Projects({ repositories = [] }: ProjectsProps) {
  if (!repositories || repositories.length === 0) {
    return (
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            プロジェクト
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300">現在、表示するプロジェクトがありません。</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">プロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{repo.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">
                  {repo.description || "説明がありません"}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <GitBranch className="mr-1 h-4 w-4" />
                    {repo.language || "N/A"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Star className="mr-1 h-4 w-4" />
                    {repo.stargazers_count}
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-md transition-colors duration-300"
                >
                  GitHubで見る
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

