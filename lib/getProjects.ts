import { cache } from "react"

export type Project = {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
}

export const revalidate = 3600 // revalidate the data at most every hour

export const getProjects = cache(async (): Promise<Project[]> => {
  try {
    // 実際のAPIエンドポイントやデータベースからデータを取得する場合は、
    // ここでfetchやデータベースクエリを行います。
    // この例では、ハードコードされたデータを返します。
    const projects: Project[] = [
      {
        id: "1",
        title: "Rubyジェム",
        description: "データ処理のための便利なRubyジェム",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Ruby", "RSpec"],
        github: "https://github.com/rubylover/ruby-gem",
        live: "https://rubygems.org/gems/example-gem",
      },
      {
        id: "2",
        title: "Railsアプリ",
        description: "Ruby on Railsで構築されたWebアプリケーション",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Ruby on Rails", "PostgreSQL", "Bootstrap"],
        github: "https://github.com/rubylover/rails-app",
        live: "https://example-rails-app.herokuapp.com",
      },
      {
        id: "3",
        title: "Rubyスクリプト",
        description: "タスク自動化のための便利なRubyスクリプト",
        image: "/placeholder.svg?height=200&width=400",
        technologies: ["Ruby", "Shell"],
        github: "https://github.com/rubylover/ruby-script",
        live: "https://rubylover.github.io/ruby-script",
      },
    ]

    return projects
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    return [] // Return an empty array if there's an error
  }
})

