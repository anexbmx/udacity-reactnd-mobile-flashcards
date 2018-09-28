import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import StyledButton from "./StyledButton";
import { createDeck } from "../actions";
import { generateId } from "../utils/helpers";
import { white, gray } from "../utils/colors";

class AddDeck extends Component {
  state = {
    input: ""
  };

  handleInputChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleSubmit = () => {
    deckId = generateId();
    deckName = this.state.input;

    this.props.createDeck(deckId, deckName);

    // TODO: Submit Deck to AsyncStorage

    // Route to new deck's detail view.
    this.props.navigation.navigate("DeckDetail", {
      deckId: deckId,
      name: deckName
    });

    // Reset input for future use.
    this.setState(() => ({
      input: ""
    }));
  };

  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.label}>What will you learn in this deck?</Text>
        <TextInput
          style={styles.input}
          value={input}
          placeholder="e.g. Algebra"
          onChangeText={this.handleInputChange}
        />
        <StyledButton onPress={this.handleSubmit}>
          <Text>Create Deck</Text>
        </StyledButton>        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    backgroundColor: white,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: gray,
    margin: 20
  }  
});

const mapDispatchToProps = dispatch => ({
  createDeck: (id, deckName) => dispatch(createDeck(id, deckName))
});

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);
