'use client';

import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid-flow-col">
          <a>
           <FaTwitter/>
          </a>
          <a>
            <CgInstagram/>
          </a>
          <a>
            <BsFacebook/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
