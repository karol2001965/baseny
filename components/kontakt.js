import React from 'react';
import './kontakt.scss';




function kontakt() {
    return (
        <div className="kontakt_container" id="kontakt">

            <div className="section_name_kontakt">
                <p>KONTAKT<hr></hr></p>


            </div>

            <div className="section_rest">
                <div className="section_konakt_options">
                    <p><b>Numer telefonu:</b></p>
                    <p>Robert Grotowski: 602 772 599</p>
                </div>
                <div className="section_konakt_options">
                <p><b>Facebook:</b></p>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasenykrcenter%2F&tabs=timeline&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="130"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            </div>


            <div className="section_konakt_options">
                <p><b>E-mail:</b></p>
                <p className="biuro" >biuro@kr-center.pl</p>
                </div>


            </div>
        </div>
    );
}

export default kontakt;
