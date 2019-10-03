import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from "./screens/navigation/index";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex : 1}}>
                <AppContainer />
            </View>
        );
    }
}