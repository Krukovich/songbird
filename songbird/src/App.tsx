/* eslint-disable react/no-unused-state */
import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Player from './Components/Player/Player';
import BirdsList from './Components/BirdsList/BirdsList';
import Info from './Components/Info/Info';
import {
  BIRDS_DATA, MAX_COUNT_BIRDS, AGREE_ANSWER, ERROR_ANSWER, ZERO,
} from './constants';
import { getRandomNumber, playAudio } from './service';
import { Bird } from './Interfaces/Bird';

interface AppState {
  score: number,
  level: number,
  isFactor: number,
  actualBird: Bird,
  selectedBird: Bird,
  isFalse: boolean,
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFalse: true,
      score: 0,
      level: 0,
      isFactor: 5,
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

  getRandomBird = (level: number): Bird => BIRDS_DATA[level][getRandomNumber(MAX_COUNT_BIRDS)];

  incrementScore = () => {
    const { isFactor } = this.state;
    this.setState({ score: isFactor });
  }

  decrementIsFactor = () => {
    let { isFactor } = this.state;
    if (isFactor !== ZERO) {
      this.setState({ isFactor: isFactor -= 1 });
    } else {
      this.setState({ isFactor: 0 });
    }
  }

  checkAnswer = (selectedBird: Bird) => {
    const { actualBird } = this.state;
    this.setState({ selectedBird });

    if (selectedBird === actualBird) {
      playAudio(AGREE_ANSWER);
      this.incrementScore();
      this.setState({ isFalse: false });
    } else {
      playAudio(ERROR_ANSWER);
      this.decrementIsFactor();
    }
  }

  render() {
    const {
      score,
      level,
      actualBird,
      selectedBird,
      isFalse: answerIsTrue,
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
              disabled={answerIsTrue}
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
