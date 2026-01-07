import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import BukuFavorit from "../../components/HomeScreen/BukuFavorit";
import CariBuku from "../../components/HomeScreen/CariBuku";
import KategoriTema from "../../components/tema/KategoriTema";

const API_KEY = "5b382f23237d787c6e9c7b368ee29bcf";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const HomePage = () => {
  const [bukuFavorit, setBukuFavorit] = useState([]);
  const [novel, setNovel] = useState([]);
  const [selected, setSelected] = useState("matematika");

  const dataKategori = [
    { id: "matematika", name: "Matematika" },
    { id: "novel", name: "Novel" },
    { id: "komputer", name: "Komputer" },
    { id: "sejarah", name: "Sejarah" },
    { id: "hukum", name: "Hukum" },
  ];

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setBukuFavorit(data.results.slice(0, 5));
        setNovel(data.results.slice(5, 10));
      })
      .catch((error) => console.error(error));
  }, []);

  const renderPoster = ({ item }) => (
    <View style={style.card}>
      <Image
        source={{ uri: IMAGE_BASE_URL + item.poster_path }}
        style={style.poster}
      />
      <Text style={style.cardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style.scrollviewContainer}
    >

      <View style={style.searchWrapper}>
        <CariBuku />
      </View>


      <View style={style.sectionHeader}>
        <View style={{ paddingVertical: 20 }}>
          <KategoriTema
            data={dataKategori}
            selected={selected}
            onSelect={(id) => setSelected(id)}
          />
        </View>
      </View>

      {/* ===== BUKU FAVORIT ===== */}
      <View style={style.sectionHeader}>
        <Text style={style.sectionTitle}>Rekomendasi Buku</Text>

        <FlatList
          data={bukuFavorit}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPoster}
          />
      </View>

      {/* ===== NOVEL ===== */}
      <View style={style.sectionHeader}>
        <Text style={style.sectionTitle}>Buku Populer</Text>

        <FlatList
          data={novel}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPoster}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};


export default HomePage;

const style = StyleSheet.create({
containerContent: {
  flex: 1,
  alignItems: "center",
  backgroundColor: "#ffffff",
},

scrollviewContainer: {
    paddingBottom: 130,
},

searchWrapper: {
  width: "100%",
  alignItems: "center",
},
card: {
  width: 130,
  marginHorizontal: 10,
},

poster: {
  width: 130,
  height: 200,
  borderRadius: 12,
},

cardTitle: {
  fontSize: 12,
  marginTop: 6,
  color: "#000000",
  fontWeight: "500",
},

sectionHeader: {
  alignItems: "flex-start",
  width: "100%",
  paddingLeft: 20,
  marginBottom: 10,

},

sectionTitle: {
  fontSize: 18,
  fontWeight: "600",
  color: "#000000",
},
});
