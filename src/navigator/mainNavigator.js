import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps176022Navigator from '../features/Maps176022/navigator';
import Additem176021Navigator from '../features/Additem176021/navigator';
import Maps176017Navigator from '../features/Maps176017/navigator';
import UserProfile176013Navigator from '../features/UserProfile176013/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps176022: { screen: Maps176022Navigator },
Additem176021: { screen: Additem176021Navigator },
Maps176017: { screen: Maps176017Navigator },
UserProfile176013: { screen: UserProfile176013Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
