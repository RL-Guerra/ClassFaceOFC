import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Button } from 'react-native';

export const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Verifica se o email e a senha não estão vazios
    if (email && senha) {
      Alert.alert('Login realizado com sucesso!', `Email: ${email}`);
      // Redireciona para a tela de lista de presença
      router.navigate('/presenca');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Home' onPress={ () => router.navigate('/(tabs)')}/>
      <Text style={styles.title}>Login</Text>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address" // Especifica que o teclado deve ser para email
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 50,
    borderRadius: 125,  // Ajuste para borda redonda
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#1C1C1C',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#000080',
    borderRadius: 100,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaLogin;