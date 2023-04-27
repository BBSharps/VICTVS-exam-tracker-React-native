import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";
import { dark, light, pink_grey } from "./components/colors";
import ExamsFilter from "./components/ExamsFilter";
import ExamsList from "./components/ExamsList";

export default function App() {
  const [candidate, setCandidate] = useState({
    candidate_id: undefined,
    candidate_name: undefined,
  });
  const [exams, setExams] = useState([]);
  const [clickedExam, setClickedExam] = useState(false);
  return (
    <View style={styles.container} contentContainerStyle={{ flex: 1 }}>
      <Header candidate={candidate} setCandidate={setCandidate} />
      {candidate.candidate_name === undefined ? null : (
        <ExamsList exams={exams} setClickedExam={setClickedExam}></ExamsList>
      )}
      {candidate.candidate_name === undefined ? (
        <Home setCandidate={setCandidate}></Home>
      ) : (
        <ExamsFilter candidate={candidate} setExams={setExams} />
      )}
      {clickedExam ? (
        <View style={styles.clickedExam}>
          <Text>{clickedExam.title}</Text>
          <Text>{clickedExam.description}</Text>
          <Text>{`${clickedExam.date} ${clickedExam.time} `}</Text>
          <Text>{clickedExam.location_name}</Text>
          <Text>{`${clickedExam.latitude} , ${clickedExam.longitude}`}</Text>
        </View>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: light,
  },
  clickedExam: {
    position: "absolute",
    height: "30%",
    width: "82%",
    bottom: 10,
    left: "9%",
    backgroundColor: pink_grey,
    zIndex: 10,
    padding: 20,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
});
