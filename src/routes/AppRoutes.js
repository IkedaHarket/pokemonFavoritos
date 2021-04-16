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
const AppRoutes = () => {
    return (
        <Router>

          <div>
            <Switch>
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
