import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HomeScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Ini Navigation menggunakan hook</Text>
            <Button
                title="Go to My profile"
                color="black"
                onPress={() => navigation.navigate("Profile", { name: "Andi" })} // Passing Data
            />
        </View>
    );
};

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            {/* Get Data */}
            <Text style={{ fontSize: 24 }}>
                This is {route.params.name}'s profile
            </Text>
        </View>
    );
};

const StackHookScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: "#101010",
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTintColor: "#ffd700",
                    headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Hello",
                        // headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: "My Profile",
                        // headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackHookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
