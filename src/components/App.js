import React, { Component } from 'react';
import '../containers/App.css'
import Listings from '../containers/Listings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeadNav } from './HeadNav';
import { Home } from './Home';
import { About } from './About';
import { Footer } from './Footer';
import '../containers/App.css';
import ListingForm from '../containers/ListingForm';
import Listing from '../containers/Listing';




// stateless component
// match object gets auto passed into props via Route component
const App = (props)  => {

        return (
            <div className="App">
                <div className="appContent">
                    
                    <Router>
                        <React.Fragment>
                            <HeadNav />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/new" component={ListingForm} />
                            <Route exact path="/listings/:listing_id" component={Listing} />
                        </React.Fragment>
                    </Router>
                </div>
               <Footer />
            </div>
        );
}

export default App;

