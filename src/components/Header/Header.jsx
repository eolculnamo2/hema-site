/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
/* eslint-disable indent */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/pictures/logo.png';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    fetch('/authenticate/checkLogin', {
      method: 'POST',
      body: null,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then((data) => {
        if (data.loggedIn) {
          this.setState({ loggedIn: true });
        }
      });

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        window.innerWidth < 801 ? this.menuVisible(false) : this.menuVisible(true);
      });

      const h = document.getElementsByClassName('header')[0];
      const l = document.getElementsByClassName('logo')[0];
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
          window.innerWidth < 800 ? h.style.padding = '5px 20px' : h.style.padding = '5px 40px';
          l.classList.add('header-smaller');
        } else if (window.pageYOffset < 100) {
          window.innerWidth < 800 ? h.style.padding = '25px 20px' : h.style.padding = '25px 40px';
          l.classList.remove('header-smaller');
        }
      });
    }
  }

  logout = () => {
    if (typeof window !== 'undefined') {
      fetch('/authenticate/logout', {
        method: 'POST',
        body: null,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
      })
        .then(res => res.json())
        .then((data) => {
            alert(data.data);
            window.location.reload();
          });
    }
  }

  menuVisible(show) {
    if (show === true) {
      document.getElementsByClassName('links')[0].style.display = 'flex';
    } else {
      document.getElementsByClassName('links')[0].style.display = 'none';
    }
  }

  links() {
    const { loggedIn } = this.state;
      if (loggedIn) {
        return (
          <div className="links">
            <Link to="/"><span>Home</span></Link>
            <span id="dropdown-wrap">
              <span id="dropdown-name">Articles</span>
              <ul className="dropdown-links">
                <Link to="/articles"><li>View All</li></Link>
                <Link to="/contribute"><li>Publish</li></Link>
              </ul>
            </span>

            <span id="dropdown-wrap">
              <span id="dropdown-name">Tournaments</span>
              <ul className="dropdown-links">
                <Link to="/about-tournaments"><li>About</li></Link>
                <Link to="/event-registration"><li>Registration</li></Link>
                <Link to="/create-tournament"><li>Manage Events</li></Link>
              </ul>
            </span>

            <span id="dropdown-wrap">
              <span id="dropdown-name">Profile</span>
              <ul className="dropdown-links">
                <Link to="/profile"><li>My Profile</li></Link>
                {/* <Link to='/profile'><li>Edit Profile</li></Link> */}
                <li onClick={this.logout}>Log Out</li>
              </ul>
            </span>
          </div>
        );
    } else {
        return (
          <div className="links">
            <Link to="/"><span>Home</span></Link>
            <span id="dropdown-wrap">
              <span id="dropdown-name">Articles</span>
              <ul className="dropdown-links">
                <Link to="/articles"><li>View All</li></Link>
                <Link to="/contribute"><li>Publish</li></Link>
              </ul>
            </span>

            <span id="dropdown-wrap">
              <span id="dropdown-name">Tournaments</span>
              <ul className="dropdown-links">
                <Link to="/about-tournaments"><li>About</li></Link>
                <Link to="/event-registration"><li>Registration</li></Link>
                <Link to="/create-tournament"><li>Manage Events</li></Link>
              </ul>
            </span>

            <span id="dropdown-wrap">
              <span id="dropdown-name">Account</span>
              <ul className="dropdown-links">
                <Link to="/login"><li>Login</li></Link>
                <Link to="/register"><li>Register</li></Link>
              </ul>
            </span>
          </div>
        );
      }
    }

  render() {
    return (
      <div className="header">
        <div id="arrow-wrapper">
          <div className="hamburger hamburger-line1" />
          <div className="hamburger hamburger-line2" />
          <div className="hamburger hamburger-line3" />
        </div>
        <div>
          <a href="/">
            <img className="logo" src={logo} alt="historical european martial arts logo" />
          </a>
        </div>
        {this.links()}
      </div>
    );
  }
}

export default Header;
