import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

import Navigation from './src/View/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const WrapApp = styled.View`
    flex: 1;
`;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <WrapApp>
    <SafeAreaProvider>

      <Navigation/>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

    </SafeAreaProvider>
    </WrapApp>
  );
}

export default App;




