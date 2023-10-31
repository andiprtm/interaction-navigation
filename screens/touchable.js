import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
} from "react-native";

const TouchableScreen = () => {
    const onPressButton = () => {
        alert("You tapped the button!");
    };

    const onLongPressButton = () => {
        alert("You long-pressed the button!");
    };

    return (
        <View style={styles.container}>
            {/* TouchableHighlight */}
            <TouchableHighlight activeOpacity={0} underlayColor="#000000" onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>

            <View style={{ marginBottom: 15 }} />

            {/* TouchableOpacity */}
            <TouchableOpacity onPress={onPressButton} activeOpacity={0} underlayColor="000000">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginBottom: 15 }} />

            {/* TouchableNativeFeedback */}
            <TouchableNativeFeedback
                background={
                    Platform.OS === "android"
                        ? TouchableNativeFeedback.SelectableBackground()
                        : ""
                }
                onPress={onPressButton}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        TouchableNativeFeedback{" "}
                        {Platform.OS !== "android" ? "(Android only)" : ""}
                    </Text>
                </View>
            </TouchableNativeFeedback>

            <View style={{ marginBottom: 15 }} />

            {/* TouchableWithoutFeedback */}
            <TouchableWithoutFeedback onPress={onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={{ marginBottom: 15 }} />

            {/* OnLonggPress */}
            <TouchableHighlight
                onPress={onPressButton}
                onLongPress={onLongPressButton}
                underlayColor="white"
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 260,
        alignItems: "center",
        backgroundColor: "#AAAAAA",
    },
    buttonText: {
        textAlign: "center",
        padding: 20,
        color: "black",
        fontWeight: "bold",
    },
});

export default TouchableScreen;
