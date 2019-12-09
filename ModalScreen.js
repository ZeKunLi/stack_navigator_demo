import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ModalScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>This is a modal</Text>
                <Button
                    title="Dismiss"
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                />
            </View>
        )
    }
}