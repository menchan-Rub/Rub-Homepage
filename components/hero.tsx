export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">こんにちは、Ruby Loverです</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Rubyプログラミングに情熱を注ぐ学生です</p>
          <a
            href="#about"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300"
          >
            もっと詳しく
          </a>
        </div>
      </div>
    </section>
  )
}

