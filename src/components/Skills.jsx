import Section from './Section'

const skills = [['Python', '90%'], ['SQL', '85%'], ['Excel', '85%'], ['C', '75%'], ['Linux', '75%'], ['GitHub', '80%'],['C++', '60%'],['Ms Word', '75%'],['Machin Learning','55%'] ]

function Skills() {
  return <Section id="skills" title="Skills"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skills.map(([skill, value]) => <article key={skill} className="rounded-xl bg-black/30 p-4"><div className="flex justify-between gap-3"><h3 className="font-bold">{skill}</h3><span>{value}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-cyan-300" style={{ width: value }} /></div></article>)}</div></Section>
}

export default Skills
