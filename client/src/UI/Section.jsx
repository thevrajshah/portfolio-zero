import React, { Component } from "react";
import "./UI.scss";

export class Section extends Component {
  render() {
    return (
      <div
        className="section"
        style={{
          textAlign: this.props.align ? this.props.align : "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export class GreySection extends Component {
  render() {
    return (
      <div
        className="section-grey"
        style={{
          textAlign: this.props.align ? this.props.align : "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
