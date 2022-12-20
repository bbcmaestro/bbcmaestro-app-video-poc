import React from 'react';
import Video from 'react-native-video';

const App = () => {
  return (
    <Video
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      fullscreen={true}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    />
  );
};

export default App;
