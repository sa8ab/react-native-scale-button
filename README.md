# react-native-scale-button

Touchable scale using gesture handler and reanimated V2

![Demo Gif](https://i.imgur.com/Z9ArxgC.gif)

# instalation

**This package uses react-native-reanimated 2 and react-native-gesture-handler so make sure you have both installed**
[Reanimated v2 instalation](https://docs.swmansion.com/react-native-reanimated/docs/installation#installing-the-package),
[Gesture Handler instalation](https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started.html#installation).

If you are using react-navigation, react-native-gesture-handler is installed as well, only follow instalation documentation for Reanimated V2 in order to setting it up for second version.

# usage

```
import ScaleButton from 'react-native-scale-button';

const myComponent = () => {
  return (
    <View style={s.container}>
      <ScaleButton activeScale={0.94} contentContainerStyle={{backgroundColor: '#121212'}}>
        <Text>My Scale Button :)</Text>
      </ScaleButton>
    </View>
  );
};
```

# props

- **activeScale**: The scale in which the button will animte be when pressed.
- **onPress**: The function to be called when pressing the button. to be added
- **springConfig**: Spring config for the animation. defaults to

```
{
  damping: 10,
  mass: 1,
  stiffness: 200,
}
```

- **contentContainerStyle**: Style for the View element containing the children.
- **handlerProps**: type object. LongPressGestureHandler props, whatever you put here will be applied to LongPressGestureHandler imported from react-native-gesture-handler
