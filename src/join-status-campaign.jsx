import React, { Component } from "react";
import './join-request.css';


class JoinStatusCampaign extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
      console.log("Getting to join status")

  }

  checkStatus() {
    if (!this.props.request.dm_confirm) {
      console.log("if status join status");
      return (
        <React.Fragment>
          <h3>Pending</h3>
        </React.Fragment>
      )
    } else {
      console.log("else status join status");
      return (
        <React.Fragment>
          <h3>Accepted</h3>
        </React.Fragment>
      )
    }
  }

  componentDidMount() {
  }

  render() {
      return(
        <div className="join-box">
          <div className="top">
          <h3>Request status: {this.checkStatus()}</h3>
          </div>
          <div className="bottom">
            <div>Username:</div>
            <div>Campaign Name: {this.props.request.message}</div>
          </div>
        </div>
               
      );
  }
}
export default JoinStatusCampaign;