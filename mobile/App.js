import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

//View = Div
//Text = simple text without any style
//StyleSheet = create a .css inside a JS file

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <Routes/>
  );
}