import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

import { light, dark, pink_grey } from "./colors";

function FilterItem({ text, filterData, setFilterMenu, filterList }) {
  return (
    <View style={styles.Exams_item}>
      <Text style={styles.Exams_item_text}>{text}</Text>
      <View style={styles.Exams_item_button}>
        <Button
          title={filterData}
          color={dark}
          onPress={(e) => {
            setFilterMenu(filterList);
          }}
        ></Button>
      </View>
    </View>
  );
}

export default FilterItem;

const styles = StyleSheet.create({
  Exams_item_button: {
    width: "80%",
    alignSelf: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    margin: 5,
    color: dark,
  },
  Exams_item_text: {
    alignSelf: "center",
    color: dark,
  },
});
