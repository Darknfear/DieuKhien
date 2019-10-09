import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    element : {
        flex : 1,
        margin:10,
        padding : 5,
        alignItems : "center",
        justifyContent : "center"
    },
    img : {
        height : width/4,
        width : width/4

    }
});

export default styles;