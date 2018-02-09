import React from 'react';
import {inject, observer} from 'mobx-react';
import Button from './Button';
import InputContainer from './InputContainer';

@inject('users')@observer
export default class Profile extends React.Component {

    state = {
        editProfileID: null,
    }; 

    onEdit = (id)=>{
        //it sets the state to Id of user
        this.setState({
            editProfileID: id,
        })
    };  

    handleSave = () =>{
        this.setState({
            editProfileID: null,
        })
        console.log('save called');
    };

    //onChange should fix with new observer
    onChange = event => {
        this.props.users.updateProfile(this.props.user.id, event.target.name, event.target.value )
        console.log('you have changed somthing !');
    };

    //when state change, render will change
    render(){

        const user = this.props.user;

        return(
            <div>
                <div className='profile-header'>
                    <h4>PROFILE</h4>
                    <Button className="close-button"
                    label="X" 
                    onClick={this.props.onCloseProfile}/>
                </div>

                <div className='profile-photo'>
                    <img className="circle"
                    src={`https://avatars.githubusercontent.com/${user.username}`} 
                    alt='Profile'
                    />
                </div>

                {/* this will switch the renders */}
                {!this.state.editProfileID && this.renderView()}
                {this.state.editProfileID && this.renderEditing()}
            </div>
        );
    };

    //this is render function while editing
    renderEditing(){

        const user = this.props.user;

        return(
            <div>
                <InputContainer label='full name' value={user.full_name} onChange={this.onChange} name='full_name'/>
                <InputContainer label='register date' value={user.register_date} onChange={this.onChange} name='register_date'/>
                <InputContainer label='email' value={user.email} onChange={this.onChange} name='email'/>
                <InputContainer label='username' value={user.username} onChange={this.onChange} name='username'/>
                <select>
                    <option >teacher</option>
                    <option >student</option>
                </select>
                <Button label={"save"}
                onClick={this.handleSave}/>
            </div>
        );
    };

    //this is render function viewing Profile
    renderView(){

        const user = this.props.user;

        return(
            <div>
                <Button label={"Edit"}
                onClick={()=>this.onEdit(user.id)}
                />
                <ul>
                    <li><h3>{user.full_name}</h3></li>
                    <li>{user.register_date}</li>
                    <li>{user.email}</li>
                    <li>{user.username}</li>
                    <li>{user.role}</li>
                </ul>
            </div>
        );
    };
};
