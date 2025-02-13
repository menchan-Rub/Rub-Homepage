import type { GetStaticProps } from "next"
import Head from "next/head"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import { getRepositories, type Repository } from "@/lib/github"

type HomeProps = {
  repositories?: Repository[]
  error?: string
}

export default function Home({ repositories, error }: HomeProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Rub - ウェブ開発学習中</title>
          <meta name="description" content="ウェブ開発を学ぶ学生、Rubのウェブサイトです。" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>
          <Hero />
          <About />
          {error ? (
            <section className="py-20 bg-white dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <p className="text-center text-red-500">{error}</p>
              </div>
            </section>
          ) : (
            <Projects repositories={repositories} />
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const repositories = await getRepositories()
    return {
      props: {
        repositories,
      },
      revalidate: 3600, // 1時間ごとに再生成
    }
  } catch (error) {
    console.error("リポジトリの取得に失敗しました:", error)
    return {
      props: {
        error: "プロジェクトの読み込みに失敗しました。後でもう一度お試しください。",
      },
      revalidate: 60, // 1分後に再試行
    }
  }
}

