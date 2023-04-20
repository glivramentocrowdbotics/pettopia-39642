import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text, StyleSheet, View } from "react-native";

const PhotoLibraryScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Pressable onPress={() => {
      navigation.navigate("photoFilter");
    }}><Text style={styles.headingTxt}>Photo Library Screen</Text></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  }
});
export default PhotoLibraryScreen;