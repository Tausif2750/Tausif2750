function Section({ id, title, children }) {
  return <section id={id} className="scroll-mt-16 px-5 py-16 sm:px-8 sm:py-20 lg:px-[10%] lg:py-28"><h2 className="mb-5 text-3xl font-bold text-cyan-300 sm:text-4xl">{title}</h2>{children}</section>
}
export default Section
