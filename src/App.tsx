import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    hasClock: true,
  };

  handleAddClock() {
    this.setState({ hasClock: true });
  }

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
      // put your code here
    });

    document.addEventListener('click', () => {
      this.handleAddClock();
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleAddClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock />}
      </div>
    );
  }
}

export default App;
