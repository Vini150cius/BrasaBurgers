import { Text, useColorScheme, View } from "react-native";
import { lightTheme, darkTheme} from "./../../components/Styles/Styles"

export default function HomeScreen() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: theme.colors.text}}>Home!</Text>
      </View>
    );
  }
