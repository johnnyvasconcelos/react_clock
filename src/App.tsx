import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  timerId = 0;

  handleAddClock = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: true });
  };

  handleRemoveClock = () => {
    this.setState({ hasClock: false });
  };

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    function getRandomName(): string {
      const value = Date.now().toString().slice(-4);

      return `Clock-${value}`;
    }

    document.addEventListener('contextmenu', this.handleAddClock);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleRemoveClock);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleAddClock);
    document.removeEventListener('contextmenu', this.handleRemoveClock);
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
