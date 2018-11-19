import React, { Component } from 'react';
import { View } from 'react-native';

export default class foto extends Component {
    render() {
    return (

        <View style={styles.pickerButtonStyle}>

        {this.renderPickerButton()}

        
        </View>


    );
    }
}
const styles = {
    pickerButtonStyle: {
        width: width*0.17,
        height: width*0.17,
        borderRadius: (width*0.17) / 2,
        backgroundColor: 'white',
        marginTop: 20
    }

};
