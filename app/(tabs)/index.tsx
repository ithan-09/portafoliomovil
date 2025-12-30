import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Hola! Soy Tu nexon </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://github.com/ithan-09/proyectodecero.1/blob/main/curriculon.jpeg' }} // Placeholder
        />
        <ThemedText style={styles.description}>
          Desarrollador de Software apasionado por crear aplicaciones móviles increíbles con React Native.
        </ThemedText>

        <ThemedText style={styles.intro}>
          Bienvenido a mi portafolio profesional. Aquí encontrarás una muestra de mi trabajo, mis habilidades y cómo contactarme.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#0a7ea4',
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  intro: {
    textAlign: 'center',
    lineHeight: 24,
  }
});
