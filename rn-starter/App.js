import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentScreens from "./src/screens/ComponentScreens";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "The App",
    },
  }
);

export default createAppContainer(navigator);
