import React from 'react';
import './sklep.scss';
import Karuzela from './karuzela';
import axios from 'axios';

import Logoprb from './main.jpg';
// import folder from './zdjecia/nowy.JPG';


class realizacje extends React.Component{
  state = {
    posts: [


    ]



}
componentDidMount() {
    axios.get('https://karol2001965.usermd.net/skrypt/sklep_skrypt.php')
        .then(res => {
            this.setState({
                posts: res.data
            })
              console.log(res.data);
        })
        .catch(res => { console.log(res) })
}

handlere= (e) =>{
  this.props.data(e.target.src);
   }
  render(){
    console.log(this.state.posts);
    const sciezka = "/zdjecia/realizacje"
        const { posts } = this.state;
        const zdjecie = posts.zdjecie;
        const PostList =
            posts.map(post => {
                return (

                  <div className="realizacje_elements">
                  <p>{post.nazwa}<br/>{post.typ}</p>
                  <img src={"/zdjecia/realizacje/" + post.zdjecie1} onClick={this.handlere}></img>
                  <img src={"/zdjecia/realizacje/" + post.zdjecie2} onClick={this.handlere} ></img>

                </div>
                )


            })

  return (
    <div className="realzacje_container" id="realizacje">
      <div className="section_name">
        <p>REALIZACJE</p>
        <hr></hr>
        <span>Wybrane realizacje z ponad 200 zbudowanych basenów</span>
      </div>
      <div className="realizacje_elements_container">

        {PostList}
      </div>

    </div>
  );
}
}

export default realizacje;
