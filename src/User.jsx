import React, { Component } from "react";
import './User.css';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.match.params.userID
        };
    }

    componentDidMount() {
        let userID = this.state.userID;
        axios.get(`http://localhost:3000/users/${userID}`)
        .then ((response) => {
            console.log('USER: ', response.data);
            this.setState({
                user: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getUserData() {
        if (this.state.user) {
            let route = `/users/edit/${this.state.userID}`;
            return (
                <React.Fragment>
                    <h1>{this.state.user.user.name}</h1>
                    <p>Member since: {this.state.user.user.created_at}</p>
                    <p>Currently playing:</p>
                    <p>Playing Style: {this.state.user.user.playing_style} </p>
                    <p>Experience level: {this.state.user.user.exp_level}</p>
                    <span className='edit'> <Link to={route}>EDIT</Link></span>
                </React.Fragment>
            );
        } else {
            return (<p>Loading...</p>);
        }
    }

    render() {
        return(
                 <div className="user">
                    <div className="user-box">
                        <div className="user-details">
                        {this.getUserData()}
                        </div>
                        <div className="user-image">
                            <img src="https://bit.ly/2C3tnvb" />
                        </div>

                    </div>
                    <div className="user-campaign">
                        <p>A campaign!</p>
                    </div>
            </div>
        );
    }
}
export default User;