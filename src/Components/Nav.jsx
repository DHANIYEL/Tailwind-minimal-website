import { headerLogo } from "../assets/images";
// import { Hamberger } from "../assets/icons";

import { navLinks } from "../Constants/index";

const Nav = () => {
  return (
    <header className="padding-x w-full py-8 absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-between items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              ></a>

              {item.label}
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
