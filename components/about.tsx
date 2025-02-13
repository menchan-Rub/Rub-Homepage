import { SiRuby } from "react-icons/si"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">私について</h2>
          <p className="text-lg text-gray-300 mb-8">
            私はRubyプログラミングに深い情熱を持つ学生です。Rubyの優雅さとシンプルさが大好きで、
            常に新しいことを学び、興味深いプロジェクトに取り組むことにワクワクしています。
          </p>
          <div className="flex justify-center items-center mb-8">
            <SiRuby className="text-red-500 text-6xl mr-4" />
            <span className="text-2xl font-semibold">Ruby愛好家</span>
          </div>
          <a
            href="https://github.com/rubylover"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300"
          >
            GitHubをチェック
          </a>
        </div>
      </div>
    </section>
  )
}

