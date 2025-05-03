import {SafeAreaView} from 'react-native'
import FlatList from './../../components/FlatList'
import styles from './styles'

export default function MenuScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <FlatList/>
    </SafeAreaView>
  )
}
