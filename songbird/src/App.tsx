import React from 'react';
import Header from './Components/Header/Header';

const App: React.FC = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Header />
        </div>
        <div className="col-12 col-lg-6" />
      </div>
    </div>
  </>
);

export default App;
