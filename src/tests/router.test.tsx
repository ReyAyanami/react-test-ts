import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouterComponent from '../router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouterComponent />, div);
});
