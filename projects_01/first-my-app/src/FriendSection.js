import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FriendSection = (props) => {
    return (
        <View style={styles.main_view}>
            <Text>친구 {props.friendProfileLen}</Text>
            <TouchableOpacity onPress={props.onPressArrow}>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default FriendSection;
