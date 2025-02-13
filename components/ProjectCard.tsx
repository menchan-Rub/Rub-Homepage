import Image from "next/image"
import type { Project } from "@/lib/getProjects"

export default function ProjectCard({ project }: { project: Project }) {
  if (!project) {
    return null // or return a placeholder component
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies &&
            project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-700 px-2 py-1 rounded-full text-sm text-gray-300">
                {tech}
              </span>
            ))}
        </div>
        <div className="flex justify-between">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
            ライブデモ
          </a>
        </div>
      </div>
    </div>
  )
}

