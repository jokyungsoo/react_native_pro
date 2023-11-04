import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CustomHook = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    /* 아래 두 라인은 같은 기능을하는 코드이다. 
                    onChangeText={setName}는 텍스트가 입력되었을때 setName을 호출하여 텍스트를 화면상 출력해준다.
                    onchangeText={(v) => {setName(v);}}는 텍스트(v)가 입력시 setName을 호출하여 텍스트를 화면상에 출력해준다. */
                    value={name}
                    placeholder="name"
                    onChangeText={setName}
                    // onchangeText={(v) => {setName(v);}}
                    style={{ borderBottomWidth: 1, width: 200 }}
                />
                {/* 아래 버튼의 setName('')부분은 괄호안에 false가 와도 작동은하지만 계연성이 없으므로 ""빈문자열을 넣어줬다. */}
                <Button title="reset" onPress={() => setName('')} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    value={age}
                    onChangeText={setAge}
                    placeholder="age"
                    style={{ borderBottomWidth: 1, width: 200 }}
                />
                <Button title="reset" onPress={() => setAge('')} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    value={city}
                    onChangeText={setCity}
                    placeholder="city"
                    style={{ borderBottomWidth: 1, width: 200 }}
                />
                <Button title="reset" onPress={() => setAge('')} />
            </View>
        </View>
    );
};

export default CustomHook;
