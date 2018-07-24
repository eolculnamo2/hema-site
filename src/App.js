
import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './scss/main.scss'
import LandingPage from './components/LandingPage/LandingPage';
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import Contribute from './components/Contribute/Contribute';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';

class App extends React.Component {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Sword Point </title>
                    <script src='https://www.google.com/recaptcha/api.js'></script>
                    <meta name="description" content="Read, share, discuss, and publish about Historical European Martials Arts (HEMA) also known as the Martial Arts of Renaissance Europe. Getting started with HEMA?  Check out our beginner's guides? Experienced renaissance martial artist? Why not submit an article?" />
                    <link rel="icon" href="https://image.ibb.co/c76tRy/head_icon.png" sizes="16x16 32x32" type="image/png" /> 
                    <meta name="keywords" content="HEMA, ARMA, longsword, spear, sword, buckler, pike, staff, mma, martial arts, wrestling, grappling, boxing, fighting, fight, learn, gear, fencing" />
                </Helmet>
                <Header />
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/articles' component={Articles} />
                    <Route exact path='/contribute' component={Contribute} />
                    {/* <Route exact path='/profile/:user' render={ props => (
                        <Profile {...props} />
                    )} /> */}
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/article/:article' render={ props => (
                        <Article {...props} />
                    )} />
                    <Route exact path='/admin' render={ () => (
                        <Admin />
                    )} />
                <Footer />
           </div>
        )
    }
}

export default App