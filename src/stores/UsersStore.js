import {observable, action, useStrict} from 'mobx';

useStrict(true);

export default class UsersStore {

    @observable 
    users = [];

    @observable
    profile = [];

    @action
    loadUsers(){
        fetch('http://localhost:3005/api/users')
        .then(response => response.json())
        .then(response => {
            this.setUsers(response)
        });
    };

    @action
    setUsers(users){
        this.users = users
    };

    findUser(id) {
        return this.users
          .find(user => user.id === id)
    };
    
    @action
    onUserDivClick(id){
        this.setProfile(id);
        console.log('div clicked for show profile');
    };

    @action
    setProfile(id){
        let user = this.findUser(id)
        this.profile = user
        console.log(this.profile)
    };

    @action
    updateProfile = (userId, name, value) => {

    };
};
