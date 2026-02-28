import GifImage from "../assests/Code Driveby.gif";
const Home = () => {
  return (
    <div
      className="relative min-h-screen font-bold flex flex-col items-center justify-center  px-4 text-center "
      id="home"
    >
      <img
        src={GifImage}
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        alt=""
      />

      <div className="absolute inset-0 z-0 bg-linear-to-b from-[#020617] via-transparent to-[#020617]" />
      <h1 className="mb-3 md:text-3xl text-2xl uppercase ">
        Hi, I'm <span className="text-orange-500">Aakash</span>
      </h1>
      <p className=" md:text-6xl text-4xl sm:text-5xl uppercase">
        Frontend <span className="text-orange-500">Developer</span>
      </p>
      <p className="mt-5">
        Turning ideas into interactive, responsive websites
      </p>
      <div className=" mt-15 relative overflow-hidden rounded-2xl p-px w-fit">
        <div className="animate-border-spin absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <a href="/Resume_Aakash_Ojha.pdf" download="Resume_Aakash_Ojha.pdf">
          <button className="relative flex z-10 h-full w-full items-center justify-center px-8 py-3 rounded-2xl bg-slate-950 hover:bg-slate-900 cursor-pointer transition-colors">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
