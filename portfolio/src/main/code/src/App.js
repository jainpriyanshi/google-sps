import React from 'react';
import Typist from './components/typist';
import About from './components/about';
import Project from './components/project';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Contact from './components/contact'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div >
       <Router>
       		<Navbar />
            <Route exact path="/" component={Typist} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
        </Router>
    </div>
  );
}

export default App;
