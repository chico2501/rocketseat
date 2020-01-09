import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';

export default createAppContainer(
  createSwitchNavigator(
    {
      CheckIn,
      SignIn,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#C00',
        },
      },
    }
  )
);
