import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './Styles.js'

const StyledButtons = (props) => {

    // const type = props.type;
    // const content = props.containt;
    // const onPress = props.onPress;
    const { type, content, onPress } = props;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC';


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.Button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text,{color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButtons;