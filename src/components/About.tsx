import Profile from "../assests/profile.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 mt-4 md:px-20 bg-slate-900/50 text-white border-0.5"
    >
      <h2 className="text-4xl font-bold text-center md:text-left mb-5">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-2/3 space-y-4 order-2 md:order-1">
          <p className="text-lg">
            Hi! I'm Aakash, a Frontend Developer passionate about building
            interactive, responsive websites.
          </p>
          <p className="text-lg">
            I specialize in modern web technologies like React, Tailwind CSS,
            and JavaScript. My goal is to transform complex ideas into simple,
            elegant web experiences.
          </p>
          <p className="text-lg">
            Outside coding, I enjoy photography, hiking, and exploring new tech
            trends.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center order-1 md:order-2">
          <div className="w-24 sm:w-40 md:w-64 aspect-square overflow-hidden rounded-full shadow-2xl bg-slate-800 flex items-center justify-center">
            <img
              src={Profile}
              alt="Aakash"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
