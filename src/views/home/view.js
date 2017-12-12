import React, { Component } from 'react';
import { View } from 'react-native'
import Permissions from 'react-native-permissions'

import { CameraComponent } from '../../fragments'
import styles from '../../styles'
import { onBarCodeRead } from './model'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cameraPermission: undefined
        }
    }

    componentDidMount() {
        Permissions.check('camera').then(response => {
            this.setState({ cameraPermission: response })
            if (this.state['cameraPermission'] === 'undetermined') {
                Permissions.request('photo').then(response => {
                    // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                    this.setState({ cameraPermission: response })
                })
            }
        })
    }

    render() {
        return <View style={styles.container}>

            {this.state.cameraPermission === 'authorized' ? (
                <CameraComponent
                    style={styles.camera}
                    onBarCodeRead={onBarCodeRead} />
            ) : null}

        </View>
    }

}