
import logo from '../assets/logo/logo.png';
import UserButtons from "./UserButtons";

const Header = () => {

    return (
        <header className='flex text-xl stick top-0 shadow-xl shadow-slate-400 bg-slate-950 px-8 py-4'>

            <a href="/">
                <img  className='h-16 px-2 ' src={logo} alt="Logo Loja"/>
            </a>

            <UserButtons />

        </header>

    )

};

export default Header;