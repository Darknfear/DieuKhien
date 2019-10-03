import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    input : {
        borderBottomWidth : 1,
        width : width - 10,
        margin: 5,
        padding : 5
    },
    button : {
        width : width/2,
        borderRadius : 5,
        height : height/14,
        backgroundColor : "tomato",
        justifyContent : "center",
        alignItems : "center",
        margin : 10
    }
});

export default styles;