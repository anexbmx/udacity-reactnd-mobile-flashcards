import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import { Constants } from "expo";
import { white, purple, gray } from "./src/utils/colors";

import Decks from "./src/components/Decks";
import AddNewDeck from "./src/components/AddNewDeck";

const FlashcardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="list" size={30} color={tintColor} />
        )
      }
    },
    AddNewDeck: {
      screen: AddNewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="plus" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashcardsStatusBar
          backgroundColor={purple}
          barStyle="light-content"
        />
        <Tabs />
      </View>
    );
  }
}

export default App;
