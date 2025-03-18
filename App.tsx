import React from 'react';
import { Provider } from 'react-redux';


import Navigation from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/redux/store';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
