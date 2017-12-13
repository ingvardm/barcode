import React from 'react'
import { View } from 'react-native'
import CameraComponent from '../camera'
import styles from '../../styles'

export default Scanner = props =>
    <View style={styles.container}>
        <CameraComponent
            style={styles.camera}
            onBarCodeRead={props.onBarCodeRead} />
    </View>