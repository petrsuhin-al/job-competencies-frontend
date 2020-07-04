import React from 'react';
import './App.scss';
import { AppHeader } from './components/AppHeader/AppHeader';
import { ResumeForm } from './containers/ResumeForm/ResumeForm';

function App() {
  return (
    <div className="app page">
      <AppHeader />
      <div className="page-content">
        <div className="row">
          <div className="col col-72">
            <ResumeForm />
          </div>
          <div className="col col-28">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
