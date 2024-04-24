import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    
    titulo: {
        flex: 100,
      fontSize: 100,
      fontWeight: 'bold',
      color: 'Red'
    }
  });

function Titulo(){
    return (
     
        <Text style={styles.titulo}>Lista de Pokemons</Text>
      
    );
}

export default Titulo;