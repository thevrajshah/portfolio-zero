import React, { Component } from "react";
import "./components.scss";
import { WhiteSection } from "./Containers";
import dino from "../images/dino.gif";

class Loader extends Component {
  render() {
    return (
      <WhiteSection textAlign='center'>
        <div className='loader'>
          <h1>Please wait until I learn Server-Side Rendering.</h1>
          <img
            // src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif'
            src={dino}
            alt='Loading...'
          />
        </div>
      </WhiteSection>
    );
  }
}

export default Loader;
