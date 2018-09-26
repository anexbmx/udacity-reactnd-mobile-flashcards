import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DeckSummaryCard from "./DeckSummaryCard";

class Decks extends Component {
  // Temporary state for static component creation.
  state = {
    decks: {
      "Deck One": {
        name: "Deck One",
        cards: [
          { question: "Question One", answer: "Answer One" },
          { question: "Question Two", answer: "Answer Two" },
          { question: "Question Three", answer: "Answer Three" }
        ]
      },
      "Deck Two": {
        name: "Deck Two",
        cards: [
          { question: "Question One", answer: "Answer One" },
          { question: "Question Two", answer: "Answer Two" },
          { question: "Question Three", answer: "Answer Three" }
        ]
      },
      "Deck Three": {
        name: "Deck Three",
        cards: [
          { question: "Question One", answer: "Answer One" },
          { question: "Question Two", answer: "Answer Two" },
          { question: "Question Three", answer: "Answer Three" }
        ]
      },
      "Deck Four": {
        name: "Deck Four",
        cards: [
          { question: "Question One", answer: "Answer One" },
          { question: "Question Two", answer: "Answer Two" },
          { question: "Question Three", answer: "Answer Three" }
        ]
      },
      "Deck Five": {
        name: "Deck Five",
        cards: [
          { question: "Question One", answer: "Answer One" },
          { question: "Question Two", answer: "Answer Two" },
          { question: "Question Three", answer: "Answer Three" }
        ]
      },
      "Deck Six": {
        name: "Deck Six",
        cards: [
          { question: "Question One", answer: "Answer One" },
          { question: "Question Two", answer: "Answer Two" },
          { question: "Question Three", answer: "Answer Three" }
        ]
      }
    }
  };

  render() {
    const { decks } = this.state;

    return decks ? (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSummaryCard name={item.name} cardCount={item.cards.length} />
          )}
          keyExtractor={(item, index) => item.name}
        />
      </View>
    ) : (
      <Text>No Decks</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  }
});

export default Decks;
