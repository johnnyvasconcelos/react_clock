import React from 'react';

export class Clock extends React.Component {
  timerId = 0;

  clockId = 0;

  state = {
    today: new Date(),
    // This code starts a timer
    clockName: 'Clock-0',
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

    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: {},
    prevState: { today: Date; clockName: string },
  ) {
    if (this.state.today !== prevState.today) {
      // eslint-disable-next-line no-console
      console.warn('sla oque por aqui');
    }
  }

  componentWillUnmount() {
    // this code stops the timer
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.state.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          <span>{this.state.today.toUTCString().slice(-12, -4)}</span>
        </span>
      </div>
    );
  }
}
