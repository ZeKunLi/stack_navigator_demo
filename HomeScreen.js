import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}


class HomeScreen extends React.Component {

    static navigationOptions = {
        // title: "Home",
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'

        },
        HeaderTitle: () => <LogoTitle />

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                    style={{ width: 30, height: 30 }}
                />
                <Text>Home Screen</Text>
                <Button
                    title={"Go to Details"}
                    onPress={() => {
                        navigate("Details", {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })
                    }}
                />

            </View>
        );
    }
}

class DetailsScreen extends React.Component {
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

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor

        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
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
                    onPress={() => navigation.push('Details', { 'itemId': Math.floor(Math.random() * 100) })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="popToTop"
                    onPress={() => {
                        this.props.navigation.popToTop()
                    }}
                />
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },

    },



);

export default createAppContainer(AppNavigator);