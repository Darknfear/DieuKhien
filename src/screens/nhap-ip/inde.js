import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, ProgressBarAndroid } from 'react-native';
import styles from "./Style";
import { checkIP } from "../../services/index";

export default class NhapIp extends Component{
    constructor(props){
        super(props);
        this.state = {
            ip : "",
            animating : false
        }
    }
    onCheckIP = url => {
        this.setState({
            animating : true
        })
        checkIP(url).then( response => {
            if(response == "OK"){
                this.setState({
                    animating : false
                })
                console.log(response)
                alert("connect success"),
                this.props.navigation.navigate("dieukhien",{"data" : this.state.ip})
            }else {
                this.setState({
                    animating : false
                }),
                alert("connect failed");
            }
        })
        .catch( err => {
            this.setState({
                animating : false
            })
            console.log("lỗi : "+err),
            alert("connect failed");
        })
    }

    render(){
        const { ip } = this.state;
        console.log(ip)
        return(
            <View style={styles.container}>
                <ProgressBarAndroid styleAttr="Horizontal" animating={this.state.animating}/>
                <TextInput
                    onChangeText={ text => this.setState({ip : text},console.log(this.state.ip))}
                    placeholderTextColor="gray"
                    placeholder="nhập ip"
                    style={styles.input}/>
                <TouchableOpacity
                    onPress={() => this.onCheckIP("http:"+ip+":8080")} 
                    style={styles.button}>
                    <Text>Chuyển vào điều khiển</Text>
                </TouchableOpacity>    

            </View>
        );
    }
}