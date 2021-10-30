import React from 'react';
import './navbar.scss';
import { render } from '@testing-library/react';
import Logo from './krpop.png';
import { Link } from "react-scroll";

class Navbar extends React.Component {

    state = {
        active: false,
    };

    handlere = (e) => {
        this.props.data(e.target.src)
        console.log(this.props)
    }
    handlerhref = () => {

        this.setState({ active: !this.state.active });
        const body = document.querySelector("body");

        body.classList.toggle("toggle_body");

    }
    handlerBurger = () => {
        this.setState({ active: !this.state.active })
        const body = document.querySelector("body");

        body.classList.toggle("toggle_body");
    }







    render() {




        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);







        return (
            <div>
                <div className="container_my">
                    <div className="navbar_my">
                        <img src={Logo} className="logo_nav" onClick={this.handlere}></img>
                        <div className="elements_container hide_phone">
                            <Link
                                className="element"
                                activeClass="activee"
                                to="main"
                                spy={true}
                                smooth={true}
                                offset={-3}
                                duration={500}
                            >
                                <p>Start</p>
                            </Link>
                            <Link
                                className="element"
                                activeClass="activee"
                                to="realizacje"
                                spy={true}
                                smooth={true}
                                offset={-2}
                                duration={500}
                            >
                                <p>Nasze<br></br> realizacje</p>
                            </Link>
                            <Link
                                className="element"
                                activeClass="activee"
                                to="kontakt"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <p>Kontakt</p>
                            </Link>
                            <Link
                                className="element"
                                activeClass="activee"
                                to="sklep"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <p>Sklep</p>
                                </Link>
                        </div>
                        <div className={this.state.active ? " burger toggle_burger" : " burger"} onClick={this.handlerBurger}>

                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </div>

                </div>
                <div className={this.state.active ? " elements_container open_phone navbar_phone_active" : " elements_container open_phone"} >
                    <a href="#main" className={this.state.active ? "element_anim element " : "element"} onClick={this.handlerhref}  >
                        <p className={this.state.active ? "element_anim p_anim " : "p_anim"}  >Start</p>
                    </a>
                    <a href="#realizacje" className={this.state.active ? "element_anim1 element " : "element"} onClick={this.handlerhref}>

                        <p className={this.state.active ? "element_anim1 p_anim" : "p_anim"} >Nasze<br></br> realizacje</p>
                    </a>
                    <a href="#kontakt" className={this.state.active ? "element_anim2 element " : "element"} onClick={this.handlerhref}>
                        <p className={this.state.active ? "element_anim2 p_anim" : "p_anim"}>Kontakt</p>
                    </a>
                    <a href="#sklep" className="element" className={this.state.active ? "element_anim3 element " : "element"} onClick={this.handlerhref}>
                        <p className={this.state.active ? "element_anim3 p_anim" : "p_anim"}>Sklep</p>
                    </a>
                </div>
            </div >
        );
    }
}
export default Navbar;
