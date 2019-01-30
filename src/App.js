
import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './scss/main.scss'
import LandingPage from './components/LandingPage/LandingPage'
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import Contribute from './components/Contribute/Contribute'
import Profile from './components/Profile/Profile'
import Admin from './components/Admin/Admin'
import Register from './components/Authenticate/Register'
import Login from './components/Authenticate/Login'
import mobileConfig from './components/Header/js/mobileMenuConfig'
import AboutTournaments from './components/Tournaments/AboutTournaments/AboutTournaments'
import CreateTournament from './components/Tournaments/ManageEvents/CreateTournament'
import RegisterForEvent from './components/Tournaments/RegisterForEvent/RegisterForEvent'
import MyTournaments from './components/Tournaments/ManageEvents/MyTournaments/MyTournaments'
import MyEventView from './components/Tournaments/ManageEvents/MyEventView/MyEventView'
import JudgesTable from './components/Tournaments/Judges/JudgesTable'
import FourOhFour from './components/FourOhFour/FourOhFour'
import 'fetch-everywhere';
import PushOffScreen from './components/Header/components/PushOffScreen'
import LiveView from './components/Tournaments/LiveView/LiveView';
import MatchList from './components/Tournaments/accessories/MatchList';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false,
            loaded: false
        }
    }
    componentWillMount(){
        if(typeof window !== 'undefined') {
        fetch('/authenticate/checkLogin',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
            .then( res => res.json())
            .then( data => {
                if (data.loggedIn) {
                    this.setState({loggedIn: true})
                }
                this.setState({loaded: true})
            })
        }
    }
    render() {
       // if(this.state.loaded) {
            return(
                <div>
                    <Helmet>
                        <title>Sword Point</title>
                        <script src='https://www.google.com/recaptcha/api.js'></script>
                        <meta name="description" content="Read, share, discuss, and publish about Historical European Martials Arts (HEMA) also known as the Martial Arts of Renaissance Europe. Getting started with HEMA?  Check out our beginner's guides? Experienced renaissance martial artist? Why not submit an article?" />
                        <link rel="icon" href="https://image.ibb.co/c76tRy/head_icon.png" sizes="16x16 32x32" type="image/png" /> 
                        <meta name="keywords" content="HEMA, ARMA, longsword, spear, sword, buckler, pike, staff, mma, martial arts, wrestling, grappling, boxing, fighting, fight, learn, gear, fencing" />
                    </Helmet>
                    <div className="footer-at-bottom"> 
                        <Header />
                        <PushOffScreen menu={mobileConfig} />
                        <Switch>
                            <Route exact path='/' component={LandingPage} />
                            <Route exact path='/articles' component={Articles} />
                            <Route exact path='/contribute' component={Contribute} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/judges-table' component={MatchList} />
                            <Route exact path='/about-tournaments' component={AboutTournaments} />
                            <Route exact path='/live-view' component={LiveView} />
                            {<Route exact path='/create-tournament' render={ props => (
                                this.state.loggedIn ? <CreateTournament /> : <Redirect to="/login"/>
                            )} />}
                            {<Route exact path='/event-registration' render={ props => (
                                this.state.loggedIn ? <RegisterForEvent /> : <Redirect to="/login"/>
                            )} />}
                            {<Route exact path='/manage-tournaments' render={ props => (
                                this.state.loggedIn ? <MyTournaments /> : <Redirect to="/login"/>
                            )} />}
                            <Route exact path='/article/:article' render={ props => (
                                <Article {...props} />
                            )} />
                            {<Route exact path='/profile/:profile' render={ props => (
                                <Profile {...props} />
                            )} />}
                            {<Route exact path='/manage-tournaments/:tId/:event' render={ props => (
                                this.state.loggedIn ? <MyEventView {...props} /> : <Redirect to="/login"/>
                            )} />}
                            <Route exact path='/admin' render={ () => (
                                <Admin />
                            )} />
                            <Route component={FourOhFour}/>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            )
        }
        // else {
        //     return <div></div>
        // }
}

export default App