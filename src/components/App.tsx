import 'reflect-metadata';
import * as React from 'react';
import '../styles/App.css';
import Services from '../services';
import {User} from '../services/User/User';
import {lazyInject} from '../inversify.config';
import {UserModel} from '../models/UserModel';

const logo = require('../resources/logo.svg');

interface AppState {
  user: UserModel;
}

interface AppProps {
}

class App extends React.Component<AppProps, AppState> {

  @lazyInject(Services.User)
  private user: User;

  componentDidMount() {
    this.user
        .fetchUser()
        .then(user => this.setState({user: user}));
  }

  render() {
    //noinspection TypeScriptUnresolvedVariable
    const user: UserModel = this.state ? this.state.user : this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{user ? user.name : ''}</p>
      </div>
    );
  }
}

export default App;
