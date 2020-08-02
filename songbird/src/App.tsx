/* eslint-disable react/no-unused-state */
import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Player from './Components/Player/Player';
import BirdsList from './Components/BirdsList/BirdsList';
import Info from './Components/Info/Info';
import { BIRDS_DATA } from './constants';

interface AppState {
  birds: any[],
  score: number,
  level: number,
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      birds: [],
      score: 0,
      level: 0,
    };
  }

  componentDidMount = () => {
    this.setState({ birds: BIRDS_DATA });
  }

  render() {
    const { score, birds } = this.state;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <Header score={score} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              <Player src={(birds.length !== 0) ? birds[0].audio : ''} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mt-5">
              <BirdsList />
            </div>
            <div className="col-12 col-lg-6 mt-5">
              <Info />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              <button
                type="button"
                className="btn btn-info w-100"
              >
                Next level
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
