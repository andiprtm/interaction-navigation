import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./list";
import Article from "./article";

const Stack = createNativeStackNavigator();

const StackParamScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ArticleList"
          component={List}
          options={{
            title: "Berita ITTelkom Surabaya",
          }}
        />

        <Stack.Screen
          name="ArticleDetail"
          component={Article}
          options={{
            title: "Detail Berita",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackParamScreen;
