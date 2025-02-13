import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import ErrorBoundary from "@/components/ErrorBoundary"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <ErrorBoundary>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

