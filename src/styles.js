import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
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
  textButton:{
    color: '#E6E8E6',
    fontFamily: 'Helvetica',
    fontWeight: 'bold'
  },
  logo: {
    width: 300,
    height: 300,
    margin: 200,

  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  posicao:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection:'row',
    display:'flex',
    flex:1,
    backgroundColor: '#F49E4C',
  },
  texto:{
    fontWeight: 'bold',
    fontFamily:'Helvetica',
    fontSize: 14,
  },
  texto1:{
    fontFamily:'Helvetica',
    fontSize:20,
    paddingHorizontal:5,
  },
  texto2:{
    fontFamily:'Georgia',
    fontStyle: 9,
    paddingHorizontal:5

  },
  texto3:{
    fontFamily:'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal:5
  },
  detalhes:{    
    width: 200
  },
  display:{
    position: 'relative',
    margin: 10,
  },
});
