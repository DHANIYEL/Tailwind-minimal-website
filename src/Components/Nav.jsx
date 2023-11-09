import { headerLogo } from "../assets/images";
import { Hamberger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x w-full py-8">
      <nav>
        <a href="#">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
