import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import PokemonPage from '../components/pages/PokemonPage';
import PokemonsPage from '../components/pages/PokemonsPage';
import InicioPage from '../components/pages/InicioPage';
import Header from '../components/ui/navbar/Header';
import Favoritos from '../components/pages/Favoritos';


const AppRoutes = () => {
    return (
        <Router>
            <Header />
          <div>
            <Switch>
              <Route path="/favoritos" exact component={Favoritos}/>
              <Route path="/pokemons" exact component={PokemonsPage}/>
              <Route path="/pokemon/:id" exact component={PokemonPage}/>
              <Route path="/" exact component={InicioPage}/>
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
    )
}

export default AppRoutes
