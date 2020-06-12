import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { LongPressGestureHandler } from "react-native-gesture-handler";

const ScaleButton = ({
  children,
  activeScale = 0.9,
  springConfig = {
    damping: 10,
    mass: 1,
    stiffness: 200,
  },
  contentContainerStyle,
  handlerProps = {
    maxDist: 50,
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
    <LongPressGestureHandler
      {...handlerProps}
      minDurationMs={0.5}
      // shouldCancelWhenOutside
      onGestureEvent={gestureHandler}
    >
      <Animated.View style={[sz, contentContainerStyle]}>
        {children}
      </Animated.View>
    </LongPressGestureHandler>
  );
};

export default ScaleButton;
