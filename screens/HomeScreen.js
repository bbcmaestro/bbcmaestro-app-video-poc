import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Button
        title="Go to Video"
        onPress={() => navigation.navigate('Video')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
