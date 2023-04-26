import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";
import { dark } from "./components/colors";

export default function App() {
  const [candidate, setCandidate] = useState({ candidate_name: undefined });
  return (
    <View style={styles.container}>
      <Header candidate={candidate} setCandidate={setCandidate} />
      {candidate.candidate_name === undefined ? (
        <Home setCandidate={setCandidate}></Home>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: dark,
  },
});
