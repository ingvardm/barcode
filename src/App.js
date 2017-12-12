/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native'

import {CameraComponent} from './fragments'
import styles from './styles'

export default class App extends Component {
    onBarCodeRead(e) {
        console.log(`Barcode Found! Type: ${e.type} Data: ${e.data}`)
    }

    render() {
        return (
            <View style={styles.container}>
                <CameraComponent
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}/>
            </View>
        );
    }
}
