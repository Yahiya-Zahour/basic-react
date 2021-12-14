import React from 'react';
import MainBody from '../A-Body/MainBody';
import Footer from '../A-Footer/Footer';
import Header from '../A-Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Header/>
            <MainBody/>
            <Footer />
            <Router>
                <Switch>
                    <Route>
                        
                    </Route>
                </Switch>
                </Router>
        </div>
    );
};

export default Landing;