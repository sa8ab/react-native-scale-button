import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { LongPressGestureHandler } from "react-native-gesture-handler";

const App = ({
  activeScale = 0.9,
  springConfig = {
    damping: 15,
    mass: 1,
    stiffness: 200,
  },
}) => {
  const scale = useSharedValue(1);
  const sz = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(scale.value, springConfig),
        },
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = activeScale;
    },
    onCancel: () => {
      scale.value = 1;
    },
    onEnd: () => {
      scale.value = 1;
    },
  });

  return (
    <View style={s.container}>
      <LongPressGestureHandler
        minDurationMs={0.5}
        maxDist={50}
        // shouldCancelWhenOutside
        onGestureEvent={gestureHandler}
      >
        <Animated.View style={sz}>
          <Text style={s.text}>Touchable Scale</Text>
        </Animated.View>
      </LongPressGestureHandler>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: "#dcdde1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "#282828",
    padding: 10,
    color: "white",
    borderRadius: 10,
    elevation: 4,
    fontSize: 25,
  },
});

export default App;
