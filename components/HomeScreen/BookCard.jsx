import { View, Image, Text, StyleSheet } from "react-native";

const BookCard = ({ title, poster }) => {
  return (
    <View style={style.card}>
      <Image source={{ uri: poster }} style={style.image} />
      <Text style={style.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default BookCard;

const style = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 15,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },
});
