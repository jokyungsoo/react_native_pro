import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Switch, TextInput } from 'react-native';

const Component = () => {
    const [count, setCount] = useState(0); // number
    const [isOff, setOn] = useState(false);
    const [name, setname] = useState('');
    // const result = useState(0);
    // const count = result[0];
    // const setCount = result[1];

    // const arr = [1,2,3];
    // // const first = arr[0];
    // // const second = arr[1];
    // // const third = arr[2];
    // const[first, second, third] = arr;

    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} />

            <Text>*********</Text>
            <Switch
                value={isOff}
                onValueChange={(v) => {
                    console.log('vv', v);
                    setOn(v);
                }}
            />
            <Text>*********</Text>
            <TextInput
                value={name}
                onChangeText={(v) => {
                    console.log('v', v);
                    setname(v);
                }}
                style={{ backgroundcolor: 'pink' }}
            />
        </View>
    );
};

export default Component;
