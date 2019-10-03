import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from "./Style"

export default class NhapIp extends Component{
    constructor(props){
        super(props);
        this.state = {
            ip : "",
        }
    }

    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>
                <TextInput
                    onChangeText={ text => this.setState({ip : text},console.log(this.state.ip))}
                    placeholderTextColor="gray"
                    placeholder="nhập ip"
                    style={styles.input}/>
                <TouchableOpacity
                    onPress={() => navigate("dieukhien", {data : this.state.ip})} 
                    style={styles.button}>
                    <Text>Chuyển vào điều khiển</Text>
                </TouchableOpacity>    

            </View>
        );
    }
}