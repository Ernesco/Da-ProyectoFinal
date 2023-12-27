import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigator from './src/navigation/TabNavigator';


export default function App() {

  const [fontLoaded] = useFonts({
    "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "DancingScript-Regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "PermanentMarker-Regular": require("./assets/fonts/PermanentMarker-Regular.ttf")
  })

  if (!fontLoaded) {
    return <ActivityIndicator />
  }

  return (
    <>
      <TabNavigator/>
    </>
  );
}
const styles = StyleSheet.create({
});
