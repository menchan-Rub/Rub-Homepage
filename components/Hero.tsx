import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 animate-fade-in">
          Welcome
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-up">
          ウェブ開発を学ぶ学生です。新しい技術に触れ、面白いプロジェクトに挑戦することが好きです。
        </p>
        <a
          href="#about"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-colors duration-300 animate-fade-up"
        >
          もっと知る
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

