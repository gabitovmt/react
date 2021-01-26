import './styles.css';
import React from 'react';
import { render } from 'react-dom';
import Nav from './nav';
import NavItem from './nav-item';

const App = React.createElement(
  Nav,
  {},
  React.createElement(NavItem, { content: 'Options' }),
  React.createElement(NavItem, { content: 'Manage access' }),
  React.createElement(NavItem, { content: 'Security & analysis' }),
  React.createElement(NavItem, { content: 'Branches' }),
  React.createElement(NavItem, { content: 'Webhooks' }),
);

render(App, document.getElementById('root'));
