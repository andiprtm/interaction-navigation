import React from "react";
import { ScrollView, Image, View, Text, StyleSheet, Alert } from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";

const ButtonHandler = () => {
  Alert.alert("Button Handler");
};

const Article = ({ route }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={{
          uri: "http://ittelkom-sby.ac.id/wp-content/uploads/2014/10/logo-itts-sm-1-1.png",
        }}
        style={styles.logo}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>{route.params.data.title}</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: route.params.data.image,
          }}
          style={styles.mainImage}
        />
        <Text style={{ marginTop: 10, marginBottom: 10 }}>{route.params.data.title}</Text>
        <Separator height={10} />
        <Text style={{ fontWeight: "bold" }}>OCTOBER 24, 2023 </Text>
        <Separator height={10} />
        <View style={{ backgroundColor: "gray", height: 1 }} />
        <Separator height={20} />
        <Button text="Share" onPress={ButtonHandler} />
        <Separator height={70} />
      </View>
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  logo: {
    height: 60,
    resizeMode: "contain",
    marginVertical: 15,
  },
  titleView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#eeeeee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainImage: {
    height: 220,
    resizeMode: "cover",
  },
  content: {
    padding: 15,
  },
});
