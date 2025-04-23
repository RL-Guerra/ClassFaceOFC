import { router } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';

export const TelaApresentacao = () => {
  const buttons = [
    { title: 'Cadastro', route: '/(stacks)/cadastro' },
    { title: 'Login', route: '/(stacks)/login' },
    { title: 'Lista de Presença', route: '/(stacks)/presenca' },
    { title: 'Reconhecimento Facial', route: '/(stacks)/reconhecimento_facial' },
    { title: 'Suporte', route: '/(stacks)/suporte' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.overlay}>
        {/* Botões organizados em linha */}
        <View style={styles.buttonContainer}>
          {buttons.map((btn, index) => (
            <View key={index} style={styles.buttonWrapper}>
              <Button
                title={btn.title}
                onPress={() => router.navigate(btn.route as any)}
              />
            </View>
          ))}
        </View>

        {/* Conteúdo da tela */}
        <Text style={styles.title}>ClassFace</Text>
        <Text style={styles.title}>Bem-vindo ao ClassFace</Text>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Acesse facilmente os recursos de presença, reconhecimento facial e muito mais!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonWrapper: {
    margin: 6,
    minWidth: 140,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000080',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    borderRadius: 999,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default TelaApresentacao;