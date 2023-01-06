import React from 'react';
import {
  SafeAreaView,
  Button,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import * as ScreenOrientation from 'expo-screen-orientation';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {height: heightRN, width: widthRN} = useWindowDimensions();
  const {height: heightRNSAC, width: widthRNSAC} = useSafeAreaFrame();

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

  const playVideo = uri => {
    navigation.navigate('Video', {uri: uri});
  };

  return (
    <SafeAreaView>
      <Button
        title="🐇 Play Big Buck Bunny 🐇"
        onPress={() =>
          playVideo(
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          )
        }
      />

      <Button
        title="🐘 Play Elephants Dream 🐘"
        onPress={() =>
          playVideo(
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          )
        }
      />
      <Text
        style={{
          marginBottom: 20,
        }}>
        useSafeAreaFrame, react-native-safe-area-context
      </Text>
      <Text
        style={{
          marginBottom: 20,
        }}>
        Width: {widthRNSAC}, Height: {heightRNSAC}
      </Text>
      <View
        style={{
          width: widthRNSAC,
          backgroundColor: '#eeccee',
          marginBottom: 50,
        }}>
        <Text>
          This text should fill the entire screen and not exceed boundaries.
          This text should fill the entire screen and not exceed boundaries.
          This text should fill the entire screen and not exceed boundaries.
          This text should fill the entire screen and not exceed boundaries.
        </Text>
      </View>
      <Text
        style={{
          marginBottom: 20,
        }}>
        useWindowDimensions, React Native
      </Text>
      <Text
        style={{
          marginBottom: 20,
        }}>
        Width: {widthRN}, Height: {heightRN}
      </Text>
      <View
        style={{
          width: widthRN,
          backgroundColor: '#eeccee',
        }}>
        <Text>
          This text should fill the entire screen and not exceed boundaries.
          This text should fill the entire screen and not exceed boundaries.
          This text should fill the entire screen and not exceed boundaries.
          This text should fill the entire screen and not exceed boundaries.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
