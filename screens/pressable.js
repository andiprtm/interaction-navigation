import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PressableScreen = () => {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = "Counter";
    if (timesPressed > 1) {
        textLog = timesPressed + "x onPress";
    } else if (timesPressed > 0) {
        textLog = "onPress";
    }

    return (
        <View style={styles.container}>
            <Pressable
                onLongPress={() => alert("Pressed Long")}
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                }}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? "yellow" : "#dddddd" },
                    styles.wrapperCustom,
                ]}
            >
                {({ pressed }) => (
                    <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
                )}
            </Pressable>
            <View>
                <Text>{textLog}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textTransform: "uppercase",
        fontSize: 24,
        fontWeight: "bold",
    },
    wrapperCustom: {
        padding: 15,
        marginBottom: 30,
    },
});

export default PressableScreen;
