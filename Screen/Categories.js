import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const API_URL = "https://dev.trieazy.com/api/v2/products";
const imagePaths = [
  require("../assets/image1.jpg"),
  require("../assets/image2.jpg"),
  require("../assets/image3.jpg"),
  require("../assets/image4.jpg"),
];

export default function Categories() {
  const [images, setImages] = useState(imagePaths);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      flatListRef.current.scrollToIndex({
        index: (currentIndex + 1) % images.length,
        animated: true,
      });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, currentIndex]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.image} />
  );

  const Card = ({ title, content, imageUrl }) => (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image_pro} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card
            title={item.main_price}
            content={item.name}
            imageUrl={item.thumbnail_image}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: screenWidth,
    height: 200,
    resizeMode: "cover",
  },
  image_pro: {
    width: 160,
    height: 300,
    resizeMode: "cover",
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
