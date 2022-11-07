import React from 'react';
import './style.css';

export class Counter3 extends React.Component {
  state = {
    count: 0, //начальное значение
    compName: 'Maxim'
  };

  updateCount = () => {
    this.setState({ count: 2, compName: 'Alex' },
      () => {
        console.log(this.state);
      });
  };

  increaseCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 })
    // this.state.name не изменится
  };
  decreaseCount = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 })
    // this.state.name не изменится
  };
  nullCount = () => {

    this.setState({ count: 0 })
    // this.state.name не изменится
  };


  render() {
    return (
      < div className="container" >
        <span className="spanField" >{this.state.compName}</span>
        <span className="spanField" >{this.state.count}</span>
        <button className="counterButton" onClick={this.increaseCount}>Increase+1</button>
        <button className="counterButton" onClick={this.decreaseCount}>Decrease-1</button>
        <button className="counterButton" onClick={this.nullCount}>Set 0</button>

        <button className="counterButton" onClick={this.updateCount}>Change state</button>

      </div >
    );
  }
}

export default Counter3;