import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import pluralize from "pluralize";
import { white, gray } from "../utils/colors";

import QuizCard from "./QuizCard";
import QuizActions from "./QuizActions";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").name} Quiz`
  });

  state = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestionIndex: 0 // tracks which card is currently being shown
  };

  _getRemainingCountMessage = () => {
    const { correctAnswers, incorrectAnswers } = this.state;
    const remainingQuestions =
      this._getDeck().cards.length - (correctAnswers + incorrectAnswers + 1);
    return `${remainingQuestions} ${pluralize(
      "question",
      remainingQuestions
    )} remaining.`;
  };

  _getDeck = () => {
    return this.props.navigation.getParam("deck");
  };

  render() {
    const {
      correctAnswers,
      incorrectAnswers,
      currentQuestionIndex
    } = this.state;

    return (
      <View style={styles.container}>
        <QuizCard card={this._getDeck().cards[currentQuestionIndex]} />
        <Text style={styles.count}>{this._getRemainingCountMessage()}</Text>
        <QuizActions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: white,
    padding: 10
  },
  count: {
    color: gray,
    fontSize: 20,
    marginTop: 10
  }
});

export default Quiz;
