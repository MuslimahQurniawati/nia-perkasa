import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function DetailBukuPage() {
  const router = useRouter();
  const { poster, title, overview, rating, release } =
    useLocalSearchParams();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* BACK BUTTON */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Kembali</Text>
      </TouchableOpacity>

      {/* POSTER */}
      <Image
        source={{ uri: IMAGE_BASE_URL + poster }}
        style={styles.cover}
      />

      {/* INFO */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>⭐ {rating}</Text>
      <Text style={styles.release}>Rilis: {release}</Text>

      {/* DESKRIPSI */}
      <Text style={styles.desc}>{overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  back: {
    fontSize: 16,
    marginBottom: 10,
    color: "#305763",
  },
  cover: {
    width: "100%",
    height: 420,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 4,
  },
  release: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  desc: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
  },
});
