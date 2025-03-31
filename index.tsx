import { Usuarios } from '@/constants/Usuarios';
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfis de Clientes</Text>
      <FlatList
        data={Usuarios()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Text style={styles.cardTitle}>Id:</Text>
            <Text style={styles.cardText}>{item.id}</Text>
            <Text style={styles.cardTitle}>Nome:</Text>
            <Text style={styles.cardText}>{item.nome}</Text>
            <Text style={styles.cardTitle}>Nome do grupo:</Text>
            <Text style={styles.cardText}>{item.nome_grupo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f2ff', // Light blue background
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    color: '#1f4f78', // Dark blue color for the title
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderLeftWidth: 5, // Adding a blue left border to the card
    borderLeftColor: '#1f4f78', // Matching dark blue border
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4e6b8d', // Soft blue-gray color for titles
    marginBottom: 4,
  },
  cardText: {
    fontSize: 18,
    color: '#5f789f', // A medium blue-gray for the text
    marginBottom: 16,
  },
});
