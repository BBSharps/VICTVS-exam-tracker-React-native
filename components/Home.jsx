import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { getCandidates } from "../utility/Axios";
import { light, dark, pink_grey } from "./colors";

function Home({ setCandidate }) {
  useEffect(() => {
    getCandidates()
      .then((response) => {
        setCandidates(response);
      })
      .catch((error) => {});
  });
  const [name, onChangeName] = React.useState("");
  const [number, onChangeNumber] = React.useState();
  const [candidates, setCandidates] = useState();
  return (
    <View style={styles.Login}>
      <Text style={styles.text}>Welcome candidate please log in</Text>
      <TextInput
        style={styles.id}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Candidate Id"
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        style={styles.id}
        onChangeText={onChangeName}
        value={name}
        placeholder="Candidate Name"
        keyboardType="default"
      ></TextInput>
      <View style={styles.button}>
        <Button
          style={styles.button_button}
          title="Log in"
          color={dark}
          onPress={(e) => {
            if (number < candidates.length) {
              console.log(number, name);
              if (
                Number(number) === candidates[number].candidate_id &&
                name === candidates[number].candidate_name
              ) {
                setCandidate(candidates[number]);
              }
            }
          }}
        ></Button>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  Login: {
    width: 250,
    height: 250,
    backgroundColor: pink_grey,
    justifyContent: "flex-start",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    top: 130,
    left: "15%",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    margin: 5,
    color: light,
  },
  id: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: light,
    color: dark,
  },
  button: {
    alignSelf: "center",
    width: "50%",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: light,
  },
});
