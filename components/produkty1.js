import React from 'react';
import './sklep.scss';
import axios from 'axios';

class produkty1 extends React.Component {
    state = {
        active_photo:false,
        posts: [


        ]



    }
    componentDidMount() {
        axios.get()
            .then(res => {
                this.setState({
                    posts: res.data
                })
                console.log(res);
            })
            .catch(res => { console.log(res) })
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

                    <div className="produkt_pojedynczy" key={post.id}>
                        <div className="container_zdjecie">
                            <img src={"/zdjecia/sklepchemia/" + post.id + ".jpg"} className="produkty_zdjecie" onClick={this.handlere}></img>
                        </div>
                        <div className="container_opis_nazwa">
                            <h2 className="produkty_nazwa">{post.nazwa}</h2>
                            <p className="produkty_opis">{post.opis}</p>
                        </div>
                        <p className="produkty_waga">{post.ilosc}</p>

                        <h3 className="produkty_cena cena_szerokosc">{post.cena}</h3>
                    </div>
                )


            })
            ) : (<div className="lazy_sklep"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
        console.log(this.state.posts.id);


        return (

            <div className="main_container_sklep_produkty">
                {PostList}
            </div>
        );
    }
}
export default produkty1;
