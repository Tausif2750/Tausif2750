import profilePhoto from "../assets/whiteGPT.jpeg";
function Profile() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-16 flex-col-reverse items-center justify-center gap-8 px-5 pb-12 pt-24 text-center sm:px-8 sm:pt-28 lg:flex-row lg:justify-between lg:gap-12 lg:px-[10%] lg:pt-24 lg:text-left"
    >
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Hi, I'm <span className="text-cyan-300">Tausif Alam</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed sm:text-xl lg:text-2xl">
          I am doing graduation from Cimage College Patna. I'm a Web Developer
          and Data Analyst who enjoys solving real-world problems with code.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
          <a
            href="https://drive.google.com/drive/folders/1lJHbMStjs0M01vhPVBEVws7dWwoh0tls"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-cyan-300 px-5 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/70 px-5 py-3 font-bold transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
        <h2 className="mt-7 text-2xl font-bold text-green-500 drop-shadow-[0_8px_12px_rgb(221,220,220)] sm:text-3xl">
          Skills
        </h2>
        <p className="mt-3 text-base leading-relaxed sm:text-xl lg:text-2xl">
          I work with Python, SQL, Excel, C, Linux, and GitHub to solve problems
          and build clean, efficient solutions.
        </p>
      </div>
      <img
        src={profilePhoto}
        alt="Profile"
        className="h-72 w-52 shrink-0 rounded-2xl object-cover shadow-xl shadow-black sm:h-96 sm:w-72 lg:h-[500px] lg:w-[350px]"
      />
    </section>
  );
}
export default Profile;
