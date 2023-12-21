import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Categories from "../screebs/Categories";
import ProductDetail from "../screebs/ProductDetail";
import ProductsByCategory from "../screebs/ProductsByCategory";

const Stack = createNativeStackNavigator()
const Navigator= () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Categorias"
                        component={Categories}
                />
                <Stack.Screen
                    name="Productos"
                        component={ProductsByCategory}
                />
                <Stack.Screen
                    name="ProdDetalle"
                        component={ProductDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigator