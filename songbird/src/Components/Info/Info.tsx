import React, { useRef } from 'react';
import Player from '../Player/Player';
import { Bird } from '../../Interfaces/Bird';
import { NOT_FOUND } from '../../constants';

interface InfoProps {
  bird: Bird,
  isFalse: boolean,
}

const Info: React.FC<InfoProps> = (props: InfoProps) => {
  const { bird, isFalse } = props;

  const image: any = useRef(null);

  const changeSrc = () => {
    image.current.src = NOT_FOUND;
  };

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={bird.image}
            ref={image}
            onError={() => changeSrc()}
            className="card-img img-fluid"
            alt="bird"
          />
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
