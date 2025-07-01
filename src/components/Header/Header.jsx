import React, {useState } from "react";
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () =>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return(
        <div className='Header1'>
        
            <header className='header' >
            
                <div>
                <nav> <h2><Link to="/" className='vinav'>Vivekanad College</Link></h2></nav>
                </div>
                <nav className='navbar desktop-nav'>
                    <Link to="/home" className='nav'>Home</Link>
                    <Link to="/about" className='nav'>About</Link>
                    <Link to="/contact" className='nav'>Contact</Link>
                    <Link to="/course" className='nav'>Course</Link>
                    <Link to="/addmission" className='nav'>Addmission</Link>
                    <a href='/addmission' className="nav btn primary-btn">Apply Now!!</a>
                    </nav>
                    <button className="hamburger-menu" onClick={toggleDrawer}>
                        <span className='hamburger-icon'></span>
                        <span className='hamburger-icon'></span>
                        <span className='hamburger-icon'></span>
                    </button>
                    <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                        <button className="close-drawer-btn" onClick={toggleDrawer}></button>
                        <Link to="/home" className='nav' onClick={closeDrawer}>Home</Link>
                    <Link to="/about" className='nav' onClick={closeDrawer}>About</Link>
                    <Link to="/contact" className='nav' onClick={closeDrawer}>Contact</Link>
                    <Link to="/course" className='nav' onClick={closeDrawer}>Course</Link>
                    <Link to="/addmission" className='nav' onClick={closeDrawer}>Addmission</Link>
                    <Link to="/addmission" className="nav" onClick={closeDrawer}>
                    Apply Now!!
                    </Link>
                    </nav>
                    {isDrawerOpen && (
                        <div className="drawer-overlay" onClick={toggleDrawer}></div>
                    )}
                    



                
            </header>
        
        </div>
    );
}
export default Header; 