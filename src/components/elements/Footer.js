import React, { PropTypes } from 'react';

const Footer = ({ className }) => {
  return (
    <footer className="footer-default">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-accent text-weight-light">Ready to get started</h2>
            <h2 className="text-weight-light mg-top-sm">Get in touch, or create an account.</h2>
          </div>
          <div className="col-md-6">
            <div className="mg-lg-top-2 text-md-right text-lg-left mg-xs-top-2 mg-mg-top-none">
              <button className="btn btn-accent text-uppercase btn-shadow mg-md-bottom-1 mg-lg-bottom-none">Create strip account</button>
              <button className="btn btn-accent-text text-uppercase bg-light btn-shadow mg-xs-left-2">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-muted"/>
      <div className="container">
        <div className="row">
          <div className="col-lg mg-md-bottom-1 col-fill">
            <div className="pull-xs-left pull-lg-none mg-lg-bottom-1">
              <a  href="" className="btn-text btn-accent-text">
                <i className="fa fa-location-arrow mg-xs-right-2" />
                United States
              </a>
            </div>
            <div className="pull-xs-left pull-lg-none mg-xs-left-3 mg-lg-left-none">
              <a href="" className="btn-text btn-accent-text">
                <i className="fa fa-comment mg-xs-right-2" />
                English
              </a>
            </div>
          </div>
          <div className="col-md mg-xs-top-2 mg-lg-top-none">
            <h4 className="footer-section-title">Payments</h4>
            <ul className="nav nav-vertical">
              <li><a href="">Payments</a></li>
              <li><a href="">Subscriptions</a></li>
              <li><a href="">Connect</a></li>
              <li><a href="">Relay</a></li>
              <li><a href="">Atlas</a></li>
            </ul>
          </div>
          <div className="col-md mg-xs-top-2 mg-lg-top-none">
            <h4 className="footer-section-title">Developers</h4>
            <ul className="nav nav-vertical">
              <li><a href="">Documentation</a></li>
              <li><a href="">API reference</a></li>
              <li><a href="">API status</a></li>
              <li><a href="">Open source</a></li>
            </ul>
          </div>
          <div className="col-md mg-xs-top-2 mg-lg-top-none">
            <h4 className="footer-section-title">Company</h4>
            <ul className="nav nav-vertical">
              <li><a href="">About</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Press</a></li>
            </ul>
          </div>
          <div className="col-md mg-xs-top-2 mg-lg-top-none">
            <h4 className="footer-section-title">Resources</h4>
            <ul className="nav nav-vertical">
              <li><a href="">Support</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;