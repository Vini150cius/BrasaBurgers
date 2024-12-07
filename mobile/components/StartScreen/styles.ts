import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    posicao: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        display:'flex',
        flex:1,
        backgroundColor: '#1B2F33',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1B2F33',
        padding: 8,
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DF2935',
        marginTop: 15,
        marginLeft: 50,
        marginRight: 50,
        padding: 10,
        borderRadius: 12,
    },
    textButton: {
        color: '#E6E8E6',
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    }
})