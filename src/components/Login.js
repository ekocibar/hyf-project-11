import React from 'react';
import UserList from './UserList';
import Profile from './Profile';
import {inject, observer} from 'mobx-react';

@inject('users')@observer
export default class Login extends React.Component {

    state = {
        showProfileID: null,
    };

    componentDidMount = () => {
        this.props.users.loadUsers();
    };

    handleShowProfile = (id) => {
        this.SetStateShowProfile(id);
        //this callback will set the profile observable 
        this.props.users.onUserDivClick(id);
    };

    SetStateShowProfile = (id) =>{
        this.setState({
            showProfileID: id,
        });
    };

    setStateCloseProfile = () =>{
        this.setState({
            showProfileID: null,
        });
    };

    render(){
        return(
            <div>
                {!this.state.showProfileID && this.renderUsersList()}
                {this.state.showProfileID && this.renderProfile()}
            </div>
        );
    };

    renderUsersList(){
        return(
            <div className="UserList">
                <UserList 
                hanleShowProfile={this.SetStateToShowProfile}
                users={this.props.users.users}
                onUserDivClick={this.handleShowProfile}
                />
            </div>
        );
    };

    renderProfile(){
        //gets user from profile in usersStore
        const user = this.props.users.profile;

        return(
            <div >
                <div className="UserList-in-profile">
                    <UserList users={this.props.users.users}
                    onUserDivClick={this.handleShowProfile}/>
                </div>
                <div className="Profile">
                    <Profile user={user}
                    onCloseProfile={this.setStateCloseProfile}/>
                </div>
            </div> 
        );
    };
};

