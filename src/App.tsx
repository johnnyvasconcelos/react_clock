import React from 'react';
import './App.scss';

export class App extends React.Component {
  timerId = 0;

  state = {
    today: new Date(),
    clockName: 'Clock-0',
    // This code starts a timer
  };

  /*
  // eslint-disable-next-line no-console
  console.log('some message');
  */

  componentDidMount() {
    function getRandomName(): string {
      const value = Date.now().toString().slice(-4);

      return `Clock-${value}`;
    }

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    // this code stops the timer
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="Clock">
          <strong className="Clock__name">{this.state.clockName}</strong>
          {' time is '}
          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
