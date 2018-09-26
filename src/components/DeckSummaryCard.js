import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { gray } from "../utils/colors";

const DeckSummaryCard = ({ name, cardCount }) => (
  <TouchableOpacity style={styles.container} onPress={() => alert("Hello")}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.count}>{cardCount} Cards</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minHeight: 150,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: gray
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    textAlign: "center",
    color: gray,
    marginBottom: 5
  }
});

export default DeckSummaryCard;
