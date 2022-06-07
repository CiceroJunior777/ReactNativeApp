import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Navigation } from 'react-native';


// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function authUser(navigation, user, password){
  if (user == "admin" && password == "admin"){
    navigation.navigate('Home');
  }else{
    return "Erro, Email ou Senha Inválido"
  }
}

export default function Login({navigation}) {

  const [user,setUser] = useState (null);
  const [password, setPassword] = useState (null);
  const [result] = useState(null);

  return (
    <View>
      <Card>
      <Text style={styles.paragraph}>Digite seu Email e senha 
      para realizar o login</Text>
        <TextInput
        style = {styles.input}
        onChangeText={setUser}
        value={user}
        placeholder="Digite seu Email"
        />

        <TextInput
        style = {styles.inputSenha}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua Senha"
        secureTextEntry={true}
        />

        <TouchableOpacity
        style={styles.button}
        onPress = { () => authUser(navigation, user, password)}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph}> {result}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  input: {
    borderWidth: 1,
    margin: 60,
    marginBottom: 20,
    padding: 7,
    borderRadius: 10,
    borderColor: '#00E9E9',
    fontSize: 14,
  },
   inputSenha: {
     borderWidth: 1,
      margin: 60,
      marginTop: 0,
      padding: 7,
      borderRadius: 10,
      borderColor: '#00E9E9',
      fontSize: 14,
   },
    button: {
    alignItems: "center",
    backgroundColor: "#1CCBCB",
    padding: 10,
    margin: 80,
    marginTop: 0,
    marginBottom: 5,
    borderRadius: 15,
  },
});