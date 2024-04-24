import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

function buscar(){

    const [query, setQuery] = useState('');

    const handleSearch = () => {
      onSearch(query);
    };
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Buscador..."
            onChangeText={setQuery}
            
          />
         
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginBottom: 10,
      bordedercolor: "#E30000",
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#E30000',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
  });
  
  export default buscar;