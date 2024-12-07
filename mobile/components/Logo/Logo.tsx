import {View, Image} from 'react-native'

import S from './styles'

export default ()=>(
  <View style={S.positionImage}>
    <Image style={S.image} source={require('./../../assets/logo.png')}/>
  </View>
)