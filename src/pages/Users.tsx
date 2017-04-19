import 'reflect-metadata';
import * as React from 'react';
import {UserService} from '../services/User/User';
import {lazyInject} from '../di-container';
import {UserModel} from '../models/User';
import {Services} from '../services/services';

class UsersComponent extends React.Component<{}, { user: UserModel }> {

  @lazyInject(Services.UserService)
  private userService: UserService;

  componentDidMount() {
    this.userService
        .fetchUser(1)
        .then(user => this.setState({user: user}));
  }

  render() {
    //noinspection TypeScriptUnresolvedVariable
    const user: UserModel = this.state ? this.state.user : this.state;
    return user ? (
      <div>{user.name}</div>
    ) : (
      <div>loading or no user</div>
    );
  }
}

const UsersComponentWrapper = () => (
  <UsersComponent />
);

export default UsersComponentWrapper;
