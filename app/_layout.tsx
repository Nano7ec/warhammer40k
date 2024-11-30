import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    
    <GestureHandlerRootView>
      <Stack>
      <Stack.Screen name="index" />
    </Stack>
    </GestureHandlerRootView>
  );
}
