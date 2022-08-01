import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/telas/Home';

function App() {
  return <SafeAreaView style = {estilos.telas}>
      <Home />
    </SafeAreaView>
}

const estilos = StyleSheet.create({
  telas: {
    flex: 1,
  }
})

export default App;
