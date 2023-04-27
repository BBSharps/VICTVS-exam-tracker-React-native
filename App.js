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
    <View style={styles.container}>
      <Header
        candidate={candidate}
        setCandidate={setCandidate}
        setClickedExam={setClickedExam}
      />
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
          <Text style={styles.clickedExam_txt}>{clickedExam.title}</Text>
          <Text style={styles.clickedExam_txt}>{clickedExam.description}</Text>
          <Text
            style={styles.clickedExam_txt}
          >{`${clickedExam.date} ${clickedExam.time} `}</Text>
          <Text style={styles.clickedExam_txt}>
            {clickedExam.location_name}
          </Text>
          <Text
            style={styles.clickedExam_txt}
          >{`${clickedExam.latitude} , ${clickedExam.longitude}`}</Text>
        </View>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark,
    height: "100%",
    width: "100%",
  },
  clickedExam: {
    position: "absolute",
    height: "30%",
    width: "82%",
    bottom: 10,
    left: "9%",
    backgroundColor: "#86577D",
    zIndex: 10,
    padding: 20,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  clickedExam_txt: {
    color: light,
  },
});
