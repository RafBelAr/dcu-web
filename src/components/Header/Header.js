import userIcon from '../../images/icons/user.svg'
import hamburgerIcon from '../../images/icons/hamburger.svg'

function getLink () {
    if (document.cookie.includes("cookie-logged")) {
        return "/Notificaciones";
    } else {
        return "/Login"
    }
}

function Header () {
    let loginLink = getLink();
    return (
        <div className="w-full p-7 flex flex-row justify-between border-b-blue-200 border-solid border-2">
            <div className='sm:hidden sm:transitio'>
                <img src={hamburgerIcon} alt='hamburger' />
            </div>
            <div className='flex flex-stretch text-2xl font-semibold hover:font-bold'>
                <a href='/Home'>
                    <p className="m-1 self-center px-4">E-Cademy</p>
                </a>
            </div>
            
            <div className='p-3 rounded-3xl bg-slate-200 hover:bg-slate-300 hover:scale-105'>
                <a href={loginLink} >
                    <img src={userIcon} alt="User Icon" />
                </a>
            </div>
            
        </div>
    );
}

export default Header;