import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.jsx';
import User from './User.jsx';
import Campaign from './campaign.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      currentCampaign: {},
      messages: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/campaigns/21')
      .then((response) => {
        this.setState({
          currentCampaign: response.data
        });
        console.log(response.data);
        // this.setState({
        //   messages: response
        // });
      })
    .catch(function (error) {
      // handle error
      console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {/* <User /> */}
        <Campaign campaign={this.state.currentCampaign}/>
      </div>
    );
  }
}

export default App;
