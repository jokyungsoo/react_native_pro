import React from 'react';
import { useState } from 'react';
import CustomHook from './CustomHook.';
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFuctionalComponent from './StateWithFuctionalComponent';
import UseEffectWithClassComponent from './UseEffectWithClassComponent';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

// export default function APP() {
//     const [istrue, setIstrue] = useState(true);
//     return (
//         <View style={styles.container}>
//             {/* <StateWithClassComponent /> */}
//             {/* <StateWithFuctionalComponent /> */}
//             {/* {istrue ? <UseEffectWithClassComponent /> : null} */}
//             {/* {istrue && <UseEffectWithClassComponent />} */}
//             {/* {<UseEffectWithFunctionalComponent />} */}
//             {/* {<CustomHook />} */}
//         </View>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
