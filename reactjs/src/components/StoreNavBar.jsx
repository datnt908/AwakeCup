import React, { Component } from 'react';

class StoreNavBar extends Component {
  state = {
    cartBadge: 2,
  }

  componentDidMount() {
    window.addEventListener("scroll", () => handleNavBarScroll());
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => handleNavBarScroll());
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">Coffee<small>Awakecup</small></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/" onClick={e => e.preventDefault()} className="nav-link">Menu</a></li>
              <li className="nav-item"><a href="/" onClick={e => e.preventDefault()} className="nav-link">Services</a></li>
              <li className="nav-item"><a href="/" onClick={e => e.preventDefault()} className="nav-link">About</a></li>
              <li className="nav-item"><a href="/" onClick={e => e.preventDefault()} className="nav-link">Shop</a></li>
              <li className="nav-item"><a href="/" onClick={e => e.preventDefault()} className="nav-link">Contact</a></li>
              <li className="nav-item cart">
                <a href="/" onClick={e => e.preventDefault()} className="nav-link">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="bag d-flex justify-content-center align-items-center"><small>{this.state.cartBadge}</small></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function handleNavBarScroll() {
  if (window.pageYOffset > 300) {
    document.getElementById("ftco-navbar").classList.add("scrolled");
    document.getElementById("ftco-navbar").classList.add("awake");
  }
  else {
    document.getElementById("ftco-navbar").classList.remove("scrolled");
    document.getElementById("ftco-navbar").classList.remove("awake");
  }
}

export default StoreNavBar;