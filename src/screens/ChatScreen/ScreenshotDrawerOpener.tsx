import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

// Opens the side drawer 15s after chat mounts so a simulator
// screenshot job can capture the chat, then the drawer, without taps.
// Compiled out of normal builds: the call site is gated on __SCREENSHOT_MODE__.
export const ScreenshotDrawerOpener = () => {
  const navigation =
    useNavigation<DrawerNavigationProp<Record<string, undefined>>>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.openDrawer();
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return null;
};
