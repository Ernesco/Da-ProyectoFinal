import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Categories from "../screebs/Categories";
import ProductDetail from "../screebs/ProductDetail";
import ProductsByCategory from "../screebs/ProductsByCategory";
import Header from "../componets/Header";

const Stack = createNativeStackNavigator()
const Navigator= () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Category"
                screenOptions={
                ({navigation, route}) => ({
                    header: () => <Header title={route.name} navigation={navigation}/>
                    })

                    }
            >
                <Stack.Screen
                    name="Category"
                        component={Categories}
                        options={{title: "Categorias"}}
                />
                <Stack.Screen
                    name="Products"
                        component={ProductsByCategory}
                        options={{title: "Productos"}}
                />
                <Stack.Screen
                    name="Detail"
                        component={ProductDetail}
                        options={{title: "Detalle del Producto"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigator