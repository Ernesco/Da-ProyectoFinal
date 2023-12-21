import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Categories from './src/screebs/Categories';
import { colors } from './src/global/Color';
import { useFonts } from 'expo-font';
import ProductsByCategory from './src/screebs/ProductsByCategory';
import { useState } from 'react';
import ProductDetail from './src/screebs/ProductDetail';

export default function App() {

  const [categorySelec, setCategorySelec] = useState(``)
  const [productIdSelected, setPoroductIdSelected] = useState (``)

  console.log("categoria:", categorySelec)

  const [fontLoaded] = useFonts({
    "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "DancingScript-Regular": require("./assets/fonts/DancingScript-Regular.ttf"),
    "PermanentMarker-Regular": require("./assets/fonts/PermanentMarker-Regular.ttf")
  })

  if (!fontLoaded) {
    return <ActivityIndicator />
  }

  const onSelectCategory = (category) => {
    setCategorySelec(category)
  }

  const SelecId = (productId) => {
    setPoroductIdSelected(productId)
  }

  return (
    <>{
      productIdSelected
      ?
      <ProductDetail productId = {productIdSelected}/>
      :
      categorySelec
      ?
      <ProductsByCategory category={categorySelec} SelecProducId={SelecId} />
      :
          <Categories onSelectCategoryEve={onSelectCategory} />
    }
    </>
  );
}

const styles = StyleSheet.create({
});
