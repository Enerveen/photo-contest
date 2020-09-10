import React, { Component } from 'react';
import './scoreboard.css';
import ScoreElem from './ScoreElem';

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_ADDR + '/score')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className='scoreboard'>
          <h1>Топ-50</h1>
          <div className='alert'>
            <h2>Внимание!</h2>
            <p>По техническим причинам таблица лидеров заморожена в состоянии на 05.09.20 19:45</p>
          </div>
          <main>
            {items.map((item, index) => (
              <ScoreElem key={index} i={index} prop={item} />
            ))}
          </main>
        </div>
      );
    }
  }
}
