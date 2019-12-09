/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
// });

// const AppContainer = createAppContainer(AppNavigator);
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: someRouteName })
      );
  }
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
