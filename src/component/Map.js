import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default class Map extends Component {

   
    componentWillMount() {

        console.log(this.props.data);
        const { yourLongLat } = this.props.data;

        this.setState({
            region: {
            latitude: yourLongLat[0],
            longitude: yourLongLat[1],
            latitudeDelta: 5,
            longitudeDelta: 5,
            }
        })

    }


    render() {  
        const { yourLongLat, stateLongLat } = this.props.data;
        const origin = {latitude: yourLongLat[0], longitude: yourLongLat[1] };
        const destination = {latitude: stateLongLat[0], longitude: stateLongLat[1] };
        const GOOGLE_MAPS_APIKEY = 'AIzaSyBc35Pl6x0JDTOZm7ZLmfZK60cPmctGfxc';

    return (

        <View style={{ flex: 1 }}>
                <MapView 
                style={{ flex: 1 }} 
                region={this.state.region}
                >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="red"
             />


                </MapView>
         </View>
    );
}
}
