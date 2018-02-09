import React from 'react';
import {inject, observer} from 'mobx-react';
import User from './User';

@inject('users')@observer
export default class UserList extends React.Component {

    render() {
        return(
            this.renderUsers()
        );
    };

    //renderUsers will map from users in UserStore with key of user.id
    renderUsers(){
        const user = this.props.users.map((user) =>
            <div className="User" key={user.id}
             onClick={()=> this.props.onUserDivClick(user.id)}
            >
                <User user={user}/>
            </div>
        );
        return user;
    };
};














//inspiration
// const user = users.map((user) =>
//     <div key={user.id}>
//         <h3>{user.username}</h3>
//         <h2>{user.full_name}</h2>
//         <h2>{user.role}</h2>
//         <h2>{user.register_date}</h2>
//         <h2>{user.group_name}</h2>
//     </div>
// );