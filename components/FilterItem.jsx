import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { getCandidates } from "../utility/Axios";
import { light, dark, pink_grey } from "./colors";

function FilterItem({ text, filterData, setFilterMenu, filterList }) {
  return (
    <View>
      <Text style={styles.Exams_item_text}>{text}</Text>
      <View style={styles.Exams_item_button}>
        <Button
          title={filterData}
          color={light}
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
  },
  Exams_item_text: {
    alignSelf: "center",
  },
});
