import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import GradientContainer from "../GradientContainer";

const FlatListContainer = ({
  data,
  heightOne,
  heightTwo,
  widthOne,
  widthTwo,
  marginTop,
}) => {
  const renderItem = ({ item }) => {
    const renderIcon =
      item.id === "1" ? (
        <MaterialCommunityIcons name="memory" size={38} color="#DAA520" />
      ) : (
        <FontAwesome5 name="memory" size={35} color="#009E60" />
      );

    return (
      <GradientContainer
        colors={item.colors}
        heightOne={heightOne}
        widthOne={widthOne}
        heightTwo={heightTwo}
        widthTwo={widthTwo}
        children={
          <View style={styles.itemContainer}>
            {item.icon}
            <View style={{ marginTop: marginTop || 1 }}>
              <Text style={styles.itemText}>{item.type}</Text>
              <Text style={styles.itemSubText}>{item.size}</Text>
            </View>
          </View>
        }
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  listContainer: {
    marginTop: 30,
  },
  itemContainer: {
    // Your styles for the item container
  },
  itemText: {
    color: "white",
    fontWeight: "600",
    fontSize: 17,
  },
  itemSubText: {
    color: "gray",
    fontWeight: "600",
    fontSize: 15,
  },
});
export default FlatListContainer;
