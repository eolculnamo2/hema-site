import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'

class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('click', e => {
            if (window.innerWidth < 801) {
                 if (e.target.id === 'arrow-wrapper') {
                     this.menuVisible(true) 
                 }
                 else {
                     this.menuVisible(false)
                 }
             }
        })
 
        window.addEventListener('resize', () => {
             if (window.innerWidth < 801) {
                 this.menuVisible(false)
             }
             else {
                 this.menuVisible(true)
             }
        })
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
    render(){
        return(
            <div className='header'>
                <div id="arrow-wrapper">
                    <div className="down-arrow down-arrow--up">
                    </div>
                    <div className="down-arrow down-arrow--down">
                    </div>
                </div>
                <div  class="half-way">
                </div>
                <div className="links">
                                <Link to='/'><span>Home</span></Link>
                                <Link to='/articles'><span>Articles</span></Link>
                                <Link to='/contribute'><span>Contribute</span></Link>
                                <span id="dropdown-wrap">
                                <span id='dropdown-name'>Profile</span>
                                <ul className="dropdown-links">
                                    <li><Link to='/profile'>My Profile</Link></li>
                                    <li><Link to='/profile'>Edit Profile</Link></li>
                                    <li><Link to='/profile'>Log Out</Link></li>
                                </ul>
                                </span>
                                {/*<Link to='/gear-list'><span>Gear List</span></Link>*/}
                </div>
            </div>
        )
    }
}

export default Header