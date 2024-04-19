import React, { useRef, useState } from "react";
// import logo from "../../assets/logo.svg";
import logo from "../../assets/logo.png"
import "./Navbar.css"
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


const Navbar = ()=>{
    const [ menu, setMenu ] = useState("home");
    const menuRef = useRef();

    const openMenu = ()=>{
        menuRef.current.style.right ="0";
    }

    const closeMenu = ()=>{
        menuRef.current.style.right ="-350px";
    }


    return(
        <div className="navbar" >
            <img src={logo} alt="" className="logo" />
            <img src={menu_open} onClick={openMenu} className="nav-mob-open"/>
            <ul ref={menuRef}  className="nav-menu">
                <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
                <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img className="underline-img" src={underline} />:<> </>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")} >About Me</p></AnchorLink>{menu==="about"?<img className="underline-img" src={underline} />:<> </>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img className="underline-img" src={underline} />:<> </>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img className="underline-img" src={underline} />:<> </>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img className="underline-img" src={underline} />:<> </>}</li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>  
            </div>
        </div>
    )
}

export default Navbar;