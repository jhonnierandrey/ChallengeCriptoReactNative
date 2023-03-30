import React, {Fragment} from 'react';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </Fragment>
  );
};

export default App;
