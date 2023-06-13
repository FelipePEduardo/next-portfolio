interface SkillProps {
  title: string
}

export function Skill({ title }: SkillProps) {
  return (
    <div className="max-w-sm w-full text-center p-5 rounded-lg bg-violet-400 shadow-[0_0_60px_rgba(0,0,0,0.8)] hover:bg-violet-600 hover:scale-110 transition-all">
      <span className="text-lg font-medium text-zinc-50">{title}</span>
    </div>
  )
}