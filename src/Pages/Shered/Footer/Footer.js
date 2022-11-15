import React from "react";
import Logo from '../../../assets/logo.svg'

const Footer = () => {
  return (
    <div>
      <footer className="footer px-16 bg-black text-neutral-content py-24">
        <div>
         <div>
            <img src={Logo} alt="" />
         </div>
          <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className="footer-title">About</span>
          <a href="/#"className="link link-hover">Branding</a>
          <a href="/#"className="link link-hover">Design</a>
          <a href="/#"className="link link-hover">Marketing</a>
          <a href="/#"className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/#"className="link link-hover">About us</a>
          <a href="/#"className="link link-hover">Contact</a>
          <a href="/#"className="link link-hover">Jobs</a>
          <a href="/#"className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a href="/#"className="link link-hover">Terms of use</a>
          <a href="/#"className="link link-hover">Privacy policy</a>
          <a href="/#"className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
