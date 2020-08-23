import React from 'react';
import Score from '../Score/Score';

interface HeaderProps {
  score: number
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { score } = props;

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-3 d-flex justify-content-start">
          <div className="logo">
            <img className="img-fluid" src="/img/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="col-12 col-lg-9 d-flex justify-content-end">
          <Score score={score} />
        </div>
      </div>
    </div>
  );
};

export default Header;
