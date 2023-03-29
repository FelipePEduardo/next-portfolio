interface ProjectProps {
  repo: {
    name: string
    description: string
    html_url: string
  }
}

export function Project({ repo }: ProjectProps) {
  return (
    <a href={repo.html_url} target="_blank" className="flex flex-col lg:w-44 hover:scale-110 transition-all">
      <span className="text-gray-50">{repo.name}</span>
      <p className="text-gray-400">
        {
          repo.description
        }
      </p>
    </a>
  )
}