import React from 'react'
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from '../screens/OrderScreen';

export type RootStackParamList = {
  Main: undefined;
  ModalScreen: { userId: string; name: string };
  Order: { order: Order };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          options={{ headerShown: false }}
          name="ModalScreen"
          component={ModalScreen}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="Order" component={OrderScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator