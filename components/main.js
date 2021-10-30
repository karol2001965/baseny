import React from 'react';
import './navbar.scss';

import Logo from './krpop.png';

function Maie() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
        <div className="main_container" id="main">
            <div className="main">
                    <img src={Logo} className="logo_main"></img>
                    <div className="text">
                        <h1>KR-CENTER</h1>
                        <h2>Firma z 20 letnim doświadczeniem zajmująca się budową i renowacją
                            basenów. Właścicielem firmy jest Robert Grotowski
                           . Liczba zbudowanych basenów przekroczyła granicę 200. Gwarancja jakości oraz setki zadowolonych klientów.
            </h2>

                </div>
                <div className="main_scroll"></div>
                <div className="main_footer">
                    <span></span>
                </div>
            </div>

        </div>

    );
}

export default Maie;
