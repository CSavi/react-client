import React, { Component } from 'react';
import '../containers/App.css'
import Listings from '../containers/Listings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Footer } from './Footer';
import './App.css';
import ListingForm from '../containers/ListingForm';



// stateless component
class App extends Component {

    render() {  
        return (
            <div className="App">
                <div className="appContent">
                    <Listings />
                    <Router>
                        <React.Fragment>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/new" component={ListingForm} />
                        </React.Fragment>
                    </Router>
                </div>
               <Footer />
            </div>
        );
    }
}

export default App;

