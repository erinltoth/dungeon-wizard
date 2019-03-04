import React, { Component } from "react";
import './User.css';

class User extends Component {
    render() {  
        return(
                 <div className="user">
                    <div className="user-box"> 
                        <div className="user-details">
                            <h1>{this.props.user.name}</h1>
                            <p>Member since: </p>
                            <p>Currently playing:</p>
                            <p>Playing Style: {this.props.user.playing_style} </p>
                            <p>Experience level: {this.props.user.exp_level}</p>
                        </div>
                        <div className="user-image">
                            <img src="https://bit.ly/2C3tnvb" />
                        </div>
                   
                    </div>   
                    <div classname="user-campaign">
                        <p>A campaign!</p>
                    </div>            
            </div>
        );
    }
}
export default User;