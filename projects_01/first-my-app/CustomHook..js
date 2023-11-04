import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const InputBox = (props) => {
    return (
        /*변수명을 불러와야댐. */
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={{ borderBottomWidth: 1, width: 200 }}
            />
            <Button title="reset" onPress={props.onReset} />
        </View>
    );
};

/* initialValue 는 입력값 */
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const resetValue = () => setValue(initialValue);

    return {
        value,
        setValue,
        resetValue,
    };
};

const CustomHook = () => {
    /*useInput의 기본값을 빈문자열로 정의해줌 */
    const { value: name, setValue: setName, resetValue: resetName } = useInput('');
    const { value: age, setValue: setAge, resetValue: resetAge } = useInput('');
    const { value: city, setValue: setCity, resetValue: resetCity } = useInput('');

    return (
        <View>
            <InputBox value={name} placeholder="name" onChangeText={setName} onReset={resetName} />
            <InputBox value={age} placeholder="age" onChangeText={setAge} onReset={resetAge} />
            <InputBox value={city} placeholder="city" onChangeText={setCity} onReset={resetCity} />
        </View>
    );
};

export default CustomHook;
// /* <View style={{ flexDirection: 'row' }}> */
//     /* <TextInput */
//         /* /* 아래 두 라인은 같은 기능을하는 코드이다.  */
//         /* onChangeText={setName}는 텍스트가 입력되었을때 setName을 호출하여 텍스트를 화면상 출력해준다. */}
//         /* onchangeText={(v) => {setName(v);}}는 텍스트(v)가 입력시 setName을 호출하여 텍스트를 화면상에 출력해준다. */ */}
//         /* // value={name} */
//         /* // placeholder="name" */
//         /* // onChangeText={setName} */
//         /* // onchangeText={(v) => {setName(v);}} */
//         /* style={{ borderBottomWidth: 1, width: 200 }} */
//     /* /> */
//     /* 아래 버튼의 setName('')부분은 괄호안에 false가 와도 작동은하지만 계연성이 없으므로 ""빈문자열을 넣어줬다. */}
//     /* <Button title="reset" onPress={() => setName('')} /> */
// /* </View> */
