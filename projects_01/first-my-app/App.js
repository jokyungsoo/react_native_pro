import React from 'react';
import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Header from './src/Header';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

const StatusBarHeight = getStatusBarHeight(true);
const BottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${StatusBarHeight}, ${BottomSpace}`);

export default function APP() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: BottomSpace,
        paddingTop: StatusBarHeight,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
    },
});
