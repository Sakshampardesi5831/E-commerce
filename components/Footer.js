import React, { Fragment } from "react";
import NewsLetter from "./NewsLetter";
import Payment from "./payment";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from 'react-icons/fa'
const Footer = () => {
  return (
    <Fragment>
      <div className="footer-section">
        <NewsLetter />
        <div className="footer-content-container">
          <div className="footer-content">
            <div className="col">
              <div className="title">About</div>
               <p className="menuText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, commodi?</p>
            </div>
            <div className="col">
              <div className="title">Contact</div>
              <div className="contact-items">
                  <FaLocationArrow/>
                  <div className="menuText">Vinayak campus B21 Karariya farm bhopal,462010</div>
              </div>
              <div className="contact-items">
                  <FaMobileAlt/>
                  <div className="menuText">Phone :+91 9826895656</div>
              </div>
              <div className="contact-items">
                  <FaEnvelope/>
                  <div className="menuText">Email:- a@gmail.com</div>
              </div>
            </div>
            <div className="col">
               <div className="title">Category</div>
               <span className="Text">Categories</span>
               <span className="Text">HeadPhone</span>
               <span className="Text">Smart Watches</span>
               <span className="Text">BlueTooth Speakers</span>
               <span className="Text">Home Theaters</span>
               <span className="Text">Projectors</span>
            </div>
            <div className="col">
               <div className="title">Pages</div>
               <span className="Text">Home</span>
               <span className="Text">About</span>
               <span className="Text">Privacy Policy</span>
               <span className="Text">Returns</span>
               <span className="Text">Terms & Condition</span>
               <span className="Text">Contact us</span>
            </div>
          </div>
          <div className="bottom-bar">
           <div className="bottom_bar-content">
              <div className="bottom_bar_content-text">
                  <div className="text"> BIG-DISCOUNT 2023 CREATED BY JS DEV.PREMIUM WEBSITE</div>
              </div>
               <Payment/>
           </div>
        </div>
        </div> 
      </div>
    </Fragment>
  );
};

export default Footer;
