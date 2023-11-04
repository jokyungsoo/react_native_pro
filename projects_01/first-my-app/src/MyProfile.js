import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Margin from './Margin';
// const myprofile = () => {};

const MyProfile = (props) => {
    return (
        <View style={styles.profile_view_array}>
            <Image source={{ uri: props.uri }} style={styles.profile_img} />
            <View style={styles.profile_text_view}>
                <Text style={styles.profile_name}>{props.name}</Text>
                <Margin height={6} />
                <Text style={styles.profile_introduction}>{props.introduction}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    /* 프로필 사진, 프로필 이름, 프로필 설명 */
    profile_view_array: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    /*프로필 이름, 프로필 설명 */
    profile_text_view: {
        marginLeft: 10,
    },
    /* 프로필 사진 */
    profile_img: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    /* 프로필 이름 */
    profile_name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    /* 프로필 설명 */
    profile_introduction: {
        fontSize: 12,
        opacity: 0.4,
    },
});

export default MyProfile;
