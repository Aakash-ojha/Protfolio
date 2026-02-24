import placeholder from "../assests/placeholder.webp";
const Card = () => {
  return (
    <div className="perspective-1000">
      <div className=" w-80 sm:w-90 md:w-120 lg:w-90 xl:w-135  border border-slate-800 rounded-3xl shadow-lg hover:transform-3d hover:rotate-x-30 hover:-translate-z-35 transition-transform duration-700 ease-in-out">
        <div className="p-5">
          <div
            className=" border border-slate-800 rounded-3xl
           bg-slate-900 p-8"
          >
            <img className="" src={placeholder} />
          </div>

          <h1 className="mt-5 font-bold tracking-wider text-3xl ">Projects</h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-5 mt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            repellat Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut repellat
          </p>
          <li className=" flex flex-row gap-3 justify-end items-center mt-10 text-orange-500 font-medium text-lg">
            <a href="https://github.com/Aakash-ojha">Check Live Site </a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-orange-500 fill-current"
            >
              <path
                d="M21 3L3 10.5L11.25 12.75L13.5 21L21 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="m-3 flex items-center justify-center " id="projects">
      <div className="py-4 md:px-20 flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-2xl font-semibold mt-10 mb-10">
          Featured <span className="text-orange-500">Projects</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-30 justify-center items-center gap-16">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Projects;
