import React from 'react';
import { View, Text, Button } from 'react-native';
/*로그순서 첫번쨰 */
class Component extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            count: 0,
        };
    }
    /*로그순서 세번쨰 */
    componentDidMount() {
        console.log('didMount');
    }
    /*prev는 이전의 기록을 말한다. */
    componentDidUpdate(prevProps, prevState) {
        /*프롭스는 변경사항이 없어 출력안함 */
        console.log('prevProps', prevProps);
        /*클릭시 이전에 기록 콘솔로그출력 */
        console.log('prevState', prevState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    /*로그순서 두번쨰 */
    render() {
        console.log('render');
        return (
            <View>
                <Text>You clicked {this.state.count} times</Text>
                <Button title="Click" onPress={() => this.setState({ count: this.state.count + 1 })} />
            </View>
        );
    }
}

export default Component;
