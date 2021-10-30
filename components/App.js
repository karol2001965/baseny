import React , {lazy , Suspense} from 'react';
import { BrowserRouter, Route, Switch ,Router } from 'react-router-dom'

import './App.scss';

import Navbar from './navbar.js';

// import Main from './main.js';
// import Realizacje from './realizacje.js';
// import Kontakt from './kontakt.js';
// import Sklep from './sklep';

import Produkty1 from './produkty1';
import Produkty2 from './produkty2';
import produkty3 from './produkty3';
import Produkty4 from './produkty4';



const Main= lazy(() => import('./main'));
const Realizacje= lazy(() => import('./realizacje'));
const Kontakt= lazy(() => import('./kontakt'));
const Sklep= lazy(() => import('./sklep'));

// const Produkty1= lazy(() => import('./produkty1'));
// const Produkty2= lazy(() => import('./produkty2'));
// const produkty3= lazy(() => import('./produkty3'));
// const produkty4= lazy(() => import('./produkty4'));
const Footer= lazy(() => import('./footer'));





class App extends React.Component {
  state = {
    source: "",
    flaga: false
  }
  FlagaToggle = (item) => {
    this.setState({ flaga: !this.state.flaga })
    this.setState({ source: item })
    console.log(item);
    const body = document.querySelector("body");


    document.body.style = 'overflow:hidden;';

  }
  XClick = (e) => {
    e.stopPropagation();
    this.setState({ flaga: false })
    document.body.style = 'overflow:unset;';

  }
  render() {

    const mystylelight = {


      height: "40vw",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      opacity: "1"


    };




    let image;
    if (this.state.flaga) {
      image =
        <div  style={{
          top: "0",
          left: "0",
          zIndex: "999",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          Zindex: "998",
          backgroundColor: " rgba(0,0,0,0.9)",


        }}>
          <img className="img_big"src={this.state.source} ></img>
          <div onClick={this.XClick} style={{
            top: "0",
            right: "0",
            position: "fixed",
            height: "10vh",
            width: "10vw",
            Zindex: "999",
            color: "white",

            fontSize: "5vh",
            opacity: "1",
            display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor:"pointer"
          }}>X
        </div>

        </div>

    }


    return (

      <BrowserRouter>
        <div className="App">
          {image}
          <Navbar data={this.FlagaToggle} />
          <Suspense fallback={<div className="lazy"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}>
          <Main />


          <Realizacje data={this.FlagaToggle} />
          <Kontakt />


          <Sklep />

          <Switch>

          <Route path='/akcesoria' render={props => <Produkty2 flaga={this.FlagaToggle} {...props} />}/>
              <Route path='/pokrycia' component={produkty3} />
              <Route path='/baseny'  render={props => <Produkty4 flaga={this.FlagaToggle} {...props} />}/> />
              <Route exact path='/' render={props => <Produkty1 flaga={this.FlagaToggle} {...props} />}/> />
          </Switch>
          <Footer />
          </Suspense>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
