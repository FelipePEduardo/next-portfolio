interface ProjectProps {
  onRepo: {
    name: string
    description: string
    html_url: string
  }
}

export function Project({ onRepo }: ProjectProps) {
  return (
    <a href={onRepo.html_url} target="_blank" className="flex flex-col lg:w-44 hover:scale-110 transition-all">
      <span className="text-gray-50">{ onRepo.name }</span>
      <p className="text-gray-400">
        {
          onRepo.description
        }
      </p>
    </a>
  )
}