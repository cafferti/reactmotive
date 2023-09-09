import { Link, useLocation } from 'react-router-dom';
import logo from '../public/assets/shared/logo.svg'
import { useEffect } from 'react';
const Navbar = () => {
 
 const   location = useLocation()

    const active = (path) =>{
        if( location.pathname === path){
            return 'active'
        }
    }

    return ( 
        <div className="navbar">
            <img src={logo} alt="" />
            <hr />
            <div className="links" >
             <Link to={"/"} className={active("/")} ><span>00</span> Home</Link>
             <Link to={"/des"} className={active("/des")} > <span>01</span> Destination</Link>
             <Link to={"/crew"} > <span>02</span> Crew</Link>
             <Link to={"/tech"} ><span>03</span> Technology</Link>
            </div>
        </div>
     );
}
 
export default Navbar;