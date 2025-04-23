import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

export const TelaRegistroPresenca = () => {

  const registros = [
    { id: '1', nome: 'Raphael Guerra', data: '27/01/2025', status: 'Presente' },
    { id: '2', nome: 'Barbara Nayumi', data: '15/02/2025', status: 'Presente' },
    { id: '3', nome: 'Leonardo Braga', data: '23/04/2025', status: 'Ausente' },
  ];

  return (
    <View style={styles.container}>
      <Button title='Home' onPress={ () => router.navigate('/(tabs)')}/>

      <Text style={styles.title}>Registro de Presença</Text>

      {/* Lista de Registros de Presença */}
      <Text style={styles.sectionTitle}>📅 Registros</Text>
      {registros.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemText}>
            {item.nome} - {item.data} - {item.status}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
  },
});

export default TelaRegistroPresenca;