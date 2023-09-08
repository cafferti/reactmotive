import logo from '../public/assets/shared/logo.svg'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={logo} alt="" />
            <hr />
            <div className="links" >
                 <p className='activehome' ><span>00</span> Home</p>
             <p> <span>01</span> Destination</p>
             <p> <span>02</span> Crew</p>
             <p><span>03</span> Technology</p>
            </div>
        </div>
     );
}
 
export default Navbar;