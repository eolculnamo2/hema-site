
import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'
import DocumentMeta from 'react-document-meta';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './scss/main.scss'
import LandingPage from './components/LandingPage/LandingPage';
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import Contribute from './components/Contribute/Contribute';
import Admin from './components/Admin/Admin';

class App extends React.Component {
    render() {
        const meta = {
            title: "Sword Point",
            description: "Read, share, discuss, and publish about Historical European Martials Arts (HEMA) also known as the Martial Arts of Renaissance Europe. Getting started with HEMA?  Check out our beginner's guides? Experienced renaissance martial artist? Why not submit an article?",
            meta: {
                charset: 'utf-8',
                name: {
                keywords: "HEMA, ARMA, longsword, spear, sword, buckler, pike, staff, mma, martial arts, wrestling, grappling, knight, knights, boxing, fighting, fight, learn, gear, fencing"
                }
            }
        }    
        return(
            <DocumentMeta {...meta}>
                <Header />
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/articles' component={Articles} />
                    <Route exact path='/contribute' component={Contribute} />
                    <Route exact path='/article/:article' render={ props => (
                        <Article {...props} />
                    )} />
                    <Route exact path='/admin' render={ () => (
                        //prompt('Please enter password')
                        <Admin />
                    )} />
                <Footer />
            </DocumentMeta>
        )
    }
}

export default App