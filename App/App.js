import * as React from 'react';

// You can import from local files
import { Routes } from './src/Routes/Routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Routes/>
  );
}