import * as React from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import UsersComponent from './pages/Users';
import PhotosComponent from './pages/Photos';

class RouterComponent extends React.Component<{}, null> {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/photos">Photos</Link></li>
          </ul>

          <hr/>

          <Route path="/users" component={UsersComponent}/>
          <Route path="/photos" component={PhotosComponent}/>
        </div>
      </Router>
    );
  }
}

export default RouterComponent;
