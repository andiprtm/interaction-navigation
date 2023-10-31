import React from "react";
import { StatusBar, View, Text, Touchable } from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 0, flex: 1 }}>
      <StatusBar style={{ padding: 0 }} />
      <Text style = {{textAlign:'center',fontSize:30}}>
        Moch. Andi Divangga Pratama 
        (1203210005)
      </Text>
      <StackParamScreen/>
    </View>
  );
};

export default App;
