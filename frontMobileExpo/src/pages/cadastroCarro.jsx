import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { addCarro } from '../data/carros'; // Importa a função atualizada
import { Picker } from '@react-native-picker/picker';

const CadastroCarro = ({ navigation }) => {
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [status, setStatus] = useState('Disponível');
  const [chassi, setChassi] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleCadastroCarro = async () => {
    if (!placa || !marca || !modelo || !ano || !cor || !status || !chassi || !anoFabricacao || !categoria) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    const novoCarro = { placa, marca, modelo, ano: parseInt(ano), cor, status, chassi, anoFabricacao: parseInt(anoFabricacao), categoria };
    await addCarro(novoCarro); // Utiliza a função atualizada com AsyncStorage
    Alert.alert(
      "Sucesso",
      "Carro cadastrado com sucesso!",
      [
        {
          text: "Cadastrar Novo Carro",
          onPress: () => {
            setPlaca('');
            setMarca('');
            setModelo('');
            setAno('');
            setCor('');
            setStatus('Disponível');
            setChassi('');
            setAnoFabricacao('');
            setCategoria('');
          }
        },
        {
          text: "Voltar",
          onPress: () => navigation.navigate('Carro')
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPlaca}
        value={placa}
        placeholder="Placa"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMarca}
        value={marca}
        placeholder="Marca"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setModelo}
        value={modelo}
        placeholder="Modelo"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAno}
        value={ano}
        placeholder="Ano"
        keyboardType="numeric"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCor}
        value={cor}
        placeholder="Cor"
        placeholderTextColor="#8a2be2"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}>
          <Picker.Item label="Disponível" value="Disponível" />
          <Picker.Item label="Indisponível" value="Indisponível" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setChassi}
        value={chassi}
        placeholder="Chassi"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAnoFabricacao}
        value={anoFabricacao}
        placeholder="Ano de Fabricação"
        keyboardType="numeric"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCategoria}
        value={categoria}
        placeholder="Categoria"
        placeholderTextColor="#8a2be2"
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastroCarro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#E4E9F7',
  },
  input: {
    fontSize: 18,
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#E4E9F7',
    color: '#8a2be2',
  },
  pickerContainer: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    backgroundColor: "#E4E9F7",
  },
  button: {
    borderRadius: 5,
    height: 50,
    backgroundColor: "#8a2be2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: '#e0d7dc',
    fontSize: 20,
  }
});

export default CadastroCarro;
