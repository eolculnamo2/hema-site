/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PushMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: null, // initialized to null to avoid initial animation,
      selectedLink: '',
      links: [],
    };

    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    const { menu } = this.props;
    // add resize listener to close on resize
    this.autoCloseOnExpand();
    // Set menu from props
    this.setState({ links: menu });

    if (window) {
      const pushLink = document.getElementById('arrow-wrapper');
      // On Click listener
      pushLink.addEventListener('click', () => {
        this.toggleBody();
        const menuVar = document.getElementsByClassName('pos__wrapper-main')[0];
        menuVar.style.top = `${window.pageYOffset}px`;
        // add background div
        const bgDiv = document.createElement('DIV');
        bgDiv.classList.add('pos-dark-bg');
        bgDiv.id = 'dark-bg';
        bgDiv.style.top = `${window.pageYOffset}px`;
        bgDiv.onclick = this.closeMenu;
        document.body.appendChild(bgDiv);
        this.setState({ selectedLink: '' });
      });
    }
  }

  autoCloseOnExpand() {
    if (window) {
      window.addEventListener('resize', () => {
        this.closeMenu(true);
      });
    }
  }

  toggleBody(resize) {
    const { open } = this.state;
    if (window) {
      // toggle value
      // resize sets it to null to avoid flashing menu
      const bodyWrap = document.body; // document.getElementById('app');
      const toggledValue = resize ? null : open === false || open === null;
      // lock body
      bodyWrap.style = toggledValue === true ? 'overflow: hidden;' : '';
      this.setState({ open: toggledValue });
    }
  }

  closeMenu(resize) {
    if (window) {
      const darkBg = document.getElementById('dark-bg');
      this.toggleBody(true);
      // resize sets it to null to avoid flashing menu
      this.setState({ open: resize ? null : false }, () => {
        if (darkBg) {
          darkBg.remove();
        }
      });
    }
  }

  // eslint-disable-next-line consistent-return
  subLinks(category, arr) {
    const { selectedLink } = this.state;
    if (selectedLink === category) {
      return (
        <div>
          {arr.map(y => (
            <Link onClick={this.closeMenu} key={y.subName} to={y.link || '#'}>
              <div className="pos-sub-link-item">{y.subName}</div>
            </Link>
          ))}
        </div>
      );
    }
  }

  selectLink(name) {
    const { selectedLink } = this.state;
    const nameUpdate = selectedLink !== name ? name : '';
    this.setState({ selectedLink: nameUpdate });
  }

  render() {
    const { open, links } = this.state;

    if (open) {
      return (
        <div
          className={
              open
                ? 'pos__wrapper-main pos__wrapper-animation-open'
                : open === false
                  ? 'pos__wrapper-main pos__wrapper-animation-close'
                  : 'pos__wrapper-main'
          }
        >
          {/* MENU HEADER */}
          <h3 className="mobile-menu-header">Sword Point</h3>
          {links.map((x) => {
            { /* ONE WRAPS WITH LINK, THE OTHER DOES NOT */ }
            if (x.link) {
              return (
                <Link onClick={this.closeMenu} key={x.name} to={x.link}>
                  <div
                    onClick={this.selectLink.bind(this, x.name)}
                    className="pos-link-item"
                  >
                    {x.name}
                    {this.subLinks(x.name, x.subcategories)}
                  </div>
                </Link>
              );
            } else {
              return (
                <div
                  onClick={this.selectLink.bind(this, x.name)}
                  className="pos-link-item"
                  key={x.name}
                >
                  {x.name}
                  {this.subLinks(x.name, x.subcategories)}
                </div>
              );
            }
          })}
        </div>
      );
    } else {
      return <div style={{ display: 'none' }} />;
    }
  }
}

PushMenu.defaultProps = {
  menu: [],
};

PushMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  menu: PropTypes.array,
};
export default PushMenu;
