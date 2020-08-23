import React from 'react';
import Player from '../Player/Player';
import { Bird } from '../../Interfaces/Bird';

interface InfoProps {
  bird: Bird,
  src: string,
  isFalse: boolean,
}

const Info: React.FC<InfoProps> = (props: InfoProps) => {
  const {
    bird,
    src,
    isFalse,
  } = props;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={bird.image || src} className="card-img img-fluid" alt="bird" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {bird.name}
              <br />
              {bird.species}
            </h5>
          </div>
        </div>
        <div className="col-12 p-2">
          <div className="card-text">
            <Player
              src={bird.audio}
              isFalse={isFalse}
            />
          </div>
          <p className="card-text">
            <small className="text-muted">
              {bird.description}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
