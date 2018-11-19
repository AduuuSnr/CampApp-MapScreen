import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get ('window');

export default class Button extends Component { 
    
    render() {
        return (

            <TouchableOpacity style= {{
                width: width * 0.71,
                height: height * 0.07,
                backgroundColor: '#381717',
                marginTop: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }} 
            onPress={() => this.props.onPress()} >
            
            <Text style={{ color : 'white' }}> {this.props.text} </Text>
            </TouchableOpacity>

        );
    }

}
