import React from 'react';
import Player from '../Player/Player';
import { Bird } from '../../Interfaces/Bird';

interface InfoProps {
  bird: Bird,
  src: string,
}

const Info: React.FC<InfoProps> = (props: InfoProps) => {
  const { bird, src } = props;

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
            </h5>
            <div className="card-text">
              <Player src={bird.audio} />
            </div>
            <p className="card-text">
              <small className="text-muted">
                {bird.description}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
