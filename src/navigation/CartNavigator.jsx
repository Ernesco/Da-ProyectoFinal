import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../componets/Header";
import Cart from "../screebs/Cart";

const Stack = createNativeStackNavigator()
    const CartNavigator = () => {
        return(
            
            <Stack.Navigator
                initialRouteName="Carrito"
                screenOptions={
                ({navigation, route}) => ({
                    header: () => <Header title={route.name} navigation={navigation}/>
                    })

                    }
            >
                <Stack.Screen
                        name="Carrito"
                        component={Cart}
                />
            </Stack.Navigator>
        )
    }

    export default CartNavigator