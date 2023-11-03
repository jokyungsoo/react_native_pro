import React from 'react';
import { View, Text, Button } from 'react-native';

class Component extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('didMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <View>
                <Text>You clicked {this.state.count} times</Text>
                <Button title="Click" onPress={() => this.setState({ count: this.state.count + 1 })} />
            </View>
        );
    }
}

export default Component;
