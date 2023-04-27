import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { light, dark, pink_grey } from "./colors";
import { getExams } from "../utility/Axios";
import FilterItem from "./FilterItem";

function ExamsFilter({ candidate, setExams }) {
  const [filter, setFilter] = useState(true);
  useEffect(() => {
    getExams(candidate.candidate_id, filterLocation, filterDate, filterOrder)
      .then((response) => {
        setExams(response);
      })
      .catch((error) => {});
  }, [filter]);

  const [filterLocation, setFilterLocation] = useState("All");
  const [filterDate, setFilterDate] = useState("**/**/****");
  const [filterOrder, setFilterOrder] = useState("Newest");
  const [dates, setDates] = useState([
    "**/**/****",
    "17/06/2023",
    "25/08/2023",
    "05/05/2023",
  ]);
  const [locations, setLocations] = useState([
    "All",
    "London",
    "Sydney",
    "Leeds",
    "Berlin",
    "Milan",
    "Woking",
    "New York",
  ]);
  const [filterMenu, setFilterMenu] = useState(false);
  const [orders, setOrders] = useState(["Newest", "Oldest"]);

  return (
    <View style={styles.ExamsFilter}>
      <View style={styles.Exams_filter}>
        <FilterItem
          key="date"
          text={"Date :"}
          filterData={filterDate}
          setFilterData={setFilterDate}
          setFilterMenu={setFilterMenu}
          filterList={dates}
        />
        <FilterItem
          key="location"
          text={"Locations :"}
          filterData={filterLocation}
          setFilterData={setFilterLocation}
          setFilterMenu={setFilterMenu}
          filterList={locations}
        />
        <FilterItem
          key="order"
          text={"Order :"}
          filterData={filterOrder}
          setFilterData={setFilterOrder}
          setFilterMenu={setFilterMenu}
          filterList={orders}
        />
        <View>
          <View style={styles.Exams_filter_button}>
            <Button
              title="Filter"
              color={light}
              onPress={(e) => {
                setFilter(!filter);
              }}
            ></Button>
          </View>
        </View>
      </View>
      {filterMenu ? (
        <View style={styles.Exams_filter_menu}>
          {filterMenu.map((filter) => {
            return (
              <View key={filter} style={styles.Exams_date_button}>
                <Button
                  title={filter}
                  color={light}
                  onPress={(e) => {
                    if (dates.includes(filter)) {
                      setFilterDate(filter);
                    }
                    if (orders.includes(filter)) {
                      setFilterOrder(filter);
                    }
                    if (locations.includes(filter)) {
                      setFilterLocation(filter);
                    }
                    setFilterMenu(false);
                  }}
                ></Button>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

export default ExamsFilter;

const styles = StyleSheet.create({
  Exams_filter: {
    width: 150,
    padding: 10,
    height: 265,
    backgroundColor: pink_grey,
    justifyContent: "flex-start",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    top: 80,
    left: 0,
    zIndex: 10,
  },
  Exams_filter_menu: {
    width: 150,
    padding: 10,
    minHeight: 265,
    backgroundColor: pink_grey,
    justifyContent: "flex-start",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    top: 80,
    left: 0,
    zIndex: 10,
  },
  Exams_date_button: {
    width: "80%",
    alignSelf: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  Exams_date_text: {
    alignSelf: "center",
  },
  Exams_filter_button: {
    margin: 10,
    width: "90%",
    alignSelf: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  ExamsFilter: {
    position: "absolute",
    left: 0,
    top: 0,
  },
});
