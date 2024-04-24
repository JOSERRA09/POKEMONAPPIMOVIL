import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, TextInput } from 'react-native';
import Buscar from "./components/buscar.js";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import buscar from './components/buscar.js';

export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');
        const data = await response.json();
        setPokemons(data.results);
        setLoading(false);
        
      } catch (error) {
        console.error('error los pokemones no cargan', error);
      }
    };

    fetchPokemons();
  }, []);
  return (
    <View style={styles.container}>
      <Text>                                                    POKEMON GO                   </Text>
  
      <Buscar></Buscar>
      
      {loading ? (
        <ActivityIndicator size="large" color="#FF0000" />
      ) : (
        <FlatList
          data={pokemons}
          renderItem={({ item }) => (
            <View style={styles.pokemonItem}>
              <Image
                style={styles.image}
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(item.url)}.png` }}
              />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const getPokemonId = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

const styles = StyleSheet.create({
  container: {
    flex: 50,
    paddingTop: 35,
    backgroundColor: "#00FBF7", 
    display: "flex",
    justifyContent: "center",

  },
  title: {
    fontSize: 150,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 150,
    color: "#E30000",
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
    backgroundColor: "black",
  },
  name: {
    fontSize: 25,
    color:"blue",
  },
  Text:{
    fontSize:23,
    color:"red",
  }


});
 /* const estilos = StyleSheet.create({
    contenedor : {
  
      backgroundColor: "#cd853f"
  
       
 },
*/