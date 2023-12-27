import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../componets/Header";
import Orders from "../screebs/Orders";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Órdenes"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />,
                })
            }
        >
            <Stack.Screen
                name="Órdenes"
                component={Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator