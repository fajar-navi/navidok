// coba source 2

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiXCircle, FiAlignRight, FiChevronDown } from 'react-icons/fi';

const Navbarmenu = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [isResponsiveClose, setIsResponsiveClose] = useState(false);
    const toggleClass = () => {
        setIsMenu(prevIsMenu => !prevIsMenu);
        setIsResponsiveClose(prevIsResponsiveClose => !prevIsResponsiveClose);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(prevIsMenuSubMenu => !prevIsMenuSubMenu);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }

    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">

                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/"></NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav">

                            {/* Responsive Menu Button */}
                            {isResponsiveClose ? (
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                  <FiXCircle />
                </span>
                            ) : (
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                  <FiAlignRight />
                </span>
                            )}

                            <ul className={boxClass.join(' ')}>
                                <li className="menu-item">
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}>HOME</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/company`}>THE COMPANY</NavLink>
                                </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
                                    <Link to="#">
                                        OUR USERS<FiChevronDown />
                                    </Link>
                                    <ul className={boxClassSubMenu.join(' ')}>
                                        <li>
                                            <NavLink onClick={toggleClass} activeClassName='is-active' to={`/shipowners`}>SHIP OWNERS & OPERATORS</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={toggleClass} activeClassName='is-active' to={`/shipyardowners`}>SHIPYARD OWNER</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={toggleClass} activeClassName='is-active' to={`/supportingindustries`}>SUPPORTING INDUSTRIES</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={toggleClass} activeClassName='is-active' to={`/individuals`}>INDIVIDUALS</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/products`}>OUR PRODUCTS</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink onClick={toggleClass} activeClassName='is-active' to={`/#contact`}>HELP CENTER</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbarmenu;