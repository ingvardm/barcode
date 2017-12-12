import React from 'react'
import Camera from 'react-native-camera'
import { defaultStyle } from './defaults'

export default CameraComponent = props => <Camera
    onBarCodeRead={props.onBarCodeRead}
    style={props.style || defaultStyle}
    aspect={props.aspect || Camera.constants.Aspect.fill}
/>