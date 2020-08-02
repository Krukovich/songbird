import React from 'react';

const Info: React.FC = () => {
  const style = {
    maxWidth: '540px',
  };

  return (
    <>
      <div className="card mb-3" style={style}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="..." className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Название карточки
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in.
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
