import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>Exam Day</Text>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  Header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "10%",
    backgroundColor: "#8A7D99",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderStyle: "solid",
    shadowOffset: 0,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
  },
});

// box-shadow: 0px 0px 2px 1px rgba(3, 3, 3, 0.5);
// z-index: 1;
