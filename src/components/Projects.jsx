import Section from "./Section";
const projects = [
  [
    "Air Ring Website",
    "I am developing an e-commerce website focused on earrings and fashion jewelry. The objective of this project is to build a clean, fast, and user-friendly platform where customers can easily explore different designs, view clear product details, and enjoy a smooth shopping experience. Currently, I am working on improving the UI/UX, adding product listings, setting up pricing, and implementing essential e-commerce features such as cart functionality, wishlist, and secure payment options. Along with this, I am focusing on performance optimization and mobile responsiveness to ensure the website is practical, scalable, and ready for real users—not just visually appealing but functionally strong as well.",
  ],
  [
    "Data Analysit",
    "I work as a freelancer where I handle data analysis projects end to end. My work includes collecting raw data, cleaning and filtering it to remove errors and inconsistencies, and transforming it into meaningful insights. I design **interactive dashboards** that clearly present key metrics and trends, helping clients make data-driven decisions. I focus on accuracy, clarity, and usability—so the final dashboards are not just visually clean, but actually useful for real business analysis and decision-making.",
  ],
  [
    "Wifi-Car",
    "I have built a Wi-Fi controlled car that can be operated using a mobile phone In this project a microprocessor/microcontroller is used as the main control unit, which receives commands over a Wi-Fi connection and processes them in real time. The car uses DC motors for movement, allowing it to move forward, backward, left, and right based on user input. This project demonstrates practical skills in embedded systems, wireless communication, and motor control, and shows how hardware and software can be integrated to create a real-time remote-controlled system.",
  ],
];
function Projects() {
  const showLinkMessage = () =>
    window.alert(
      "Add your project GitHub or live-demo URL in src/components/Projects.jsx to enable this link.",
    );
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-5 sm:space-y-6">
        {projects.map(([title, description]) => (
          <article
            key={title}
            className="rounded-r-xl rounded-bl-xl border-l-4 border-cyan-300 bg-black/30 p-4 transition hover:scale-[1.02] sm:p-5"
          >
            <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed sm:m-3 sm:text-base">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={showLinkMessage}
                className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-400"
              >
                GitHub Code
              </button>
              <button
                type="button"
                onClick={showLinkMessage}
                className="rounded-md border border-white/70 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
              >
                Live Demo
              </button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
export default Projects;
