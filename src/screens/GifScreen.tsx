import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationService } from '../navigation/NavigationService';
import { ROUTES } from '../navigation/Routes';


const GifScreen: React.FC = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif' }}
          style={styles.gif}
        />
    
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  gif: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default GifScreen;