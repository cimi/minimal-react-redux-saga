import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import { getHelloMessage } from './redux/selectors';
import { initialize, changeGreeting } from './redux/actions';
import logo from './logo.svg';
import './App.css';

class Title extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { text } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}
const PageHeading = connect(state => ({ text: getHelloMessage(state) }), {
  initialize
})(Title);

const Button = ({ changeGreeting, children }) => (
  <button onClick={changeGreeting}>{children}</button>
);
const ChangeHeading = connect(state => ({}), { changeGreeting })(Button);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PageHeading />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ChangeHeading>Change greeting text!</ChangeHeading>
      </div>
    );
  }
}

const ConnectedApp = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);
ConnectedApp.propTypes = {
  store: PropTypes.object.isRequired
};

export default ConnectedApp;
