import React, { Component } from "react";
import './join-request.css';
import axios from 'axios';



class DMButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
      this.approve = this.approve.bind(this);
      this.reject = this.reject.bind(this);
  }

  approve() {
      let update = {
        dm_confirm: "accepted"
      };
      let id = this.props.id;
      let requests = this.props.requests;
      let players = this.props.players;

    axios.put(`http://localhost:3000/join_requests/${id}`, update)
      .then((response) => {
        console.log("child", update.dm_confirm);
        this.props.handleDMForm(update.dm_confirm, id, requests, players);
      })
      .catch((response) => {
        console.log("Failure", response);
      });
  }
  reject() {
      let update = {
        dm_confirm: "rejected"
      };
      let id = this.props.id;
      let requests = this.props.requests;
      let players = this.props.players;

    axios.put(`http://localhost:3000/join_requests/${id}`, update)
      .then((response) => {
        this.props.handleDMForm(update.dm_confirm, id, requests, players);
      })
      .catch((response) => {
        console.log("Failure", response);
      });
    }

  render() {
      return(
  <div className="buttons" key={this.props.id}>
  { this.props.dm_confirm === "pending" ? (
    <div>
    <button className="approve-btn" onClick={this.approve}>Approve</button>
    <button className="reject-btn" onClick={this.reject}>
      Reject
    </button>
    </div>
  ) : this.props.dm_confirm === "accepted" ? (
    <p>Accepted</p>
  ) : this.props.dm_confirm === "rejected" ? (
    <p>Rejected</p>
  ): (
    <p>Pending</p>
  )}

</div>
      );
  }
}
export default DMButton;