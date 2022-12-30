import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import './HeaderNavbar.css';
import { WiDaySnowThunderstorm } from "react-icons/wi";

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <WiDaySnowThunderstorm className="logo_icon" size={70} color='#5e63b6' />
        {/* <h3 className='logo'>Logo</h3> */}
        <div className='logo_name'>Storm <span>Factor</span></div>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <Link to='/' className='home'>
              <li>Home</li>
            </Link>
            <Link to='/daily' className='daily'>
              <li>Daily</li>
            </Link>
            <Link to='/hourly' className='hourly'>
              <li>Hourly</li>
            </Link>
            <Link to='/news' className='news'>
              <li>News</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Header
