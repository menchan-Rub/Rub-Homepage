import { getProjects } from "@/lib/getProjects"
import ProjectCard from "./ProjectCard"

export default async function Projects() {
  const projects = await getProjects()

  if (!projects) {
    return <div>プロジェクトを読み込めませんでした。</div>
  }

  return (
    <section id="projects" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">私のプロジェクト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

