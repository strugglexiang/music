import React, { Component } from 'react';
import logo from '../asserts/imgs/icon.svg'
import '../asserts/css/reset.css'
import './App.css';
// ------路由 
import Recommend from '../components/recommend/Recommend'
import Ranking from '../components/ranking/Ranking'
import Search from '../components/search/Search'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
// BrowserRouter HashRouter
class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <header className='app-header'>
                  <img src={logo} className='app-header-logo' alt=""/>
                  <h1 className='app-header-title'>music</h1>
              </header>
              <section className='app-section'>
                  <div className="app-section-recommend">
                      <NavLink  to='/recommend' className='nav-link' ><span>推荐</span></NavLink>
                  </div>
                  <div className="app-section-ranking">
                      <NavLink  to='/ranking' className='nav-link' ><span>排行</span></NavLink>
                  </div>
                  <div className="app-section-search">
                      <NavLink  to='/search' className='nav-link' ><span>搜索</span></NavLink>
                  </div>
              </section>
              <div>
                  <Switch>
                      <Route path='/recommend' component={ Recommend } />
                      <Route path='/ranking' component={ Ranking } />
                      <Route path='/search' component={ Search } />
                      <Redirect from='/'  to='/recommend'/>
                      <Route  component={ Recommend } />
                  </Switch>
             </div>  
          </div>        
        </Router>
    );
  }
}

export default App;
