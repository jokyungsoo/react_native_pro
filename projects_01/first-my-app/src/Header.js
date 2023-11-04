// yarn add react-native-iphone-x-helper : iphon-x

import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/* 아이콘은 모두 함수로 뿌려준다. */
const IconButton = (props) => {
    return (
        <View style={styles.icon_top}>
            <Ionicons name={props.name} size={24} color="black" />
        </View>
    );
};

export default () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>친구</Text>
            <View style={styles.headerContainer_right}>
                <IconButton name="search-outline" />
                <IconButton name="person-add-outline" />
                <IconButton name="md-musical-notes-outline" />
                <IconButton name="ios-settings-outline" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    headerContainer_right: {
        flexDirection: 'row',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    icon_top: {
        paddingHorizontal: 7,
    },
});
