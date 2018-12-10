import React from "react";
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'

class PushMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: null, //initialized to null to avoid initial animation,
      selectedLink: "",
      links: []
    };

    this.closeMenu = this.closeMenu.bind(this);
  }
  componentDidMount() {
    //add resize listener to close on resize
    this.autoCloseOnExpand();
    //Set menu from props
    this.setState({ links: this.props.menu });

    if (window) {
      let pushLink = document.getElementById("arrow-wrapper");
      //On Click listener
      pushLink.addEventListener("click", () => {
       
        this.toggleBody();
        //add background div
        let bgDiv = document.createElement("DIV");
        bgDiv.classList.add("pos-dark-bg");
        bgDiv.id = "dark-bg";
        bgDiv.onclick = this.closeMenu;
        document.body.appendChild(bgDiv);
        this.setState({ selectedLink: "" });
      });
    }
  }

  autoCloseOnExpand() {
    if(window) {
      window.addEventListener('resize', () => {
        this.closeMenu(true);
      })
    }
  }

  toggleBody(resize) {
    if(window){
     //toggle value
     //resize sets it to null to avoid flashing menu
     let toggledValue =
     resize ? null : this.state.open === false || this.state.open === null;
      //lock body
      document.body.style = toggledValue === true ? "overflow: hidden;" : "";
      this.setState({ open: toggledValue });
    }
  }
  closeMenu(resize) {
    if (window) {
      let darkBg = document.getElementById("dark-bg");
      this.toggleBody(true);
      //resize sets it to null to avoid flashing menu
      this.setState({ open: resize ? null : false }, () => {
        if (darkBg) {
          darkBg.remove();
        }
      });
    }
  }

  subLinks(category, arr) {
    if (this.state.selectedLink === category) {
      return (
        <div>
          {arr.map((y, i) => (
            <Link onClick={this.closeMenu} key={y.subName + i} to={y.link || "#"}>
              <div className="pos-sub-link-item">{y.subName}</div>
            </Link>
          ))}
        </div>
      );
    }
  }

  selectLink(name) {
    let nameUpdate = this.state.selectedLink !== name ? name : "";
    this.setState({ selectedLink: nameUpdate });
  }

  render() {
    return (
      <div
        className={
          this.state.open
            ? "pos__wrapper-main pos__wrapper-animation-open"
            : this.state.open === false
            ? "pos__wrapper-main pos__wrapper-animation-close"
            : "pos__wrapper-main"
        }
      >
      {/*MENU HEADER*/}
      <h3 className="mobile-menu-header">Sword Point</h3>
        {this.state.links.map(x => {
          {/*ONE WRAPS WITH LINK, THE OTHER DOES NOT*/}
          if(x.link){
            return(
              <Link onClick={this.closeMenu} key={x.name} to={x.link}>
                <div
                    onClick={this.selectLink.bind(this, x.name)}
                    className="pos-link-item"
                  >
                    {x.name}
                    {this.subLinks(x.name, x.subcategories)}
                </div>
              </Link>
            )
          }
          else {
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
  }
}

export default PushMenu;
