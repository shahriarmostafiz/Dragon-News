import { Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png"
const Nav = () => {
    const links = <>
        <li><NavLink to={'/'}>Home </NavLink></li>
        <li><NavLink to={'/'}>About  </NavLink></li>
        <li><NavLink to={'/'}> Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="w-10 rounded-full">
                        <img src={user} />
                    </div>
                    <Link to={'/login'} className="btn" >Login </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;