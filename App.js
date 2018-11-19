import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Roout from './src/Root';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Roout />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
