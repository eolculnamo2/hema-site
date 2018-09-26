import React from 'react'
import logo from '../../../assets/pictures/logo.png'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'

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
            window.addEventListener('click', e => {
                if (window.innerWidth < 801) {
                    e.target.id === 'arrow-wrapper' || e.target.className.split(" ")[0] === 'down-arrow' ? this.menuVisible(true) : this.menuVisible(false)
                }
            })
    
            window.addEventListener('resize', () => {
                window.innerWidth < 801 ? this.menuVisible(false) : this.menuVisible(true)
            })
        }
    }
    menuVisible(show) {
        if(show === true) {
             document.getElementsByClassName('links')[0].style.display = 'flex'


             document.getElementsByClassName('down-arrow--down')[0].style.display = 'none'
             document.getElementsByClassName('down-arrow--up')[0].style.display = 'block'
            
        }
        else {
             document.getElementsByClassName('links')[0].style.display = 'none'
             document.getElementsByClassName('down-arrow--up')[0].style.display = 'none'
             document.getElementsByClassName('down-arrow--down')[0].style.display = 'block'
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
                    <div className="down-arrow down-arrow--up">
                    </div>
                    <div className="down-arrow down-arrow--down">
                    </div>
                </div>
                <div class="half-way">
                    <a href='/'><img className='logo' src={logo} /></a>
                </div>
                {this.links()}
            </div>
        )
    }
}

export default Header