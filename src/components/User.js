import React from 'react';

export default class User extends React.Component {

    render() {
        return(
            <ul>
                <img className="user-photo"
                src={`https://avatars.githubusercontent.com/${this.props.user.username}`} 
                alt='user'
                />
                <li><h3>{this.props.user.full_name}</h3></li>
                <li>{this.props.user.role}</li>
                <li>{this.date(this.props.user.register_date)}</li>
            </ul>
        );
    };

    date = (register_date) => {
        let date = new Date(register_date);
        let today = new Date();
        let diff = new Date(today.getTime() - date.getTime());

        if(Number(diff.getUTCFullYear() - 1970) === 0 && diff.getUTCMonth() === 0 ){
            return (Number(diff.getUTCDate() - 1) + " days ago")
        } else if (Number(diff.getUTCFullYear() - 1970) === 0){
            return (diff.getUTCMonth() + " months ago " )
        } else return console.log(Number(diff.getUTCFullYear() - 1970) + " years ago")
    };
};
