'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import QRCodeScreen from './QRCodeScreen';

export default class CameraApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Index',
          component: Index,
        }}
      />
    );
  }
}

class Index extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={this._onPressQRCode}>
          <Text>Read QRCode</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onPressQRCode() {
    this.props.navigator.push({
      component: QRCodeScreen,
      title: 'QRCode',
      passProps: {
        onSucess: this._onSuccess,
      },
    });
  }

  _onSuccess(result) {
    console.log(result);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
