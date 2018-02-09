import React from 'react';
import Login from './components/Login';
import Attendance from './components/Attendance';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import Button from './components/Button';

window.stores = stores;

export default class App extends React.Component {

    state = {
        showUsers: false,
    };

    render(){
        return(
            <div>
                {/* this Button will switch between userslist and attendance */}
                <Button label={'switch'} 
                onClick={()=> this.setState({
                    showUsers: !this.state.showUsers,
                })}/>
                {!this.state.showUsers && this.renderAttendance()}
                {this.state.showUsers && this.renderUsers()}
            </div>
        );
    };

    renderUsers(){
        return(
            <div>
                <Provider
                {...stores}>
                    <Login />
                </Provider>
            </div>
        );
    };

    renderAttendance(){
        return(
            <div>
                <Attendance />
            </div>
        );
    };
};