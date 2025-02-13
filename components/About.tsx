import { Github, Twitter } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">自己紹介</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            こんにちは、Rubです。私は現在、ウェブ開発を学んでいる学生です。
            フロントエンド技術に特に興味があり、日々新しいことを学んでいます。
            授業で学んだ知識を活かして、自分のアイデアをウェブサイトやアプリとして形にすることが楽しいです。
            休日はオープンソースプロジェクトにコントリビュートしたり、新しいプログラミング言語を学んだりしています。
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-300"
          >
            GitHubを見る
            <Github className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

