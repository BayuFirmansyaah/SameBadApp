import { StyleSheet } from "react-native";
import {COLORS} from '../../constant/theme';

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:COLORS.primary,
    },
    containerImage: { 
        flex:9,
        alignItems:'center',
        justifyContent:'center'
    },
    containerButton: { 
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    button: { 
        width:'85%',
        backgroundColor:COLORS.white,
        padding:12,
        borderRadius:50,
    },
    textButton: { 
        textAlign:'center',
        fontSize:20,
        fontWeight:'700',
        color:COLORS.primary
    }
})

export default style;