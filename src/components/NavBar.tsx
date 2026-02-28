import { useState, useEffect } from "react";
import logo from "../assests/logo.png";
import { HiX } from "react-icons/hi";
import { IoMenuSharp } from "react-icons/io5";

interface NavBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const NavBar: React.FC<NavBarProps> = ({ isOpen, toggle }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const homeSection = document.getElementById("home");
      const homeHeight = homeSection?.offsetHeight || 0;

      if (window.scrollY > lastScrollY && window.scrollY > homeHeight) {
        // Scrolling down AND past Home section
        setIsVisible(false);
      } else {
        // Scrolling up OR still inside Home
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-60 flex justify-between py-1 px-5 items-center border cursor-pointer md:rounded-br-2xl ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderColor: "rgba(255, 255, 255, 0.125)",
      }}
    >
      <div className="flex items-center">
        <img
          src={logo}
          className="rounded-full p-3 w-20 h-20 object-contain"
          alt="Aakash Ojha Logo"
        />
        <span className="text-lg font-semibold">Aakash Ojha</span>
      </div>
      {/* //desktop */}

      <div className="hidden md:flex flex-1 justify-center">
        <ul className="hidden md:flex  gap-10 items-center">
          {NAV_ITEMS.map((nav) => (
            <a key={nav.label} href={nav.href}>
              {nav.label}
            </a>
          ))}
        </ul>
      </div>

      {/* // mobile */}

      <div className="md:hidden relative ">
        {isOpen ? (
          <HiX onClick={toggle} className="text-3xl cursor-pointer" />
        ) : (
          <IoMenuSharp onClick={toggle} className="text-3xl cursor-pointer" />
        )}

        {isOpen && (
          <>
            <div className="fixed right-4 top-15 mt-2 z-50 h-fit md:w-80 sm:w-75 w-60 flex flex-col items-start justify-start py-8 px-4 rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-2xl opacity-100">
              <ul className="flex flex-col gap-5 w-30 justify-start text-white  ">
                {NAV_ITEMS.map((nav) => (
                  <a key={nav.label} href={nav.href} onClick={toggle}>
                    {nav.label}
                  </a>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
