import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFuctionalComponent from './StateWithFuctionalComponent';
import UseEffectWithClassComponent from './UseEffectWithClassComponent';
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent';
/**
 * Header
 * MyProfile
 * Division
 * Friends_Section
 * Friends_List
 */

export default function APP() {
    return (
        <View style={styles.container}>
            {/* <StateWithClassComponent /> */}
            {/* <StateWithFuctionalComponent /> */}
            {/* {<UseEffectWithClassComponent />} */}
            {<UseEffectWithFunctionalComponent />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
