import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/22506647?v=4';
const urlToMyGithub = 'https://github.com/JuniorMoura10';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={styles.content}>
        <Image
          accessibilityLabel="Imagem de perfil"
          style={styles.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text style={[styles.defaultText, styles.name]}>Júnior Moura</Text>
        <Text style={[styles.defaultText, styles.nickname]}>JuniorMoura10</Text>
        <Text style={[styles.defaultText, styles.description]}>
          Um entusiasta da tecnologia! Tecnologia é tendência!
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>
              Abrir no GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colorFontGithub,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorDarkFontGithub,
  },
});
