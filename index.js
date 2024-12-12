/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TaskList from './src/screens/TaskList';
import {name as appName} from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => () => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TaskList />
    </GestureHandlerRootView>
  ));