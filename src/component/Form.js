import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import Button from '../commons/button';
import { strings } from '../Lang/Strings';
import RNGooglePlaces from 'react-native-google-places';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');


export default class Form extends Component { 
   
    state={
        yourLocation: '',
        selectState: '',
        yourLongLat: [],
        stateLongLat: [],
    }

    componentWillMount() {
        this.setState({
            yourLocation: strings.location,
            selectState: strings.selectState,

        });
    }


    renderSection(text,onPress) {
        
        return (
            
            <View style={styles.section}>

            <TouchableOpacity 
            onPress={onPress}
            style={{ 
                flex: 1, 
                justifyContent: 'space-between', 
                flexDirection: 'row', 
                alignItems: 'center' }}
            >

           
            <Text style={{ textAlign: 'center', flex: 9 }}> {text} </Text>

            <Image source={require('../img/ok.png')} />
             
            </TouchableOpacity>
            </View> 
        );
    }
    
    openSearchModal(type) {
                RNGooglePlaces.openAutocompleteModal()
                .then((place) => {
                    console.log(place);
                   
                    if (type === 'my') {
                        this.setState({ yourLocation: place.name,
                                        yourLongLat: [place.latitude, place.longitude] });
                            }
                    else { 
                        this.setState({ selectState: place.name, 
                                        stateLongLat: [place.latitude, place.longitude] }); 
                    }
                })
                .catch(error => console.log(error.message));  // error is a Javascript Error object
                        }
    render() {
        return (
            <ImageBackground source={require('../img/bg.png')} style={{ 
            width, 
            height, 
            alignItems: 'center', 
            justifyContent: 'center' }}
            >
            
            <Image source={require('../img/logo.png')} />   
            
            {this.renderSection(this.state.yourLocation, () => this.openSearchModal('my'))}           
            {this.renderSection(this.state.selectState, () => this.openSearchModal('place'))}
            
           <Button
           onPress={() => Actions.Map({
               data: {
                    yourLongLat: 
                    this.state.yourLongLat,
                    stateLongLat: 
                    this.state.stateLongLat,
                    }
           })}
           text={strings.findCamp}
           />
            
            </ImageBackground>
  
        );
    }

}
const styles = {
    section: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width: width * 0.59,
        height: height * 0.05,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
};
