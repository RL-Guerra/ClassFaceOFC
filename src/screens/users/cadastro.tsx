import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Button } from 'react-native';

export const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCadastro = () => {
    if (nome && telefone && endereco) {
      Alert.alert('Cadastro realizado com sucesso!', `Bem-vindo, ${nome}!`);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Home' onPress={ () => router.navigate('/(tabs)')}/>
      <Text style={styles.title}>Cadastro</Text>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
    borderRadius: '100%',
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

export default TelaCadastro;