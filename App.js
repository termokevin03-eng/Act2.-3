import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Hardcoded movie data
const movies = [
  {
    id: 1,
    name: 'Avengers',
    year: '2012',
    genre: 'Action',
    description: 'A group of superheroes joins together to save the world.',
  },
  {
    id: 2,
    name: 'Spider-Man',
    year: '2002',
    genre: 'Action',
    description: 'A young hero uses his powers to protect people from danger.',
  },
  {
    id: 3,
    name: 'Batman',
    year: '2022',
    genre: 'Action',
    description: 'A masked hero investigates crime and protects his city.',
  },
];

// SCREEN 1: HOME
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Explorer</Text>

      <Text style={styles.subtitle}>
        Welcome to my simple Movie Explorer app!
      </Text>

      <Text style={styles.info}>
        Browse movies and view their details.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieList')}
      >
        <Text style={styles.buttonText}>View Movies</Text>
      </TouchableOpacity>
    </View>
  );
}

// SCREEN 2: MOVIE LIST
function MovieListScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.title}>🎥 Movie List</Text>

      {movies.map((movie) => (
        <TouchableOpacity
          key={movie.id}
          style={styles.movieCard}
          onPress={() =>
            navigation.navigate('MovieDetails', {
              name: movie.name,
              year: movie.year,
              genre: movie.genre,
              description: movie.description,
            })
          }
        >
          <Text style={styles.movieName}>{movie.name}</Text>
          <Text style={styles.movieInfo}>
            {movie.year} • {movie.genre}
          </Text>

          <Text style={styles.viewText}>View Details →</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// SCREEN 3: MOVIE DETAILS
function MovieDetailsScreen({ route, navigation }) {
  // Receive data from MovieListScreen
  const { name, year, genre, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Details</Text>

      <View style={styles.detailsCard}>
        <Text style={styles.detailsTitle}>{name}</Text>

        <Text style={styles.detailsText}>
          Year: {year}
        </Text>

        <Text style={styles.detailsText}>
          Genre: {genre}
        </Text>

        <Text style={styles.detailsText}>
          Description:
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// MAIN APP
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#172033',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Movie Explorer' }}
        />

        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{ title: 'Movie List' }}
        />

        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  listContainer: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#dbeafe',
    textAlign: 'center',
    marginBottom: 10,
  },

  info: {
    fontSize: 15,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 10,
  },

  backButton: {
    backgroundColor: '#475569',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  movieCard: {
    width: '100%',
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  movieName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },

  movieInfo: {
    fontSize: 15,
    color: '#94a3b8',
  },

  viewText: {
    color: '#60a5fa',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 12,
  },

  detailsCard: {
    width: '100%',
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 15,
  },

  detailsTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },

  detailsText: {
    fontSize: 17,
    color: '#cbd5e1',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: '#94a3b8',
    lineHeight: 24,
    marginTop: 5,
  },
});