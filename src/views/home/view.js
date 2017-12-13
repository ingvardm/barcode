import React, { Component } from 'react';
import { View } from 'react-native'
import Permissions from 'react-native-permissions'
import { observer } from 'mobx-react'

import { CameraComponent } from '../../fragments'
import styles from '../../styles'
import { 
    store,
    onBarCodeRead,
    onComponentDidMount,
    cameraPermissionTypes
} from './model'

@observer class Home extends Component {
    componentDidMount = onComponentDidMount

    render() {
        return 
            <View style={styles.container}>
                {store.cameraPermissionStatus === cameraPermissionTypes.AUTHORIZED ? (
                    <CameraComponent
                        style={styles.camera}
                        onBarCodeRead={onBarCodeRead} />
                ) : null}
            </View>
    }
}

export default Home