import React from 'react';

interface FinishProps {
  score: number,
}

const Finish: React.FC<FinishProps> = (props: FinishProps) => {
  const { score } = props;

  return (
    <div className="card mt-5 mb-3 block_shadow">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img img-fluid" src="img/finish_bird.png" alt="bird" />
        </div>
        <div className="col-md-8 text-center d-flex align-items-center">
          <div className="card-body">
            <h1 className="card-title">
              Вы закончили игру!
            </h1>
            <p className="card-text">
              с результатом
              {' '}
              {score}
              {' '}
              очков.
            </p>
            <p className="card-text">
              <button
                type="button"
                className="btn btn-info transition-slide"
              >
                Сыграть снова
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
