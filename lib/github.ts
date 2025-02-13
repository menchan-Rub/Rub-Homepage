import { Octokit } from "@octokit/rest"

export type Repository = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
}

export async function getRepositories(): Promise<Repository[]> {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not set in the environment variables")
  }

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  try {
    const { data } = await octokit.repos.listForAuthenticatedUser({
      sort: "updated",
      per_page: 6,
    })

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
    }))
  } catch (error) {
    console.error("Error fetching repositories:", error)
    throw new Error("Failed to fetch repositories from GitHub")
  }
}

