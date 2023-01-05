import React from 'react';
import Video from 'react-native-video';
import { Button, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const VideoScreen = () => {
  const navigation = useNavigation();

  function fullScreen() {
    console.log(this.videoPlayer.presentFullscreenPlayer());
  }

  const videoStyle = {
    display: 'none',
    position: 'absolute',
    top: 100,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  };


  return (
    <SafeAreaView style={{backgroundColor: "black"}}>    
      <Video
        source={{uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
        ref={p => {this.videoPlayer = p;}}
        resizeMode="cover"
        paused={false}
        onFullscreenPlayerDidDismiss={() => navigation.navigate('Home')}
        onLoad={() => videoPlayer.presentFullscreenPlayer()}
        // style={videoStyle}
      />
    </SafeAreaView>
  );
};

export default VideoScreen;
