import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { light, dark, pink_grey } from "./colors";

function ExamsList({ exams, setClickedExam }) {
  return (
    <View style={styles.ExamsList}>
      <View style={styles.ExamsList_list}>
        <ScrollView style={styles.ExamsList_list_scroll}>
          {exams.length > 0 ? (
            exams.map((exam) => {
              return (
                <View
                  style={styles.ExamsList_list_item}
                  key={exam.title}
                  onStartShouldSetResponder={(e) => {
                    setClickedExam(exam);
                  }}
                >
                  <Text>{exam.title}</Text>
                  <Text>{exam.description}</Text>
                  <Text>{`${exam.date} ${exam.time} `}</Text>
                  <Text>{exam.location_name}</Text>
                </View>
              );
            })
          ) : (
            <View style={styles.ExamsList_list_item}>
              <Text>No</Text>
              <Text>Exams</Text>
            </View>
          )}
          <View style={styles.ExamsList_list_spacer} key="1"></View>
          <View style={styles.ExamsList_list_spacer} key="2"></View>
        </ScrollView>
      </View>
    </View>
  );
}
export default ExamsList;

const styles = StyleSheet.create({
  ExamsList: {
    width: "90%",
    marginTop: 80,

    flexDirection: "row",
  },
  ExamsList_list: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255, 0)",
  },
  ExamsList_list_item: {
    padding: 5,
    height: 110,
    width: 150,
    margin: 5,
    backgroundColor: pink_grey,
    borderRightWidth: 2,
    borderBottomWidth: 1,
  },
  ExamsList_list_spacer: {
    padding: 5,
    height: 110,
    width: 150,
    margin: 5,
  },
  ExamsList_list_scroll: {
    height: "100%",
    marginLeft: 170,
  },
});
