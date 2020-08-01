import React from 'react';
import Score from '../Score/Score';

interface HeaderProps {
  score: number
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { score } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex justify-content-start">
          <h1>
            Songbird
          </h1>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end">
          <Score score={score} />
        </div>
      </div>
    </div>
  );
};

export default Header;
