import React from 'react';
import './sklep.scss';


class produkty4 extends React.Component {
    state = {
        posts: [

            {
                nazwa: 'produkt1', cena: '50zl', opis:''

            },




        ]


    }
    handlere= (e) =>{
        this.props.flaga(e.target.src)
         }

    render() {

        const { posts } = this.state;
        const zdjecie = posts.zdjecie
        const PostList = posts.length ? (
            posts.map(post => {
                return (
                    <>




                        <div className="produkt_pojedynczy" >
                            <div className="container_zdjecie">
                                <img src={"/zdjecia/baseny/KIT460ECO/" + "1" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT460ECO/" + "2" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT460ECO/" + "3" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT460ECO/" + "4" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                            </div>
                            <div className="container_opis_nazwa">
                                <h2 className="produkty_nazwa">KIT460ECO</h2>
                                <p className="produkty_opis">
                                W skład zestawu KIT460ECO wchodzą:
                                <ul>
                                    <li>Stalowa konstrukcja basenu.</li>
                                    <li>Metalowe profile (słupki).</li>
                                    <li>Arkusz blachy (okalającej konstrukcję) wykonany z galwanizowanej, fosforowanej, zagruntowanej i pomalowanej, walcowanej na zimno stali, ciętej pionowo w celu zwiększenia wytrzymałości, z gotowymi otworami na umieszczenie skimmera, oraz złączki powrotu wody do basenu.
</li>
                                    <li>Wykładzina basenowa (liner) PVC o grubości 0,3 mm odporna na działanie promieni UV, co spowalnia „starzenie się” materiału z którego jest wykonana.
</li>
                                    <li>Piaskowy system filtracyjny o wydajności 2,6 m³/h .</li>
                                    <li>Drabinka dwustronna 3-stopniowa.</li>
                                    <li>Pojemność basenu to 17,5 m³.</li>
                                </ul>

                                WYMAGANY OBSZAR POD MONTAŻ BASENU TO 5 x 5 m.<br/>

                                Wymiary:    4,60 x 1,20 m.<br/>
                                Gwarancja w latach:    2.
                                Aby pobrać instrukcję <a href="./instrukcja-okragly.pdf" download>Kliknij tutaj.</a>
</p>
                            </div>

                            <h3 className="produkty_cena cena_szerokosc">3998.00zł</h3>
                        </div>








                        <div className="produkt_pojedynczy" >
                            <div className="container_zdjecie">
                                <img src={"/zdjecia/baseny/KITPROV918/" + "1" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPROV918/" + "2" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPROV918/" + "4" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPROV918/" + "3" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                            </div>
                            <div className="container_opis_nazwa">
                                <h2 className="produkty_nazwa">KITPROV918</h2>
                                <p className="produkty_opis">
                                W skład zestawu KITPROV918 wchodzą:
                                <ul>
                                    <li>Stalowa konstrukcja basenu.</li>
                                    <li>Metalowe profile (słupki).</li>
                                    <li>Arkusz blachy (okalającej konstrukcję) wykonany z galwanizowanej, fosforowanej, zagruntowanej i pomalowanej, walcowanej na zimno stali, ciętej pionowo w celu zwiększenia wytrzymałości, z gotowymi otworami na umieszczenie skimmera, oraz złączki powrotu wody do basenu.
</li>
                                    <li>Wykładzina basenowa (liner) PVC o grubości 0,4 mm odporna na działanie promieni UV, co spowalnia „starzenie się” materiału z którego jest wykonana.
</li>
                                    <li>Piaskowy system filtracyjny o wydajności 7 m³/h .</li>
                                    <li>Drabinka dwustronna 3-stopniowa.</li>
                                    <li>Mata ochronna pod basen.</li>
                                    <li>Pojemność basenu to 43,5 m³.</li>
                                </ul>

                                WYMAGANY OBSZAR POD MONTAŻ BASENU TO 5 x 5 m.<br/>

                                Wymiary: 9,15 x 4,7 x 1,32 m<br/>
                                Gwarancja w latach:    2.
                                Aby pobrać instrukcję <a href="./instrukcja-owalny.pdf" download>Kliknij tutaj.</a>
</p>
                            </div>

                            <h3 className="produkty_cena cena_szerokosc">10812.00zł</h3>
                        </div>






                        <div className="produkt_pojedynczy" >
                            <div className="container_zdjecie">
                                <img src={"/zdjecia/baseny/KIT610ECO/" + "1" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT610ECO/" + "2" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT610ECO/" + "4" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT610ECO/" + "3" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                            </div>
                            <div className="container_opis_nazwa">
                                <h2 className="produkty_nazwa">KIT610ECO</h2>
                                <p className="produkty_opis">
                                W skład zestawu KIT610ECO wchodzą:
                                <ul>
                                    <li>Stalowa konstrukcja basenu.</li>
                                    <li>Metalowe profile (słupki).</li>
                                    <li>Arkusz blachy (okalającej konstrukcję) wykonany z galwanizowanej, fosforowanej, zagruntowanej i pomalowanej, walcowanej na zimno stali, ciętej pionowo w celu zwiększenia wytrzymałości, z gotowymi otworami na umieszczenie skimmera, oraz złączki powrotu wody do basenu.
</li>
                                    <li>Wykładzina basenowa (liner) PVC o grubości 0,4 mm odporna na działanie promieni UV, co spowalnia „starzenie się” materiału z którego jest wykonana.
</li>
                                    <li>Piaskowy system filtracyjny o wydajności 2,6 m³/h .</li>
                                    <li>Drabinka dwustronna 3-stopniowa.</li>
                                    <li>Pojemność basenu to 21 m³.</li>
                                </ul>

                                WYMAGANY OBSZAR POD MONTAŻ BASENU TO 6,50 x 5,95 m <br/>

                                Wymiary:    6,10 x 3,75 x 1,20 m<br/>
                                Gwarancja w latach:    2.
                                Aby pobrać instrukcję <a href="./instrukcja-owalny.pdf" download>Kliknij tutaj.</a>
</p>
                            </div>

                            <h3 className="produkty_cena cena_szerokosc">5577.00zł</h3>
                        </div>






                        <div className="produkt_pojedynczy" >
                            <div className="container_zdjecie">
                                <img src={"/zdjecia/baseny/KITPR458/" + "1" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPR458/" + "2" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPR458/" + "4" + ".jpeg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPR458/" + "3" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                            </div>
                            <div className="container_opis_nazwa">
                                <h2 className="produkty_nazwa">KITPR458</h2>
                                <p className="produkty_opis">
                                W skład zestawu KITPR458 wchodzą
                                <ul>
                                    <li>Stalowa konstrukcja basenu.</li>
                                    <li>Metalowe profile (słupki).</li>
                                    <li>Arkusz blachy (okalającej konstrukcję) wykonany z galwanizowanej, fosforowanej, zagruntowanej i pomalowanej, walcowanej na zimno stali, ciętej pionowo w celu zwiększenia wytrzymałości, z gotowymi otworami na umieszczenie skimmera, oraz złączki powrotu wody do basenu.
</li>
                                    <li>Wykładzina basenowa (liner) PVC o grubości 0,4 mm odporna na działanie promieni UV, co spowalnia „starzenie się” materiału z którego jest wykonana.
</li>
                                    <li>Piaskowy system filtracyjny o wydajności 4,5 m³/h .</li>
                                    <li>Drabinka dwustronna 3-stopniowa.</li>
                                    <li>Pojemność basenu to 19,44 m³.</li>
                                </ul>

                                WYMAGANY OBSZAR POD MONTAŻ BASENU TO 5 x 5 m <br/>

                                Wymiary:    4,60 x 1,32 m<br/>
                                Gwarancja w latach:    2.
                                Aby pobrać instrukcję <a href="./instrukcja-okragly.pdf" download>Kliknij tutaj.</a>
</p>
                            </div>

                            <h3 className="produkty_cena cena_szerokosc">5850.00zł</h3>
                        </div>












                        <div className="produkt_pojedynczy" >
                            <div className="container_zdjecie">
                                <img src={"/zdjecia/baseny/KIT730ECO/" + "1" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT730ECO/" + "2" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT730ECO/" + "4" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KIT730ECO/" + "3" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                            </div>
                            <div className="container_opis_nazwa">
                                <h2 className="produkty_nazwa">KIT730ECO</h2>
                                <p className="produkty_opis">
                                W skład zestawu KIT730ECO wchodzą:
                                <ul>
                                    <li>Stalowa konstrukcja basenu.</li>
                                    <li>Metalowe profile (słupki).</li>
                                    <li>Arkusz blachy (okalającej konstrukcję) wykonany z galwanizowanej, fosforowanej, zagruntowanej i pomalowanej, walcowanej na zimno stali, ciętej pionowo w celu zwiększenia wytrzymałości, z gotowymi otworami na umieszczenie skimmera, oraz złączki powrotu wody do basenu.
</li>
                                    <li>Wykładzina basenowa (liner) PVC o grubości 0,4 mm odporna na działanie promieni UV, co spowalnia „starzenie się” materiału z którego jest wykonana.
</li>
                                    <li>Piaskowy system filtracyjny o wydajności 3,5 m³/h .</li>
                                    <li>Drabinka dwustronna 3-stopniowa.</li>
                                    <li>Pojemność basenu to 25 m³.</li>
                                </ul>

                                WYMAGANY OBSZAR POD MONTAŻ BASENU TO 7,50 x 5,75 m<br/>

                                Wymiary:    7,30 x 3,75 x 1,20 m<br/>
                                Gwarancja w latach:    2.
                                Aby pobrać instrukcję <a href="./instrukcja-owalny.pdf" download>Kliknij tutaj.</a>
</p>
                            </div>

                            <h3 className="produkty_cena cena_szerokosc">6915.00zł</h3>
                        </div>













                        <div className="produkt_pojedynczy" >
                            <div className="container_zdjecie">
                                <img src={"/zdjecia/baseny/KITPROV618/" + "1" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPROV618/" + "2" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPROV618/" + "4" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                                <img src={"/zdjecia/baseny/KITPROV618/" + "3" + ".jpg"} className="produkty_zdjecie baseny_zdjecie" onClick={this.handlere} ></img>
                            </div>
                            <div className="container_opis_nazwa">
                                <h2 className="produkty_nazwa">KITPROV618</h2>
                                <p className="produkty_opis">
                                W skład zestawu KITPROV618 wchodzą:
                                <ul>
                                    <li>Stalowa konstrukcja basenu.</li>
                                    <li>Metalowe profile (słupki).</li>
                                    <li>Arkusz blachy (okalającej konstrukcję) wykonany z galwanizowanej, fosforowanej, zagruntowanej i pomalowanej, walcowanej na zimno stali, ciętej pionowo w celu zwiększenia wytrzymałości, z gotowymi otworami na umieszczenie skimmera, oraz złączki powrotu wody do basenu.
</li>
                                    <li>Wykładzina basenowa (liner) PVC o grubości 0,4 mm odporna na działanie promieni UV, co spowalnia „starzenie się” materiału z którego jest wykonana.
</li>
                                    <li>Piaskowy system filtracyjny o wydajności 4,5 m³/h .</li>
                                    <li>Drabinka dwustronna 3-stopniowa.</li>
                                    <li>Mata ochronna pod basen.</li>
                                    <li>Pojemność basenu to 23,2 m³</li>
                                </ul>

                                WYMAGANY OBSZAR POD MONTAŻ BASENU TO 6,50 x 5,95 m  <br/>

                                Wymiary: 6,10 x 3,75 x 1,32 m<br/>
                                Gwarancja w latach:    2. <br/>
                                Aby pobrać instrukcję <a href="./instrukcja-owalny.pdf" download>Kliknij tutaj.</a>
</p>
                            </div>

                            <h3 className="produkty_cena cena_szerokosc">7537.00zł</h3>
                        </div>
                    </>
                )


            })
        ) : (<div> Loading</div>)
        return (

            <div className="main_container_sklep_produkty" >
                <div className="products">
                    {PostList}
                </div>
            </div>
        );
    }
}
export default produkty4;
