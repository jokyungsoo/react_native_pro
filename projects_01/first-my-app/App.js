import React, { useState } from 'react';

import { Platform, StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
//iphon-x
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
//yarn add react-native-safe-area-context를 해줘야 사용가능함.
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//import file

import Header from './src/Header';
import MyProfile from './src/MyProfile';
import { myProfile } from './src/date';
import Margin from './src/Margin';
import Division from './src/Division';

const StatusBarHeight = getStatusBarHeight(true);
const BottomSpace = getBottomSpace();

console.log(`${Platform.OS}: ${StatusBarHeight}, ${BottomSpace}`);

export default function APP() {
    return (
        // <SafeAreaProvider>
        //     <SafeAreaView style={styles.container} edges={['right', 'left']}>
        //         <Header />
        //     </SafeAreaView>
        // </SafeAreaProvider>
        <View style={styles.container}>
            <Header />
            {/* Margin 함수를 만들어주고 호출함 */}
            <Margin height={10} />
            {/* MyProfile 함수를 만들어주고 호출함, date.myProfile 함수를 호출함 */}
            <MyProfile uri={myProfile.uri} name={myProfile.name} introduction={myProfile.introduction} />
            <Margin height={15} />
            <Division />
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
