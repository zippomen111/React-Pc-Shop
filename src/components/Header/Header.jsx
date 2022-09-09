import React from 'react'
import { Link } from "react-router-dom";

import logo from '../../assets/img/header-logo.png'
import cart from '../../assets/img/header-cart.png'
import "./index.scss"

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="PC logo" />
                    </Link>
                </div>
                <div className="header__cart">
                    <Link to="/cart">
                        <span> 0 </span>
                        <div className='header__cart--line'></div>
                        <img src={cart} alt="cart" />
                    </Link>
                </div>

            </div>
        </header>
    )
}