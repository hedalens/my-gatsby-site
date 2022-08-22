import { Link } from "gatsby"
import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import {
    nav,
    navlink
} from './header.module.css'

const Header = () => {
    return (
        <>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/logo.png"
      />
        <nav classname={nav}> 
            <ul>
                <li> <Link to="/" className={navlink}>Ökoskaudid</Link></li>
                <li><Link to="/" className={navlink}>Skautlusest</Link></li>
                <li><Link to="/" className={navlink}>Avasta</Link></li>
                <li><Link to="/" className={navlink}>Kontakt</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Header