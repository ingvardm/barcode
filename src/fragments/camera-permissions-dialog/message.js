import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../../styles'

export default Message = props =>
    <View style={styles.container}>
        <Text>{props.messageText}</Text>
        {props.button ? (
            <Button
                onPress={props.button.callback}
                title={props.button.text}
                color={props.button.collor}
            />
        ) : null}
    </View>