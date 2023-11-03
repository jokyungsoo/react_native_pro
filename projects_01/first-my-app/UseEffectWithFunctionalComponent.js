import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, Switch, ActivityIndicator } from 'react-native';

/*########################################
#         상태와 상태변경 함수 지정            #
##########################################*/

const Component = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(true);
    const [input, setInput] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);

    /*########################################
#         부수효과 및 생명주기 관리            #
##########################################*/

    useEffect(() => {
        console.log('didMount');
    }, []);
    useEffect(() => {
        console.log('didUpdate - count', count);
    }, [count]);

    useEffect(() => {
        console.log('didUpdate - isOn', isOn);
    }, [isOn]);

    useEffect(() => {
        console.log('didUpdate - input', input);
    }, [input]);

    useEffect(() => {
        if (isRefresh) {
            setTimeout(() => {
                setIsRefresh(false);
            }, 2000);
        }
    }, [isRefresh]);
    /*########################################
#         UI 구성요소와 상태연결              #
##########################################*/

    return (
        <View style={{ alignItems: 'center' }}>
            {/* 클릭 횟수(count)를 표시합니다. */}
            <Text>You clicked {count} times</Text>
            {/* 클릭하면 클릭 횟수를 증가시킵니다. */}
            <Button title="Click me" onPress={() => setCount(count + 1)} />

            <Text style={{ marginVertical: 15 }}>-------------------------------------------------</Text>
            {/* 스위치(on/off)를 토글합니다. */}
            <Switch value={isOn} onValueChange={setIsOn} />

            <Text style={{ marginVertical: 15 }}>-------------------------------------------------</Text>

            <Text>input: {input}</Text>
            {/* 사용자가 입력한 값을 input 상태에 반영합니다. */}
            <TextInput value={input} onChangeText={setInput} style={{ borderBottomWidth: 1, borderColor: 'grey' }} />

            <Text style={{ marginVertical: 15 }}>-------------------------------------------------</Text>
            {/* 새로고침을 실행하며, isRefresh가 true일 때 <ActivityIndicator>를 보여줍니다. */}
            <Button
                title="새로고침!"
                onPress={() => {
                    setIsRefresh(true);
                }}
            />
            {isRefresh && <ActivityIndicator />}
        </View>
    );
};
// import Component from './Component'와 같은 방식으로 해당 컴포넌트를 불러올 수 있습니다.
export default Component;
