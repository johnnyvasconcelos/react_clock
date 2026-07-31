import React from 'react';
import './App.scss';

export class App extends React.Component {
  timerId = 0;

  state = {
    today: new Date(),
    clockName: 'Clock-0',
    showClock: true,
    // This code starts a timer
  };

  componentDidMount() {
    function getRandomName(): string {
      const value = Date.now().toString().slice(-4);

      return `Clock-${value}`;
    }

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      // eslint-disable-next-line no-console
      console.log('some message');
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ showClock: false });
      // put your code here
    });

    document.addEventListener('click', () => {
      this.setState({ showClock: true });
    });
  }

  componentWillUnmount() {
    // this code stops the timer
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.showClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>
            {' time is '}
            <span className="Clock__time">
              <span>{this.state.today.toUTCString().slice(-12, -4)}</span>
            </span>
          </div>
        )}
      </div>
    );
  }
}
