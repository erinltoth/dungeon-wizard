import React, { Component } from "react";
import './Campaign.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaignID: this.props.match.params.campaignID,
        };
    }

    componentDidMount() {
        let campaignID = this.state.campaignID;
        console.log(campaignID);
        axios.get(`http://localhost:3000/campaigns/${campaignID}`)
      .then((response) => {
        console.log('RESPONSE DATA: ', response);
        this.setState({
          campaign: response.data.campaign,
          dm: response.data.dm
        });
      })
    .catch(function (error) {
      // handle error
      console.log(error);
      });
    }

    getCampaignData() {
        if (this.state.campaign) {
            let route = `/campaigns/edit/${this.state.campaignID}`;
            return (
                <React.Fragment>
                <h1>{this.state.campaign.name}</h1>
                <p className="Join">JOIN CAMPAIGN</p>
                <p>4/6 Spots Filled</p>
                <p>Dungeon Master: {this.state.dm.name}</p>
                <p>Location: {this.state.campaign.location}</p>
                <p>Description: {this.state.campaign.description}</p>
                <p>Playing Style: super tough </p>
                <span className='edit'> <Link to={route}>EDIT</Link></span>
                </React.Fragment>
           );
        } else {
            return (<p>Loading...</p>);
        }
    }

    render() {
        let dm = this.state.dm;
        return(
                 <div className="Campaign">

                    <div className="Campaign-Box">
                        <div className="Campaign-Details">
                        {this.getCampaignData()}
                        </div>
                        <div className="Campaign-Image">
                            <img src="https://bit.ly/2C3tnvb" />
                            
                        </div>
                    </div>
                    {/* <div className="Campaign-Description">
                        <h2>Our Noble Quest... </h2>
                        <p>The object is a pillar of resin, 10 feet in height, four feet in diameter. It is glossy enough that if the light is at your back, you can see your reflection, but also translucent enough that if someone’s standing on the opposite side, their shape may blur into sight. It has three ridges, which do not twist for long across its surface before fading back down into the curve. It is Feretory (1969), by Conroy Glasser, and it is on permanent display on the fourth floor of the Museum of Modern Art in New York, just across from some drawings from earlier in that decade by Agnes Martin. Shortly after midnight on Christmas morning, a night watchman discovered me standing by Feretory with a fire axe held over my head. I am, or was, a senior member of MoMA’s curatorial staff, with a special interest in the Light and Space movement of the 1960s, and so naturally I’ve been called upon to give an account of why I should wish to destroy such an important work. My only reply is that in fact I wanted nothing less than to destroy it. Even after all that’s happened, I still recognise Feretory as a masterpiece. Destroying it would have been no more than an unavoidable consequence of what I really hoped to achieve with the axe that night.
                        </p>
                    </div> */}
            </div>
        );
    }
}
export default Campaign;