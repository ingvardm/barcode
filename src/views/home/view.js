/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native'

import { CameraComponent } from '../../fragments'
import styles from '../../styles'
import {onBarCodeRead} from './model'

export default Home = props =>
    <View style={styles.container}>
        <CameraComponent
            style={styles.camera}
            onBarCodeRead={onBarCodeRead} />
    </View>