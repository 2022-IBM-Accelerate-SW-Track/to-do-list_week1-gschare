import React, { Component } from 'react';
import "./About.css";
import profile_pic_greg from "../assets/profile_pic_greg.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
            <div class="split left">
              <div className="centered">
                <img 
                  className="profile_image"
                  src={profile_pic_greg}
                  alt="Profile Pic"
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Gregory</div>
                <div className="brief_description">
                    <h2>Hi there!</h2>
                    <p>I hope you like my to-do list.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
