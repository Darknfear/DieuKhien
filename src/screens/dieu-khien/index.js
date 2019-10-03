import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import ToggleSwitch from "toggle-switch-react-native"
import styles from "./styles"
import { conTrol, urlUP, urlDOWN, urlPAUSE } from "../../services/index"

export default class DieuKhien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            isPause: false,
            isDisabled: true
        }
        
    }
    onClickButtonSwitch = () => {
        this.setState({
            isOn: !this.state.isOn
        })
        if (this.state.isOn == false) this.state.isDisabled = false
        if (this.state.isOn == true) this.state.isDisabled = true
    }
   
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('data', 'NO-IP');
        return (
            <View style={styles.container}>
                <View style={styles.element}>
                    <TouchableOpacity
                        disabled={this.state.isDisabled}
                        onPress={() => {
                            conTrol(urlUP(itemId)),
                            console.log("ip"+urlUP(itemId))
                        }}>
                        <Image
                            style={styles.img}
                            source={require("../../assets/img/goup.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.element}>
                <TouchableOpacity
                    disabled={this.state.isDisabled}
                    onPress={() => {
                        this.setState({
                            isPause: true
                        }),
                        conTrol(urlUP(itemId))
                    }}>
                    <Image
                        style={styles.img}
                        source={require("../../assets/img/pause.png")} />
                </TouchableOpacity>
                </View>
                <View style={styles.element}>
                    <TouchableOpacity
                        disabled={this.state.isDisabled}
                        onPress={() => conTrol(urlUP(itemId))}>
                        <Image
                            style={styles.img}
                            source={require("../../assets/img/godown.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.element}>
                    <ToggleSwitch
                        isOn={this.state.isOn}
                        onColor="green"
                        offColor="red"
                        size="large"
                        onToggle={() => this.onClickButtonSwitch()}
                    />
                </View>
            </View>
        );
    }
}