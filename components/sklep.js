import React from 'react';
import './sklep.scss';
import {Link,NavLink} from 'react-router-dom'
function sklep() {
    return (
        <div className="main_container_sklep" id="sklep">
            <div className="section_name">
                <p>SKLEP</p>
                <hr></hr>
        <span>zamówienia pod nr. 510 242 908</span>

            </div>
            <div className="container_sklep_nav">


                    <NavLink to="/" exact className="nav_options"><p>CHEMIA</p></NavLink>
                    <NavLink to="/akcesoria" className="nav_options"><p>AKCESORIA</p></NavLink>
                    <NavLink to="/pokrycia" className="nav_options"><p>POKRYCIA</p></NavLink>
                    <NavLink to="/baseny" className="nav_options"><p>BASENY</p></NavLink>




            </div>

            </div>
            );
        }

        export default sklep;
