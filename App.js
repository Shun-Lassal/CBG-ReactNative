import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigationState } from '@react-navigation/native';
import { useRoute } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue sur CBGames!</Text>
      <Text>Veuillez vous connecter/vous enregistrer</Text>
      <Button 
        style={styles.buttonRegisterLogin}
        onPress={() => navigation.navigate('Connexion')}
        title="Connexion"
        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de connexion"
      />
      <Button 
        style={styles.buttonRegisterLogin}
        onPress={() => navigation.navigate('Inscription')}
        title="Inscription"
        accessibilityLabel="Appuyez sur ce bouton pour être redirigé vers la page de inscription"
      />
    </View>
  );
}

function InscriptionScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Inscription</Text>
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="E-mail" 
        autoComplete="email" 
      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Pseudo" 
        autoComplete="name" 
      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Mot de passe" 
        autoComplete="password" 
      />
      <TextInput
        style={styles.inputRegisterLogin}
        placeholder="Conf. Mot de passe" 
        autoComplete="password" 
      />
      <Button 
        style={styles.buttonRegisterLogin}
        title="S'inscrire"
        accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
        onPress={() => navigation.navigate('Connexion')}
      />
    </View>
  );
}

const ConnexionScreen = ({navigation}) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput 
        style={styles.inputRegisterLogin}
        placeholder="Pseudo"
        autoComplete="name"
        onChange={e=>setPseudo(e.target.value)}
      />
      <TextInput 
        style={styles.inputRegisterLogin}
        placeholder="Mot de passe"
        autoComplete="password"
        onChange={e=>setPassword(e.target.value)}
      />
      <Button 
        style={styles.buttonRegisterLogin}
        title="Se connecter"
        accessibilityLabel="Appuyez sur ce bouton pour vous connecter"
        onPress={() => {
          navigation.navigate('Profil', {
            pseudo: pseudo,
            password: password,
          });
          console.log('Pseudo: ' + JSON.stringify(pseudo) + ' / ' + 'Password: ' + JSON.stringify(password));
        }}
      />
    </View>    
  );
}

const ProfilScreen = ({route, navigation}) => {
  const { pseudo, password } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nom du profil: {pseudo}</Text>
      <Text>Password: {password}</Text>
      <Text>Parties Jouées</Text>
      <Text>Parties Gagnées</Text> 
      <Button 
        style={styles.buttonRegisterLogin}
        title="Retour au menu"
        accessibilityLabel="Appuyez sur ce bouton pour vous inscrire"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );  
}

function MainScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu des jeux</Text>
      <View>
        <View>
          <Image />
          <Text>Jeu 1</Text>
        </View>
        <View>
          <Image />
          <Text>Jeu 2</Text>
        </View>
        <View>
          <Image />
          <Text>Jeu 3</Text>
        </View>
      </View>
    </View>
  );  
}

function GameInfoScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nom du jeu</Text>
      <View>
        <Text>Nombre de joueurs: </Text>
        <Text>Durée de la partie: </Text>
        <Text>Description/Règles du jeu: </Text>
        <Button
          style={styles}
          placeholder="Jouer!"
          accessibilityLabel="Appuyez sur ce bouton pour jouer"
        />
      </View>
    </View>
  );
}

/*
function GameScreen(){
  return (
  
  );
}
*/

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ title: 'Inscription' }}/>
        <Stack.Screen name="Connexion" component={ConnexionScreen} options={{ title: 'Connexion' }}/>
        <Stack.Screen name="Profil" component={ProfilScreen} options={{ title: 'Profil' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRegisterLogin: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: '#797979',
    borderRadius: 5,
  },

  buttonRegisterLogin: {
    paddingTop:10,
  },
});
