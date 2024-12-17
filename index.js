/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Auth from './src/screens/Auth';
import {name as appName} from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => () => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Auth />
    </GestureHandlerRootView>
  ));