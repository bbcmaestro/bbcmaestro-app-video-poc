import React, { useState } from 'react';
import Video from 'react-native-video';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const VideoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(true);

  const fullScreenPlayer = () => {
    videoPlayer.presentFullscreenPlayer();
    setLoading(false);
  }

  const playerDismissed = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView 
      style={{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        position: 'absolute', 
        top: 0,
        bottom: 0,
        left: 0, 
        right: 0
    }}>
      
      {loading && <Text style={{color: "white"}}>Loading...</Text>}
      
      <Video
        source={{uri: route.params.uri}}
        ref={player => {videoPlayer = player}}
        resizeMode='cover'
        paused={false}
        onFullscreenPlayerDidDismiss={() => playerDismissed()}
        onLoad={() => fullScreenPlayer()}
      />
    </SafeAreaView>
  );
};

export default VideoScreen;
