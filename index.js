import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { LongPressGestureHandler } from "react-native-gesture-handler";

const ScaleButton = ({
  children,
  onPress = () => {},
  activeScale = 0.9,
  springConfig = {
    damping: 10,
    mass: 1,
    stiffness: 200,
  },
  contentContainerStyle,
  handlerProps,
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
      onPress();
      scale.value = 1;
    },
  });

  return (
    <LongPressGestureHandler
      minDurationMs={0.5}
      maxDist={10}
      {...handlerProps}
      onGestureEvent={gestureHandler}
    >
      <Animated.View style={[sz, contentContainerStyle]}>
        {children}
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const s = StyleSheet.create();

export default ScaleButton;
