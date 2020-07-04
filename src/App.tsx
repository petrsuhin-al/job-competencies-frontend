import React from 'react';
import './App.scss';
import { AppHeader } from './components/AppHeader/AppHeader';
import { ResumeForm } from './containers/ResumeForm/ResumeForm';
import { AppState } from './redux/ConfigureStore';
import { Store } from 'redux';
import { connect, Provider } from 'react-redux';
import { History } from 'history';

interface Props {
  store: Store<AppState>;
  history: History;
}

function mapStateToProps(state: AppState, ownProps: Props): Props {
  return { ...ownProps };
}

function App(props: Props) {
  const { store } = props;

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default connect(mapStateToProps)(App);
