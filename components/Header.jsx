import { View, Text, StyleSheet, Button } from "react-native";
import { light, dark, pink_grey } from "./colors";

function Header({ candidate, setCandidate }) {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>Exam Day</Text>
      {candidate.candidate_name !== undefined ? (
        <View style={styles.logOut}>
          <Button
            style={styles.button}
            color={dark}
            title="Log out"
            onPress={(e) => {
              setCandidate({ candidate_name: undefined });
            }}
          ></Button>
        </View>
      ) : (
        <View style={styles.notLogOut}></View>
      )}
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  Header: {
    padding: 2,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 80,
    backgroundColor: pink_grey,
    justifyContent: "flex-end",
    borderBottomWidth: 3,
    borderStyle: "solid",
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    color: light,
  },
  notLogOut: {
    width: 100,
    height: 36,
    alignSelf: "flex-end",
  },
  logOut: {
    width: 100,
    alignSelf: "flex-end",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: light,
  },
});
