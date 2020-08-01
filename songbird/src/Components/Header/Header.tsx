import React from 'react';
import Score from '../Score/Score';
import Menu from '../Menu/Menu';

const Header: React.FC = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex justify-content-start">
          Songbird
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end">
          <Score score={45} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Menu />
        </div>
      </div>
    </div>
  </>
);

export default Header;
