import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store} from './src/services/redux/store';
import {persistStore} from 'redux-persist';
import RouteNav from '@navigation/index';

const App = () => {
  let persister = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persister}>
        <RouteNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
