import React from 'react';

interface FinishProps {
  score: number,
}

const Finish: React.FC<FinishProps> = (props: FinishProps) => {
  const { score } = props;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img img-fluid" alt="bird" />
        </div>
        <div className="col-md-12 text-center">
          <div className="card-body">
            <h5 className="card-title">
              <h1>
                Вы закончили игру!
              </h1>
              <br />
              с результатом
              {' '}
              {score}
              {' '}
              очков.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;
