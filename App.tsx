import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CustomIndicatorExample from "./CustomIndicatorExample";

const FirstRoute = () => {
  return <View style={{ flex: 1, backgroundColor: "yellow" }}></View>;
};

const SecondRoute = () => {
  return <View style={{ flex: 1, backgroundColor: "pink" }}></View>;
};

const ThirdRoute = () => {
  return <View style={styles.indiContainer}>
    <View style={styles.topIndi}></View>
    <View style={styles.triangle}></View>
  </View>
}
function App2() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [numberSelected, setSelected] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        // indicatorStyle={{ backgroundColor: "#BC2123" }}
        renderIndicator={() => {
          <ThirdRoute></ThirdRoute>
        }}
        activeColor="#BC2123"
        style={{ backgroundColor: "#fff" }}
        inactiveColor="#515C6F"
      />
    );
  };

  return (
    <TabView
      style={{ top: 80 }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default function App() {
  return <App2></App2>
}

const styles = StyleSheet.create({
  indiContainer: {
    height: 5,
    width: "100%",
    marginTop: 50,
  },
  topIndi: {
    width: '100%',
    height: '50%',
    backgroundColor: 'red',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    transform: [{ rotate: "180deg" }],
  },
});
