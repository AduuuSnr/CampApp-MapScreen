import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Form from './component/Form';
import Map from './component/Map';


export default class Root extends Component {

    render() {
        return (
            <Router>
                <Scene
                key='Root'
                >
                    <Scene
                    key='Form' 
                    component={Form}
                    hideNavBar
                    initial
                    />
                    <Scene
                    key='Map' 
                    component={Map}
                    
                    />

                </Scene>
            </Router>
        );
    }
}
