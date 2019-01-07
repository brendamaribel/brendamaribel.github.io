import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {

  render() {

    return (

      <div className = "App">

        <header>
          <nav>

            <div className = "home">
             <Link className = "home-link" to ='/'>Home</Link>
            </div>

            <div className = "library">
             <Link className = "library-link" to = '/library'>Library</Link>
            </div>

          </nav>
        </header>


        <main className = "background">
           <Route exact path ="/" component = {Landing} />
           <Route path = "/library" component = {Library} />
           <Route path = "/album/:slug" component = {Album} />
        </main>

        <footer>
          <p id = "footer-text">2019 Harmonize</p>
        </footer>

     </div>
     
    );
  }
}

export default App;
