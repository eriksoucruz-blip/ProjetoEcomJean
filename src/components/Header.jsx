import logo from "../assets/logo/logo.png";
import UserButtons from "./UserButton";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full flex items-end justify-between px-8 py-4 bg-slate-950 text-base shadow-xl shadow-slate-400 z-50">
      <a href="/">
        <img className="h-16 px-2 " src={logo} alt="Logo Loja" />
      </a>

      <UserButtons />
    </header>
  );
};

export default Header;
