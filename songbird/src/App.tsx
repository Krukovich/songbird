/* eslint-disable react/no-unused-state */
import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Player from './Components/Player/Player';
import BirdsList from './Components/BirdsList/BirdsList';
import Info from './Components/Info/Info';
import { BIRDS_DATA, MAX_COUNT_BIRDS, AGREE_ANSWER, ERROR_ANSWER } from './constants';
import { getRandomNumber, playAudio } from './service';
import { Bird } from './Interfaces/Bird';

interface AppState {
  score: number,
  level: number,
  actualBird: Bird,
  selectedBird: Bird,
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      score: 0,
      level: 0,
      actualBird: this.getRandomBird(0),
      selectedBird: {
        audio: '',
        description: '',
        id: 0,
        image: '',
        name: '',
        species: '',
      },
    };
  }

  getRandomBird = (level: number): Bird => BIRDS_DATA[level][getRandomNumber(MAX_COUNT_BIRDS)]

  checkAnswer = (selectedBird: Bird) => {
    const { actualBird } = this.state;
    this.setState({ selectedBird });

    if (selectedBird === actualBird) {
      playAudio(AGREE_ANSWER);
    } else {
      playAudio(ERROR_ANSWER);
    }
  }

  render() {
    const {
      score,
      level,
      actualBird,
      selectedBird,
    } = this.state;

    return (
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
            <Player src={actualBird.audio} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 mt-5">
            <BirdsList
              birds={BIRDS_DATA[level]}
              checkAnswer={this.checkAnswer}
            />
          </div>
          <div className="col-12 col-lg-6 mt-5">
            <Info bird={selectedBird} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 mb-5">
            <button
              type="button"
              className="btn btn-info w-100"
            >
              Next level
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
