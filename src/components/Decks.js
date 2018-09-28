import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import DeckSummaryCard from "./DeckSummaryCard";
import StyledButton from "./StyledButton";
import { green, white } from "../utils/colors";

class Decks extends Component {
  render() {
    const { decks, navigation } = this.props;

    return decks ? (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSummaryCard
              id={item.id}
              name={item.name}
              cardCount={item.cards.length}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item, index) => item.name}
        />
      </View>
    ) : (
      <View style={styles.blank}>
        <Text style={{ fontSize: 18 }}>You don't have any decks yet.</Text>
        <StyledButton
          onPress={() => {
            navigation.navigate("AddDeck");
          }}
        >
          Create Deck
        </StyledButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  },
  blank: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(Decks);
