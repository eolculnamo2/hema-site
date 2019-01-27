import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'
import PushOffScreen from './components/PushOffScreen';
import mobileConfig from './js/MobileMenuConfig';
import logo from '../../../assets/pictures/logo.png'


class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false
        }
    }
    componentWillMount(){
        fetch('/authenticate/checkLogin',{
            method: "POST",
            body: null,
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
            .then( res => res.json())
            .then( data => {
                if (data.loggedIn) {
                    this.setState({loggedIn: true})
                }
            })
    }
    componentDidMount() {
        if(typeof window !== 'undefined'){
            window.addEventListener('resize', () => {
                window.innerWidth < 801 ? this.menuVisible(false) : this.menuVisible(true)
            })

            const h = document.getElementsByClassName('header')[0];
            const l = document.getElementsByClassName('logo')[0];
            window.addEventListener('scroll', () => {
                if(window.pageYOffset > 200) {
                    window.innerWidth < 800 ? h.style.padding="5px 20px" : h.style.padding="5px 40px";
                    l.classList.add('header-smaller');
                } else if(window.pageYOffset < 100) {
                    window.innerWidth < 800 ? h.style.padding="25px 20px" : h.style.padding="25px 40px";
                    l.classList.remove('header-smaller');
                }
            })
        }
    }
    menuVisible(show) {
        if(show === true) {
             document.getElementsByClassName('links')[0].style.display = 'flex'
        }
        else {
             document.getElementsByClassName('links')[0].style.display = 'none'
        }
    }
    logout(){
        if(typeof window !== 'undefined'){
            fetch('/authenticate/logout',{
                method: "POST",
                body: null,
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin"
                })
            .then(res => res.json())
            .then(data => {
                alert(data.data)
                window.location.reload()
            })
        }
    }
    links(){
        if(this.state.loggedIn) {
            return(
                <div className="links">
                    <Link to='/'><span>Home</span></Link>
                    <span id="dropdown-wrap">
                        <span id='dropdown-name'>Articles</span>
                        <ul className="dropdown-links">
                            <Link to='/articles'><li>View All</li></Link>
                            <Link to='/contribute'><li>Publish</li></Link>
                        </ul>
                    </span>

                    <span id="dropdown-wrap">
                        <span id='dropdown-name'>Tournaments</span>
                        <ul className="dropdown-links">
                            <Link to='/about-tournaments'><li>About</li></Link>
                            <Link to='/event-registration'><li>Registration</li></Link>
                            <Link to='/create-tournament'><li>Manage Events</li></Link>
                        </ul>
                    </span>
                    
                    <span id="dropdown-wrap">
                    <span id='dropdown-name'>Profile</span>
                    <ul className="dropdown-links">
                        <Link to='/profile'><li>My Profile</li></Link>
                        {/*<Link to='/profile'><li>Edit Profile</li></Link>*/}
                        <li onClick={this.logout.bind(this)}>Log Out</li>
                    </ul>
                    </span>
                </div>
            )
        }
        else {
            return(
                <div className="links">
                    <Link to='/'><span>Home</span></Link>
                    <span id="dropdown-wrap">
                        <span id='dropdown-name'>Articles</span>
                        <ul className="dropdown-links">
                            <Link to='/articles'><li>View All</li></Link>
                            <Link to='/contribute'><li>Publish</li></Link>
                        </ul>
                    </span>

                    <span id="dropdown-wrap">
                        <span id='dropdown-name'>Tournaments</span>
                        <ul className="dropdown-links">
                            <Link to='/about-tournaments'><li>About</li></Link>
                            <Link to='/event-registration'><li>Registration</li></Link>
                            <Link to='/create-tournament'><li>Manage Events</li></Link>
                        </ul>
                    </span>
                    
                    <span id="dropdown-wrap">
                        <span id='dropdown-name'>Account</span>
                        <ul className="dropdown-links">
                            <Link to='/login'><li>Login</li></Link>
                            <Link to='/register'><li>Register</li></Link>
                        </ul>
                    </span>
                </div>
            )
        }
    }
    render(){
        return(
            <div className='header'>
                <div id="arrow-wrapper">
                    <div className="hamburger hamburger-line1"></div>
                    <div className="hamburger hamburger-line2"></div>
                    <div className="hamburger hamburger-line3"></div>
                </div>
                <div>
                    <a href='/'><img className='logo' src={logo} /></a>
                </div>
                {this.links()}
            </div>
        )
    }
}

export default Header