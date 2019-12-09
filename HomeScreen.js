import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import ModalScreen, { } from './ModalScreen';
import DetailsScreen, { } from './DetailsScreen';
import LogoTitle, { } from './LogoTitle';


class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
            headerTitle: () => <LogoTitle />,
            headerRight: () => (
                <Button
                    title="+1"
                    color='#fff'
                    onPress={navigation.getParam('increaseCount')}
                />
            ),
            headerLeft: () => (
                <Button
                    title="Info"
                    color="#fff"
                    onPress={() => {
                        navigation.navigate("MyModel")
                    }}
                />
            )
        }
    };

    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('./CoffeetoGo.png')}
                    style={{ width: 30, height: 30 }}
                />
                <Text>Home Screen</Text>
                <Text>Count:{this.state.count}</Text>
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





const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Details: DetailsScreen,
        MyModel: {
            screen: ModalScreen,
        }
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