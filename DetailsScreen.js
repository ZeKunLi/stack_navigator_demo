import React from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailsScreen extends React.Component {
  // static navigationOptions = {
  //     title: "Details"
  // }

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //     const { params } = navigation.state;
  //     console.log(navigationOptions)
  //     return {
  //         title: params ? params.otherParam : 'A Nested Details Screen',
  //         /* These values are used instead of the shared configuration! */
  //         headerStyle: {
  //             backgroundColor: navigationOptions.headerTintColor,
  //         },
  //         headerTintColor: navigationOptions.headerStyle.backgroundColor,
  //     };
  // };
  // static navigationOptions = ({ navigation }) => {
  //     return {
  //         title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  //     };
  // };

  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    const {navigation} = this.props;
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({otherParam: 'Updated!'})
          }
        />
        <Text>
          itemId:
          {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => this.props.navigate.goBack()} />
        <Button
          title="popToTop"
          onPress={() => {
            this.props.navigation.popToTop();
          }}
        />
      </View>
    );
  }
}
