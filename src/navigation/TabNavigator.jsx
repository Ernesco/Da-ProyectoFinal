import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import { colors } from "../global/Color";
import OrdersNavigator from "./OrderNavigator";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabStyle,
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Fontisto name="shopping-store" size={24} color={focused ? "#fff" : "black"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome5 name="shopping-cart" size={24} color={focused ? "#fff" : "black"} />
                        )
                    }}
                />
                <Tab.Screen
                    name="OrderStack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Entypo name="archive" size={24} color={focused ? "#fff" : "black"} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: colors.primary,
        shadowColor: "#ccc",
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 20,
        height: 60,
        borderRadius: 20,
    }

})