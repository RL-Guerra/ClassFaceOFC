import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Button } from 'react-native';

export const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);  // Novo estado para exibir o aviso

  const handleCadastro = () => {
    if (nome && email && senha) {
      setCadastroSucesso(true); // Atualiza o estado para exibir a mensagem de sucesso
      Alert.alert('Cadastro realizado com sucesso!', `Bem-vindo, ${nome}!`);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Home' onPress={() => router.navigate('/(tabs)')} />
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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {cadastroSucesso && (
        <Text style={styles.sucessoTexto}>Cadastro realizado com sucesso!</Text>
      )}
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
  sucessoTexto: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default TelaCadastro;