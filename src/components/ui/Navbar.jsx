import { useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const closeNavbar = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className=" flex justify-between items-center z-10 bg-neutral-900 text-white h-20 px-5 md:fixed w-full py-5 md:py-0">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text-2xl cursor-pointer"
        >
          {"<Tony />"}
        </Link>

        <div className="hidden md:flex gap-5 capitalize items-center cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>

          <a
            href="https://drive.google.com/file/d/1ry27mHC3WvVOXeUdeq9u4E6X5TNm2S6X/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" bg-white text-black py-1 px-4">
              Download CV
            </button>
          </a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
            label="show menu"
          />
        </div>
      </div>
      {isOpen && (
        <div className=" bg-black absolute text-white flex flex-col space-y-10 right-0 pt-20 p-5 md:hidden">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeNavbar}
          >
            About
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeNavbar}
          >
            Work
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeNavbar}
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeNavbar}
          >
            Contact
          </Link>

          <a
            href="https://drive.google.com/file/d/1ry27mHC3WvVOXeUdeq9u4E6X5TNm2S6X/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" bg-white text-black py-1 px-4">
              Download CV
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

//
