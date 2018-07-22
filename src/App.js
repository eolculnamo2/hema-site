
import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'
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
        return(
            <div>
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
            </div>
        )
    }
}

export default App