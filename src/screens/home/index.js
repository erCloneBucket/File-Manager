import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import FlatListContainer from "../../component/flistListContainer";
import { ProgressChart } from "react-native-chart-kit";
import GradientContainer from "../../component/GradientContainer";
import { Ionicons } from "@expo/vector-icons";
const data = [
  {
    id: "1",
    type: "Internal",
    size: "264 Gb",
    colors: ["rgba(0,0,0,0.8)", "#DAA520"],
    icon: <MaterialCommunityIcons name="memory" size={38} color="#DAA520" />,
  },
  {
    id: "2",
    type: "External",
    size: "500 Gb",
    colors: ["rgba(0,0,0,0.8)", "#009E60"],
    icon: <FontAwesome5 name="memory" size={35} color="#009E60" />,
  },
];
const datas = [
  {
    id: "1",
    type: "Images",
    size: "264 Gb",
    colors: ["rgba(0,0,0,0.8)", "#009E60"],
    icon: <Entypo name="images" size={24} color="#009E60" />,
  },
  {
    id: "2",
    type: "Video",
    size: "500 Gb",
    colors: ["rgba(0,0,0,0.8)", "#DAA520"],
    icon: <Entypo name="video-camera" size={24} color="#DAA520" />,
  },
  {
    id: "3",
    type: "Music",
    size: "500 Gb",
    colors: ["rgba(0,0,0,0.8)", "#913831"],
    icon: <Entypo name="music" size={24} color="#913831" />,
  },
];
const dtaa = {
  data: [0.4, 0.8],
};

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={styles.header}>
        <Feather name="menu" size={28} color="white" />
        <Text style={styles.headerText}>File Manager</Text>
        <Feather name="search" size={28} color="white" />
      </View>
      <ScrollView>
        <FlatListContainer
          data={data}
          heightOne={160}
          heightTwo={160}
          widthOne={173}
          widthTwo={170}
          marginTop={"32%"}
        />
        <View style={{ marginVertical: 15 }}>
          <GradientContainer
            heightOne={230}
            heightTwo={230}
            widthOne={"91%"}
            widthTwo={"100%"}
            colors={["#1C1C1C", "#DAA520"]}
            children={
              <View style={styles.chartContainer}>
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "#1C1C1C",
                    right: "10%",
                  }}
                >
                  <ProgressChart
                    data={dtaa}
                    width={screenWidth}
                    height={190}
                    strokeWidth={15}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={true}
                  />
                </View>
                <View
                  style={{ alignSelf: "flex-end", right: -15, marginTop: 20 }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        borderRadius: 15,
                        width: 15,
                        height: 15,
                        backgroundColor: "#FEB960",
                      }}
                    ></View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: 18,
                        marginHorizontal: 10,
                      }}
                    >
                      Phone Memory
                    </Text>
                  </View>
                  <View style={{ marginHorizontal: 24 }}>
                    <Text
                      style={{
                        color: "lightgray",
                        fontSize: 14,
                        fontWeight: "400",
                        paddingVertical: 5,
                      }}
                    >
                      Used 204 Gb
                    </Text>
                    <Text
                      style={{
                        color: "lightgray",
                        fontSize: 14,
                        fontWeight: "400",
                      }}
                    >
                      Used 204 Gb
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 2,
                    backgroundColor: "#2B2B2B",
                    width: "40%",
                    alignSelf: "flex-end",
                    marginVertical: 10,
                  }}
                />

                <View style={{ alignSelf: "flex-end", right: -5 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        borderRadius: 15,
                        width: 15,
                        height: 15,
                        backgroundColor: "#FEB960",
                      }}
                    ></View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: 18,
                        marginHorizontal: 10,
                      }}
                    >
                      Memory Card
                    </Text>
                  </View>
                  <View style={{ marginHorizontal: 24 }}>
                    <Text
                      style={{
                        color: "lightgray",
                        fontSize: 14,
                        fontWeight: "400",
                        paddingVertical: 5,
                      }}
                    >
                      Used 204 Gb
                    </Text>
                    <Text
                      style={{
                        color: "lightgray",
                        fontSize: 14,
                        fontWeight: "400",
                      }}
                    >
                      Used 204 Gb
                    </Text>
                  </View>
                </View>
              </View>
            }
          />
        </View>

        <FlatListContainer
          data={datas}
          heightOne={100}
          heightTwo={100}
          widthOne={103}
          widthTwo={100}
        />
        <View style={{ marginTop: 20 }}>
          <GradientContainer
            colors={["#1C1C1C", "#DAA520"]}
            heightOne={70}
            heightTwo={70}
            widthOne={"91%"}
            widthTwo={"100%"}
            children={
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="document-text" size={28} color="#9B5957" />
                <View style={{ marginHorizontal: 10, width: "80%" }}>
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "500" }}
                  >
                    Documents
                  </Text>
                  <Text
                    style={{
                      color: "lightgray",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    236 Itmes
                  </Text>
                </View>
                <Entypo
                  name="dots-three-vertical"
                  size={24}
                  color="lightgray"
                />
              </View>
            }
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <GradientContainer
            colors={["#1C1C1C", "#913831"]}
            heightOne={70}
            heightTwo={70}
            widthOne={"91%"}
            widthTwo={"100%"}
            children={
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="document-text" size={28} color="#9B5957" />
                <View style={{ marginHorizontal: 10, width: "80%" }}>
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "500" }}
                  >
                    Documents
                  </Text>
                  <Text
                    style={{
                      color: "lightgray",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    236 Itmes
                  </Text>
                </View>
                <Entypo
                  name="dots-three-vertical"
                  size={24}
                  color="lightgray"
                />
              </View>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#1C1C1C",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#1C1C1C",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1, index) => {
    if (index === 0) return `rgba(255, 187, 86, ${opacity})`;
    if (index === 1) return `rgba(233, 122, 108, ${opacity})`;
    return `rgba(26, 255, 146, ${opacity})`;
  },
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
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
  chartContainer: {
    backgroundColor: "#1C1C1C",
  },
  chartTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "right",
  },
});

export default HomeScreen;
