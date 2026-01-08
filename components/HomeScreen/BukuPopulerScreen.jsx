// import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BukuFavorit = () => {
//   const [books, setBooks] = useState([]);
  const router = useRouter();

//   useEffect(() => {
//     // fetchFavorites();
//   }, []);

//   const fetchFavorites = async () => {
//     try {
//       const response = await fetch('https://api.example.com/books/favorites');
//       const data = await response.json();
//       setBooks(data.slice(0, 8));
//     } catch (error) {
//       console.error('Error fetching favorites:', error);
//       setBooks([]);
//     }
//   };

  const renderItem = ({ item, index }) => {
    if (index === 8) {
      return (
        <TouchableOpacity onPress={() => router.push('/components/HomeScreen/BukuFavoritPage.jsx')}>
          <View style={styles.seeMore}>
            <Text style={styles.seeMoreText}>Selengkapnya</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.bookItem}>
        <Image source={{ uri: item.cover }} style={styles.cover} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

//   const data = [...books, { type: 'seeMore' }];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        // data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 0,
    height: 160
  },
  list: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  bookItem: {
    width: 140,
    marginRight: 12,
    alignItems: 'center',
  },
  cover: {
    width: 140,
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 4,
  },
  seeMore: {
    width: 140,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  seeMoreText: {
    fontSize: 14,
    color: '#333',
  },
});

export default BukuFavorit;