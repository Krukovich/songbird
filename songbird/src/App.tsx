import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Player from './Components/Player/Player';
import BirdsList from './Components/BirdsList/BirdsList';
import Info from './Components/Info/Info';
import Alert from './Components/Alert/Alert';
import Hint from './Components/Hint/Hint';
import Finish from './Components/Finish/Finish';
import {
  BIRDS_PROGRESS,
  BIRDS_DATA,
  MAX_COUNT_BIRDS,
  AGREE_ANSWER,
  ERROR_ANSWER,
  ZERO,
  MAX_FACTOR,
  BIRDS_IMG_SRC,
} from './constants';
import { getRandomNumber, playAudio } from './service';
import { Bird, ANSWER } from './Interfaces/Bird';

import './app.scss';

interface AppState {
  score: number,
  level: number,
  isFactor: number,
  actualBird: Bird,
  selectedBird: Bird,
  isFalse: boolean,
  imgSrc: string,
  progress: any,
  startLevel: boolean,
  answers: ANSWER[],
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      answers: [],
      startLevel: true,
      progress: BIRDS_PROGRESS,
      isFalse: true,
      score: ZERO,
      level: ZERO,
      isFactor: MAX_FACTOR,
      actualBird: this.getRandomBird(ZERO),
      imgSrc: BIRDS_IMG_SRC,
      selectedBird: {
        audio: '',
        description: '',
        id: ZERO,
        image: '',
        name: '',
        species: '',
      },
    };
  }

  getRandomBird = (level: number): Bird => BIRDS_DATA[level][getRandomNumber(MAX_COUNT_BIRDS)];

  incrementScore = () => {
    const { score, isFactor } = this.state;
    this.setState({ score: score + isFactor });
  }

  decrementIsFactor = () => {
    let { isFactor } = this.state;
    if (isFactor !== ZERO) {
      this.setState({ isFactor: isFactor -= 1 });
    } else {
      this.setState({ isFactor: 0 });
    }
  }

  stepNextLevel = () => {
    let { level } = this.state;
    this.changeProgress(level);
    this.setState({ level: level += 1 });
    if (level === MAX_COUNT_BIRDS) {
      return;
    }
    this.setState(
      {
        actualBird: this.getRandomBird(level),
        isFalse: true,
        isFactor: MAX_FACTOR,
        imgSrc: BIRDS_IMG_SRC,
        startLevel: true,
      },
    );
  }

  changeProgress = (step: number) => {
    const { progress } = this.state;
    const newProgress = progress.map((item: object, index: number) => {
      if (step === index) {
        return { ...item, complete: true };
      }
      return { ...item };
    });
    this.setState({ progress: newProgress });
  }

  checkAnswer = (selectedBird: Bird) => {
    const { actualBird, answers, isFalse } = this.state;

    if (!isFalse) {
      return;
    }

    this.setState({ selectedBird });
    this.setState({ startLevel: false });

    if (selectedBird === actualBird) {
      playAudio(AGREE_ANSWER);
      this.incrementScore();
      this.setState({ isFalse: false, imgSrc: selectedBird.image });
      this.setState({ answers: [...answers, { name: selectedBird.name, answer: true }] });
    } else {
      playAudio(ERROR_ANSWER);
      this.decrementIsFactor();
      this.setState({ answers: [...answers, { name: selectedBird.name, answer: false }] });
    }
  }

  render() {
    const {
      progress: birds,
      score,
      level,
      actualBird,
      selectedBird,
      isFalse,
      imgSrc,
      startLevel,
      answers,
    } = this.state;

    const imgStyle = {
      maxWidth: '200px',
      maxHeight: '155px',
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <Header score={score} />
          </div>
        </div>
        {(level !== MAX_COUNT_BIRDS)
          ? (
            <div className="wrapper">
              <div className="row">
                <div className="col-12 mt-5 block_shadow">
                  <Menu birds={birds} />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-12 col-md-4 col-lg-3 mt-5 text-center img-fluid block_shadow">
                  <img src={imgSrc} style={imgStyle} alt="bird" />
                </div>
                <div className="col-12 col-md-8 col-lg-8 mt-5 d-flex flex-column align-item-center w-100 block_shadow">
                  <Alert
                    isFalse={isFalse}
                    nameBird={actualBird.name}
                  />
                  <Player
                    src={actualBird.audio}
                    isFalse={isFalse}
                  />
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-12 col-md-4 col-lg-5 mt-5 block_shadow">
                  <BirdsList
                    answers={answers}
                    birds={BIRDS_DATA[level]}
                    checkAnswer={this.checkAnswer}
                  />
                </div>
                <div className="col-12 col-md-8 col-lg-6 mt-5 block_shadow">
                  {(startLevel)
                    ? <Hint />
                    : <Info src={imgSrc} bird={selectedBird} isFalse={isFalse} />}
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-5 mb-5">
                  <button
                    type="button"
                    className="btn btn-info w-100 transition-slide"
                    disabled={isFalse}
                    onClick={() => this.stepNextLevel()}
                  >
                    Следующий уровень
                  </button>
                </div>
              </div>
            </div>
          )
          : <Finish score={score} />}
        <div className="banner">
          <img
            className="flying-bird banner_animated"
            src="img/flying-birds.png"
            alt="bird"
          />
          <span className="shadow" />
        </div>
      </div>
    );
  }
}

export default App;
