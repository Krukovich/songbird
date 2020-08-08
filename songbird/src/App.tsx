import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Player from './Components/Player/Player';
import BirdsList from './Components/BirdsList/BirdsList';
import Info from './Components/Info/Info';
import Alert from './Components/Alert/Alert';
import Hint from './Components/Hint/Hint';
import {
  BIRDS_DATA, MAX_COUNT_BIRDS, AGREE_ANSWER, ERROR_ANSWER, ZERO, MAX_FACTOR, BIRDS_IMG_SRC,
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
  imgSrc: string,
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
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
    this.setState({ level: level += 1 });
    this.setState(
      {
        actualBird: this.getRandomBird(level),
        isFalse: true,
        isFactor: MAX_FACTOR,
        imgSrc: BIRDS_IMG_SRC,
      },
    );
  }

  checkAnswer = (selectedBird: Bird) => {
    const { actualBird } = this.state;
    this.setState({ selectedBird });

    if (selectedBird === actualBird) {
      playAudio(AGREE_ANSWER);
      this.incrementScore();
      this.setState({ isFalse: false, imgSrc: selectedBird.image });
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
      imgSrc,
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
        <div className="row">
          <div className="col-12 mt-5">
            <Menu />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 mt-5 img-fluid">
            <img src={imgSrc} style={imgStyle} alt="bird" />
          </div>
          <div className="col-12 col-md-8 col-lg-9 mt-5 d-flex flex-column align-item-center w-100">
            <Alert isAgree={answerIsTrue} nameBird={actualBird.name} />
            <Player src={actualBird.audio} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6 mt-5">
            <BirdsList
              birds={BIRDS_DATA[level]}
              selectedBird={selectedBird}
              actualBird={actualBird}
              checkAnswer={this.checkAnswer}
            />
          </div>
          <div className="col-12 col-md-8 col-lg-6 mt-5">
            {(answerIsTrue) ? <Hint /> : <Info src={imgSrc} bird={selectedBird} />}
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 mb-5">
            <button
              type="button"
              className="btn btn-info w-100"
              disabled={answerIsTrue}
              onClick={() => this.stepNextLevel()}
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
