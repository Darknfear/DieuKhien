import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import ToggleSwitch from "toggle-switch-react-native"
import styles from "./styles"
import { conTrol, urlUP, urlDOWN, urlPAUSE, urlModeAuto } from "../../services/index"
import { thisExpression } from '@babel/types';

const srcGoUp = "../../assets/img/goup.png";
const srcGoDown = "../../assets/img/godown.png";
const srcPause = "../../assets/img/pause.png";
const srcGoUpOff = "../../assets/img/goupoff.png";
const srcGoDownOff = "../../assets/img/godownoff.png";
const srcPauseOff = "../../assets/img/pauseoff.png";

export default class DieuKhien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUp: false,
            isPause: false,
            isDown : false,
            isDisabled: true,
            animating : false,
            onToggle : false
        }
        
    }
  
    onClick = url => {
        this.setState({
            animating :true
        })
        conTrol(url)
        .then( res => {
           if(res == "OK") {
               this.setState({
                   animating : false
               })
            }else {
               
            }
        })
        .catch( err =>{
            this.setState({
                animating : false
            }),
            alert(err)
        })
    }

    onClickToggle = url => {
        this.setState({
            onToggle : ! this.state.onToggle
        })
        if(this.state.onToggle == false) {
            this.setState({
                isDisabled : false,
                isPause : true
            }),
            this.onClick(url),
            console.log("when state of onToggle is false "+this.state.onToggle)
        }
        if(this.state.onToggle == true) {
            this.setState({
                isDisabled : true,
                isUp : false,
                isDown : false,
                isPause : false
            }),
            this.onClick(url),
            console.log("when state of onToggle is true "+this.state.onToggle)
        }
    }
   
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('data', 'NO-IP');
        const { isUp, isDown, isPause, onToggle, isDisabled } = this.state;
        console.log(isDisabled,onToggle)
        return (
            <View style={styles.container}>
                <View style={styles.element}/>
                <View style={styles.element}>
                    <TouchableOpacity
                        disabled={isDisabled}
                        onPress={() => {
                            this.onClick(urlUP(itemId)),
                            this.setState({
                                isUp : true,
                                isPause : false,
                                isDown : false
                            })
                        }}>
                        <Image
                            style={styles.img}
                            source={isUp == true ? require(srcGoUp) : require(srcGoUpOff)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.element}>
                <TouchableOpacity
                    disabled={isDisabled}
                    onPress={() => {
                        this.onClick(urlPAUSE(itemId)),
                        this.setState({
                            isPause : true,
                            isDown : false,
                            isUp : false
                        })
                    }}>
                    <Image
                        style={styles.img}
                        source={ isPause ? require(srcPause) : require(srcPauseOff) } />
                </TouchableOpacity>
                </View>
                <View style={styles.element}>
                    <TouchableOpacity
                        disabled={isDisabled}
                        onPress={() => {
                            this.onClick(urlDOWN(itemId)),
                            this.setState({
                                isUp : false,
                                isDown : true,
                                isPause : false
                            })
                        }}>
                        <Image
                            style={styles.img}
                            source={isDown ? require(srcGoDown) : require(srcGoDownOff)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.element}>
                    <ToggleSwitch 
                        isOn={onToggle}
                        onColor="green"
                        offColor="red"
                        label="Auto"
                        labelStyle={{ color: "black", fontWeight: "bold" }}
                        size="large"
                        onToggle={() => onToggle ? this.onClickToggle(urlModeAuto(itemId)) : this.onClickToggle(urlPAUSE(itemId))}/>
                </View>
            </View>
        );
    }
}