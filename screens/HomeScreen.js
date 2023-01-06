import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

const HomeScreen = () => {
  const navigation = useNavigation();

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

  const playVideo = (uri) => {
    navigation.navigate('Video', { uri: uri });
  }

  return (
    <SafeAreaView>
      <Button
        title='🐇 Play Big Buck Bunny 🐇'
        onPress={() => playVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')}
      />

      <Button
        title='🐘 Play Elephants Dream 🐘'
        onPress={() => playVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
