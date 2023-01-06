import React from 'react';
import {
  SafeAreaView,
  Button,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();

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
        Width: {width}, Height: {height}
      </Text>
      <View
        style={{
          width,
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
