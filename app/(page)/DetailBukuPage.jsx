import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const DetailBukuPage = ({ route }) => {
  const { book } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      {/* ===== COVER ===== */}
      <View style={styles.coverWrapper}>
        <Image
          source={{ uri: IMAGE_BASE_URL + book.poster_path }}
          style={styles.cover}
        />
      </View>

      {/* ===== INFO ===== */}
      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>
          Penulis buku: <Text style={{ fontWeight: "600" }}>Tidak diketahui</Text>
        </Text>

        {/* ===== RATING ===== */}
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ {book.vote_average.toFixed(1)}</Text>
          <TouchableOpacity style={styles.rateButton}>
            <Text style={styles.rateText}>Rate</Text>
          </TouchableOpacity>
        </View>

        {/* ===== STATS ===== */}
        <View style={styles.stats}>
          <Text>⭐ {book.vote_count}</Text>
          <Text>📖 1</Text>
          <Text>📚 125</Text>
        </View>

        {/* ===== SINOPSIS ===== */}
        <Text style={styles.sectionTitle}>Synopsis</Text>
        <Text style={styles.synopsis}>
          {book.overview || "Sinopsis belum tersedia."}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailBukuPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F2F",
  },

  coverWrapper: {
    alignItems: "center",
    marginTop: 30,
  },

  cover: {
    width: 200,
    height: 300,
    borderRadius: 16,
  },

  content: {
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  author: {
    textAlign: "center",
    marginTop: 4,
    color: "#666",
  },

  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    gap: 10,
  },

  rating: {
    fontSize: 16,
  },

  rateButton: {
    backgroundColor: "#2ECC71",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 12,
  },

  rateText: {
    color: "#fff",
    fontSize: 12,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  synopsis: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
});
