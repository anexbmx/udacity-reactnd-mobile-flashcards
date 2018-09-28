import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { green, red, white } from "../utils/colors";
import StyledButton from "./StyledButton";

const QuizActions = props => (
  <View style={styles.container}>
    <Text style={styles.heading}>Did you know the answer?</Text>
    <View style={styles.actions}>
      <TouchableOpacity style={[styles.answerBtn, { backgroundColor: green }]}>
        <Text style={{ color: white, fontSize: 20, fontWeight: "bold" }}>
          Yes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.answerBtn, { backgroundColor: red }]}>
        <Text style={{ color: white, fontSize: 20, fontWeight: "bold" }}>
          No
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  answerBtn: {
    padding: 20,
    margin: 10,
    borderRadius: 5
  }
});

export default QuizActions;
