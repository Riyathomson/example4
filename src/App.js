import React from 'react';
import Home from './pages/home';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import './App.css';
import About from './pages/about';
import Services from './pages/services';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Contact from './pages/contact';


export default function App() {
  return (
    <Router>
        <Switch>





        
        <Route path="/contact"  component={Contact}/>
        <Route path="/projects"  component={Projects}/>
        <Route path="/blog"  component={Blog}/>
        <Route path="/services"  component={Services}/>
        <Route path="/about"  component={About}/>
        <Route path="/"  component={Home}/>

         </Switch>
    </Router>
  );
}


