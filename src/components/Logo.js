import {View, Image} from 'react-native'

import styles from './../styles'

export default ()=>(
  <View style={styles.containerLogo}>
    <Image style={styles.logo} source={require('./../../assets/Logo-TCC.png')}/>
  </View>
)